# Reglas del Proyecto

## Producto

- Sitio de invitación para los XV años de Nicole.
- El tono visual actual es elegante, editorial y cálido.
- Los cambios de UI deben respetar la estética existente salvo que se pida un rediseño.

## RSVP

- El formulario RSVP valida contra Google Sheets a través de un Google Apps Script publicado como Web App.
- La validación usa `codigo` como identificador único.
- El nombre visible para el modal sale de la columna `invitado` del Sheet.
- Si el registro ya tiene `confirmado = asiste`, el frontend debe mostrar error y no volver a confirmar.
- Si la confirmación es exitosa con `attendance = asiste`, el usuario debe ver una confirmación clara con su número de boletos.
- Si la respuesta es `no asiste`, se registra igualmente y se muestra confirmación simple.

## Google Sheet

- Columnas requeridas:
  - `codigo`
  - `invitado`
  - `boletos`
  - `confirmado`
  - `fecha_confirmacion`
- Si no se define nombre de hoja en Apps Script, se usa la primera hoja del documento.
- Valores válidos para `confirmado`:
  - `asiste`
  - `no asiste`
  - `no confirmado`

## Configuración

- El frontend espera la variable pública `PUBLIC_RSVP_APPS_SCRIPT_URL`.
- El código del Web App de Apps Script vive en `apps-script/rsvp-webapp.gs`.

## Criterios de cambio

- No introducir dependencias nuevas para resolver el RSVP si el flujo puede mantenerse en Astro + JS nativo.
- Mantener mensajes de error directos y entendibles.
- Documentar cualquier cambio de contrato entre frontend y Apps Script.
