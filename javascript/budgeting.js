document.addEventListener('DOMContentLoaded', function() {
    // Initialize total to 0
    let total = 0;

    document.getElementById('addFactorButton').addEventListener('click', function() {
        const factor = document.getElementById('factor').value;
        const amount = document.getElementById('amount').value;

        if (factor && !isNaN(amount) && Number(amount) >= 0) {
            const table = document.getElementById('budgetTable');
            const newRow = table.insertRow(-1);
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);

            cell1.textContent = factor;
            cell2.textContent = `$${Number(amount).toFixed(2)}`;

            // Update total
            total += Number(amount);
            document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;

            // Clear the inputs
            document.getElementById('factor').value = '';
            document.getElementById('amount').value = '';
        } else {
            alert('Please enter a valid factor and amount.');
        }
    });
});
