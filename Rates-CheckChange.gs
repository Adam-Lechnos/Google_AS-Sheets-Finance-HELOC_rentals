function checkRateChange() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Rates").getRange("K2"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'Rate Change in "Line of Credit Schedule (HELOC) for 6GAM", "Rates" tab (https://docs.google.com/spreadsheets/d/19dwhjWwehh1xbUzQewkIxzI9kGPvRQQtbUnBcjFT-58), referred by all Line of Credit Schedule (HELOC) * spreadsheets. Update the automatic payment amount for the HELOC loan(s) as required, under 6G Asset Management, by referring to the Summary tab under the Manual Payment column, within the Line of Credit Summary spreadsheet (https://docs.google.com/spreadsheets/d/191sIvr37ZJawjmKRxcHwU4L5TAzUPK7DCLjTvyq0Ix8). For spreadsheets listed which display Manual Payments = True, update the payment for the HELOC loan in that spreadsheet, accordingly.'; // Second column
    var subject = 'Rate Change - Line of Credit Schedule (HELOC) 6GAM';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}