// Google Apps Script code to handle form submissions
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Get the spreadsheet
    const spreadsheetId = '1Wx4I-Xy0OkHmtgMaau9IUi14frEJrRhkAZOH1aBOjXU';
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet();
    
    // Get form data
    const formData = e.parameter;
    
    // Create timestamp
    const timestamp = new Date();
    
    // Prepare row data
    const rowData = [
      timestamp,
      formData.name || '',
      formData.email || '',
      formData.phone || '',
      formData.service || '',
      formData.message || '',
      'New' // Status column
    ];
    
    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      const headers = ['Timestamp', 'Name', 'Email', 'Phone', 'Service', 'Message', 'Status'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
    }
    
    // Add the new row
    sheet.appendRow(rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 7);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Google Sheets integration is working!')
    .setMimeType(ContentService.MimeType.TEXT);
}