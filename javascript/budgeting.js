let totalAmount = 0;

function addFactor() {
    const factor = document.getElementById('factor').value;
    const amount = parseFloat(document.getElementById('amount').value);
    
    if(!factor || isNaN(amount)) {
        alert('Please enter valid factor and amount');
        return;
    }

    const table = document.getElementById('budgetTable');
    const newRow = table.insertRow(-1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    cell1.textContent = factor;
    cell2.textContent = '$' + amount.toFixed(2);

    // Update the total amount
    totalAmount += amount;
    document.getElementById('total').textContent = 'Total: $' + totalAmount.toFixed(2);

    // Clear the input fields
    document.getElementById('factor').value = '';
    document.getElementById('amount').value = '';
}
