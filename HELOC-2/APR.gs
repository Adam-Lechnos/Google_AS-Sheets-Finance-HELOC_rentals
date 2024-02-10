function FreezeValueEntryHL2apr(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("HELOC - 2");
  var range = sheet.getRange("C32:C512");
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    if (values[i][0] > 0) {
      var cell = range.offset(i, 0, 1, 1);   
      cell.copyTo(cell, {contentsOnly:true});
    }
  }
}