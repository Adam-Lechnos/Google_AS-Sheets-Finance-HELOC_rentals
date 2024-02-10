function copyCheckRateData() {
     var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Rates");
     //var sh = ss.getActiveSheet();
     //sh.insertColumnAfter(2); 
     var range = ss.getRange("B2");
     var values = range.getValues();
     var add = ss.getRange("I2");
     add.setValue(values);
     var range = ss.getRange("B3");
     var values = range.getValues();
     var add = ss.getRange("I3");
     add.setValue(values);
     var range = ss.getRange("B4");
     var values = range.getValues();
     var add = ss.getRange("I4");
     add.setValue(values);
}