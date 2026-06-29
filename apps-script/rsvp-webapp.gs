const SHEET_NAME = 'Invitados Nicole XV';
const SPREADSHEET_ID = '10-fMxuNRJMC4zoNmJCYq76dXg23GkWFHeOMwEZ0LA1Y';
const HEADERS = {
  guestName: 'invitado',
  code: 'codigo',
  tickets: 'boletos',
  attendance: 'confirmado',
  confirmationDate: 'fecha_confirmacion',
};

function doGet(e) {
  const params = e && e.parameter ? e.parameter : {};
  const callback = params.callback;

  try {
    const action = String(params.action || '').trim().toLowerCase();

    if (!action) {
      return buildJsonpResponse(callback, {
        ok: false,
        message: 'Falta el parámetro action.',
      });
    }

    if (action !== 'confirm') {
      return buildJsonpResponse(callback, {
        ok: false,
        message: 'Acción no soportada.',
      });
    }

    const result = confirmAttendance(params);
    return buildJsonpResponse(callback, result);
  } catch (error) {
    return buildJsonpResponse(callback, {
      ok: false,
      message: 'Error interno al procesar la confirmación.',
      detail: error.message,
    });
  }
}

function confirmAttendance(params) {
  const code = normalizeValue(params.code).toUpperCase();
  const attendance = normalizeAttendance(params.attendance);

  if (!code || !attendance) {
    return {
      ok: false,
      message: 'Faltan datos obligatorios para validar la invitación.',
    };
  }

  const sheet = getTargetSheet();
  if (!sheet) {
    throw new Error('No se encontró una hoja disponible para validar.');
  }

  const values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    throw new Error('La hoja no tiene registros para validar.');
  }

  const headerMap = buildHeaderMap(values[0]);
  const rowIndex = findGuestRow(values, headerMap, code);

  if (rowIndex === -1) {
    return {
      ok: false,
      message: 'No encontramos una invitación con ese código.',
    };
  }

  const rowNumber = rowIndex + 1;
  const currentAttendance = normalizeAttendance(values[rowIndex][headerMap.attendance]);
  const tickets = Number(values[rowIndex][headerMap.tickets] || 0);
  const storedGuestName = String(values[rowIndex][headerMap.guestName] || '').trim();

  if (currentAttendance === 'asiste') {
    return {
      ok: false,
      message: 'Esta invitación ya había sido confirmada previamente.',
      guestName: storedGuestName,
      tickets,
    };
  }

  sheet.getRange(rowNumber, headerMap.attendance + 1).setValue(attendance);
  sheet
    .getRange(rowNumber, headerMap.confirmationDate + 1)
    .setValue(new Date());

  if (attendance === 'asiste') {
    return {
      ok: true,
      message: 'Tu asistencia quedó confirmada.',
      guestName: storedGuestName,
      tickets,
      attendance,
    };
  }

  return {
    ok: true,
    message: 'Tu respuesta quedó registrada. Gracias por avisarnos.',
    guestName: storedGuestName,
    tickets,
    attendance,
  };
}

function buildHeaderMap(headerRow) {
  const normalizedHeaders = headerRow.map((header) => normalizeHeader(header));
  const requiredKeys = Object.keys(HEADERS);
  const headerMap = {};

  requiredKeys.forEach((key) => {
    const index = normalizedHeaders.indexOf(normalizeHeader(HEADERS[key]));
    if (index === -1) {
      throw new Error(`Falta la columna requerida: ${HEADERS[key]}.`);
    }
    headerMap[key] = index;
  });

  return headerMap;
}

function getTargetSheet() {
  const spreadsheet = getSpreadsheet();

  if (SHEET_NAME) {
    return spreadsheet.getSheetByName(SHEET_NAME);
  }

  return spreadsheet.getSheets()[0] || null;
}

function getSpreadsheet() {
  if (SPREADSHEET_ID) {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  }

  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (activeSpreadsheet) {
    return activeSpreadsheet;
  }

  throw new Error(
    'No hay spreadsheet activo. Define SPREADSHEET_ID o vincula este script al Google Sheet.'
  );
}

function findGuestRow(values, headerMap, code) {
  for (let index = 1; index < values.length; index += 1) {
    const row = values[index];
    const rowCode = normalizeValue(row[headerMap.code]).toUpperCase();

    if (rowCode === code) {
      return index;
    }
  }

  return -1;
}

function normalizeAttendance(value) {
  const normalized = normalizeValue(value)
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  if (normalized === 'asiste') {
    return 'asiste';
  }

  if (normalized === 'no asiste') {
    return 'no asiste';
  }

  if (normalized === 'no confirmado') {
    return 'no confirmado';
  }

  if (!normalized) {
    return 'no confirmado';
  }

  return '';
}

function normalizeHeader(value) {
  return normalizeValue(value)
    .toLowerCase()
    .replace(/\s+/g, '_');
}

function normalizeValue(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function buildJsonpResponse(callback, payload) {
  if (!callback) {
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        message: 'Falta el parámetro callback.',
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  const content = `${callback}(${JSON.stringify(payload)})`;
  return ContentService.createTextOutput(content).setMimeType(
    ContentService.MimeType.JAVASCRIPT
  );
}
