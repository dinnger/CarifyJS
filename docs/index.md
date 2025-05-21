---
title: ClarifyJS
---

# ClarifyJS

ClarifyJS es un generador de sitios de documentación moderno construido sobre Astro. Está diseñado para ser rápido, flexible y fácil de usar, similar a Docusaurus pero aprovechando las últimas tecnologías web.

## Contents

## ¿Por qué ClarifyJS?

- Rendimiento: Construido con Astro, ClarifyJS ofrece sitios web increíblemente rápidos por defecto.
- Experiencia de Desarrollador: Disfruta de la simplicidad y el poder de Astro y su ecosistema.
- Personalizable: Adapta fácilmente la apariencia y funcionalidad a tus necesidades.
- Basado en Markdown: Escribe tu documentación en Markdown, un formato simple y ampliamente utilizado.

> [!NOTE]  
> Diagrama de flujo 😊

```mermaid
flowchart LR
    A[SAP] --> B[Hermes]
    B --> C[Logistika]
    C --> D[Base de Datos]
    D --> C
    C --> E[ELK]
```

## ejemplo de curl

```bash title="Token"
curl --request GET \
  --url https://test/api/v1/token \
  --data '{"username": "{{User.username}}", "password": "{{User.password}}"}'

```

```bash title="CURL"
curl -X 'GET' 'https://dummyjson.com/users/2' -H 'accept: application/json' \
-H 'Authorization: Bearer {{Token.token}}'\
| jq '.["company"]'
```

```bash title="CURL2"
curl --location --request PUT  'https://jira.atlassian.net/rest/api/3/search' \
--header 'Content-Type: application/json' \
--header 'Authorization: Basic d3JvbnF1aWxsb2RlQHRpZ28uY29tLmd0OkFUQVRUM3hGZkdGMElLekN0bkkyV0FtTFlpcFV5NGc5elhrQ1ZHWjYxV3BmSHJNRDVVOXNsWlVPdHNiNENvNUJ2UzRpY2xFZ25GTElWNzc2R1dFb0kzXzBmcFQ2ZGN0U3JrUVphcjJYaUNEYVdvbkdLQUY0bnB0M2VwaUstb1lHZVMwUkZPQ0lJdXdHUUR3dE1aeG1lVzJVUXM0RGhLRmpqUFk0ZGMweDJUMnJ6eGVoUDhoLTVmUT1EQjk1M0ZBRg==' \
--data '{
    "jql":"assignee=currentuser()",
    "expand": [
    "names",
    "schema",
    "operations"
  ],
  "fields": [
    "summary",
    "status",
    "assignee"
  ]
}'
```

## ¿Qué es ClarifyJS?

ClarifyJS es un generador de sitios de documentación moderno construido sobre Astro. Está diseñado para ser rápido, flexible y fácil de usar, similar a Docusaurus pero aprovechando las últimas tecnologías web.

## ¿Por qué ClarifyJS?

- **Rendimiento:** Construido con Astro, ClarifyJS ofrece sitios web increíblemente rápidos por defecto.
- **Experiencia de Desarrollador:** Disfruta de la simplicidad y el poder de Astro y su ecosistema.
- **Personalizable:** Adapta fácilmente la apariencia y funcionalidad a tus necesidades.
- **Basado en Markdown:** Escribe tu documentación en Markdown, un formato simple y ampliamente utilizado.

## ¿Qué es ClarifyJS?

ClarifyJS es un generador de sitios de documentación moderno construido sobre Astro. Está diseñado para ser rápido, flexible y fácil de usar, similar a Docusaurus pero aprovechando las últimas tecnologías web.

> [!NOTE]  
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]  
> Crucial information necessary for users to succeed.

> [!WARNING]  
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
