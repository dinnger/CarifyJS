# Autenticación

La API de ClarifyJS ofrece distintos métodos de autenticación para proteger el acceso a la documentación cuando sea necesario.

## Métodos de autenticación

ClarifyJS soporta los siguientes métodos de autenticación:

### Autenticación básica

La autenticación básica utiliza un usuario y contraseña simple:

```js
const generator = new ClarifyJS({
  auth: {
    type: "basic",
    username: "admin",
    password: process.env.DOC_PASSWORD,
  },
});
```

### Autenticación con JWT

Para escenarios más avanzados, puedes utilizar autenticación con tokens JWT:

```js
const generator = new ClarifyJS({
  auth: {
    type: "jwt",
    secret: process.env.JWT_SECRET,
    expiresIn: "24h",
  },
});
```

## Personalización

Puedes personalizar completamente el flujo de autenticación implementando tu propio middleware:

```js
const generator = new ClarifyJS();

generator.useAuth((req, res, next) => {
  // Tu lógica de autenticación personalizada
  if (isAuthenticated(req)) {
    next();
  } else {
    res.redirect("/login");
  }
});
```
