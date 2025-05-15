// Servidor Express para SSR
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer as createViteServer } from "vite";
import compression from "compression";
import sirv from "sirv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || 3000;

async function createServer() {
	const app = express();

	// Crear instancia de Vite para desarrollo
	let vite;

	if (!isProduction) {
		// En desarrollo, usamos el servidor de desarrollo de Vite
		vite = await createViteServer({
			server: { middlewareMode: true },
			appType: "custom",
		});

		// Middleware de Vite para desarrollo
		app.use(vite.middlewares);
	} else {
		// En producción, servir archivos estáticos
		app.use(compression());
		app.use(
			sirv(path.resolve(__dirname, "dist/client"), {
				maxAge: 31536000, // 1 año
				immutable: true,
			}),
		);
	}

	// Servir los archivos estáticos de 'public'
	app.use(
		sirv(path.resolve(__dirname, "public"), {
			maxAge: 31536000, // 1 año
			immutable: true,
		}),
	);

	// Middleware para SSR
	app.use("*", async (req, res, next) => {
		const url = req.originalUrl;

		try {
			let template, render;

			if (!isProduction) {
				// En desarrollo, leemos el HTML directamente
				template = fs.readFileSync(
					path.resolve(__dirname, "index.html"),
					"utf-8",
				);
				template = await vite.transformIndexHtml(url, template);

				// Cargamos el entry-server.js a través de Vite
				render = (await vite.ssrLoadModule("/src/entry-server.js")).render;
			} else {
				// En producción, usamos la versión compilada
				template = fs.readFileSync(
					path.resolve(__dirname, "dist/client/index.html"),
					"utf-8",
				);
				render = (await import("./dist/server/entry-server.js")).render;
			}

			// Renderizar la aplicación para esta URL
			const { appContent } = await render(url);

			// Reemplazar marcadores de posición en el template
			const html = template.replace("<!--app-html-->", appContent);

			// Enviar el HTML al cliente
			res.status(200).set({ "Content-Type": "text/html" }).end(html);
		} catch (e) {
			// En desarrollo, Vite proporciona un mejor stack trace
			if (!isProduction && vite) {
				vite.ssrFixStacktrace(e);
			}
			console.error("Error de SSR:", e);
			next(e);
		}
	});

	app.listen(PORT, () => {
		console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
	});
}

createServer();
