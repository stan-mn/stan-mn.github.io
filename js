document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var employeeId = document.getElementById('employeeId').value;
    var month = document.getElementById('month').value;

    // Use Airtable API to fetch data
    // Example: fetch('https://api.airtable.com/v0/your_base/your_table?filterByFormula=AND(employee_id="'+employeeId+'", month="'+month+'")', { headers: { Authorization: 'Bearer YOUR_API_KEY' }})
    // Then display the data in 'dataDisplay' div
});
