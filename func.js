function addNewRow(rowData) {
  const ss=SpreadsheetApp.getActiveSpreadsheet();
  const ws=ss.getSheetByName("DB_generale-Grid view (2)");
  ws.appendRow([rowData.id, rowData.org]);
}

// FUNZIONE CHE RESTITUISCE I VALORI DEL DROPDOWN DAL FOGLIO OPTION
function getDropdownArray () {
   const ss=SpreadsheetApp.getActiveSpreadsheet();
  const ws=ss.getSheetByName("Option");
  return ws.getRange(2,1, ws.getLastRow()-1,8).getValues();
  
}
