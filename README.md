# Pagina Nicole

Sitio Astro para la invitación de los XV años de Nicole.

## Comandos

- `npm install`: instala dependencias
- `npm run dev`: levanta el entorno local
- `npm run build`: genera el build de producción
- `npm run preview`: sirve el build localmente

## RSVP con Google Sheets

El formulario RSVP valida y registra confirmaciones contra un Google Sheet usando un Google Apps Script publicado como Web App.

### Variables de entorno

Crear `.env` con:

```bash
PUBLIC_RSVP_APPS_SCRIPT_URL="https://script.google.com/macros/s/TU_DEPLOYMENT_ID/exec"
```

### Documentación

- `docs/rsvp-appscript.md`
- `AGENTS.md`
- `apps-script/rsvp-webapp.gs`
