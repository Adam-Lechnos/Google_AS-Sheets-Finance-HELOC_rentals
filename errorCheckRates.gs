function errorCheckRates() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Rates").getRange("G2"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Error in spreadsheet "Line of Credit Schedule (HELOC) 6GAM", "Rates" tab (https://docs.google.com/spreadsheets/d/19dwhjWwehh1xbUzQewkIxzI9kGPvRQQtbUnBcjFT-58). Check all related spreadsheets under 6G Asset Management'; // Second column
    var subject = 'Spreadsheet Error - Line of Credit Schedule (HELOC) 6GAM';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}