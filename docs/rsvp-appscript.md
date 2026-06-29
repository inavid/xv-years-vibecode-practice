# Integración RSVP con Google Sheets

## Resumen

El formulario de RSVP del sitio valida y registra confirmaciones usando un Google Apps Script publicado como Web App. El frontend envía los datos por JSONP para evitar problemas de CORS en un sitio estático.

## Importante sobre el deployment

Si el Apps Script está creado como proyecto standalone, `SpreadsheetApp.getActiveSpreadsheet()` no funciona en el Web App. En ese caso debes llenar `SPREADSHEET_ID` dentro de `apps-script/rsvp-webapp.gs`.

Si el script está vinculado directamente al Google Sheet, `SPREADSHEET_ID` puede quedarse vacío.

## Estructura del Sheet

La hoja debe contener estas columnas en la primera fila:

| Columna | Descripción |
| --- | --- |
| `codigo` | Código único del invitado |
| `invitado` | Nombre del invitado para mostrarlo en la confirmación |
| `boletos` | Número de boletos asignados al invitado |
| `confirmado` | Estado actual: `asiste`, `no asiste`, `no confirmado` |
| `fecha_confirmacion` | Fecha/hora en que se registró la última respuesta |

Si `SHEET_NAME` se deja vacío en Apps Script, se usa la primera hoja del documento.

## Flujo de negocio

1. El usuario captura código y respuesta.
2. El frontend llama al Web App con `action=confirm`.
3. Apps Script busca una fila que coincida por `codigo`.
4. Si no existe coincidencia, responde con error.
5. Si `confirmado` ya es `asiste`, responde con error y no sobrescribe el registro.
6. Si es la primera vez, actualiza `confirmado` y `fecha_confirmacion`.
7. Si la respuesta fue `asiste`, el frontend muestra modal con los `boletos`.
8. El nombre mostrado en el modal sale de la columna `invitado`.

## Contrato del Web App

### Request

Parámetros enviados desde el frontend:

- `action=confirm`
- `code=<codigo del invitado>`
- `attendance=asiste|no asiste`
- `callback=<nombre de callback JSONP>`

### Response exitosa

```json
{
  "ok": true,
  "message": "Tu asistencia quedó confirmada.",
  "guestName": "Nombre del invitado",
  "tickets": 2,
  "attendance": "asiste"
}
```

### Response con error

```json
{
  "ok": false,
  "message": "Esta invitación ya había sido confirmada previamente."
}
```

## Despliegue de Apps Script

1. Crear un Google Spreadsheet.
2. Crear la hoja `Invitados`.
3. Agregar los encabezados requeridos.
4. Abrir `Extensiones > Apps Script`.
5. Pegar el contenido de `apps-script/rsvp-webapp.gs`.
6. Si el proyecto de Apps Script no está vinculado al Sheet, llenar `SPREADSHEET_ID` con el ID del documento.
7. Guardar el proyecto.
8. En `Implementar > Nueva implementación`, publicar como `Aplicación web`.
9. Ejecutar como tu cuenta.
10. Dar acceso a `Cualquier persona`.
11. Copiar la URL del Web App.

## Configuración del frontend

Crear un archivo `.env` en la raíz del proyecto:

```bash
PUBLIC_RSVP_APPS_SCRIPT_URL="https://script.google.com/macros/s/TU_DEPLOYMENT_ID/exec"
```

## Archivos involucrados

- `src/components/RSVP.astro`: formulario, estados UI y modal.
- `apps-script/rsvp-webapp.gs`: lógica de validación y registro en Google Sheets.
- `AGENTS.md`: reglas del proyecto y contrato del RSVP.

## Notas operativas

- La validación normaliza acentos, espacios y mayúsculas/minúsculas.
- El código del invitado se compara en mayúsculas.
- Si cambian los encabezados, también debe actualizarse `rsvp-webapp.gs`.
- Si el deployment es standalone, el ID del spreadsheet debe definirse explícitamente.
