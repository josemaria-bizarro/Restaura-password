//CATALOGO ALUMNOS
const bdikasleId='1kzmgvrbkQ7ehUslRxR4ghkpSeI2yT99M3h-Dyo-EEVY';  
const bdikasle=SpreadsheetApp.openById(bdikasleId);
const bdikasleOrria=bdikasle.getSheetByName('ACTIVOS_FORMATEADO');
const bdikasleDatuak=bdikasleOrria.getDataRange().getDisplayValues();