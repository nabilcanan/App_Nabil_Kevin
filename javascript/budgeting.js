document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addFactorButton').addEventListener('click', function() {
      const factor = document.getElementById('factor').value;
      const amount = document.getElementById('amount').value;
  
      if (factor && amount) {
        const table = document.getElementById('budgetTable');
        const newRow = table.insertRow(-1);
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
  
        cell1.textContent = factor;
        cell2.textContent = `$${amount}`;
        
        // Clear the inputs
        document.getElementById('factor').value = '';
        document.getElementById('amount').value = '';
      } else {
        alert('Please enter a valid factor and amount.');
      }
    });
  });
  