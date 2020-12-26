function loadForm() {
  const htmlForSidebar=HtmlService.createTemplateFromFile("uform");
  const htmlOutput=htmlForSidebar.evaluate();
  
  const ui=SpreadsheetApp.getUi();
  ui.showSidebar(htmlOutput);
  return true;
  
}


function createMenu () {
const ui=SpreadsheetApp.getUi();
  const menu=ui.createMenu("Form");
  menu.addItem("Form Inserimento", "loadForm"); // loadForm è la funzione che deve essere caricata
  menu.addToUi();
  

}

function onOpen () {

  createMenu();
}
