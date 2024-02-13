# Google_AS-Sheets-Finance-HELOC_Rentals
Google Sheets automation for calculating risk, interest, and amount owed on home equity lines of credit (HELOC) - Rental Properties

## Google Apps Script Configuration

### Triggers

| Function | Event Source | Time Based Trigger ( - nn)* | Time of Day | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| checkRateChange | Time-driven | Day Timer | 10pm to 11pm | Daily | Immediately |
| errorCheckRates | Time-driven | Day timer | 8pm to 9pm | Daily | Immediately |
| FreezeValueEntryHL3apr | Time-driven | Month timer - 15th | Midnight to 1am | Immediately |
| FreezeValueEntryHL2apr | Time-driven | Month timer - 15th | Midnight to 1am | Immediately |
| FreezeValueEntryHL1apr | Time-driven | Month timer - 15th | Midnight to 1am | Immediately |
| copyCheckRateData | Time-driven | Week--timer - Friday | Midnight to 1am | Daily |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected*

<sup><sub>Spreadsheet Name: `Line of Credit Schedule (HELOC) - *`</sup></sub>
