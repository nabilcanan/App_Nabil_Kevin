document.addEventListener('DOMContentLoaded', function() {
    const monthDiv = document.getElementById('month');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    monthDiv.textContent = monthNames[currentMonth] + " " + currentYear;

    const calendarTable = document.getElementById('calendar');
    buildCalendar(currentMonth, currentYear, calendarTable);
    
    // Initialize Modal
    const modal = document.getElementById('taskModal');
    const closeBtn = document.querySelector('.close');
    const taskList = document.getElementById('taskList');
    const newTaskInput = document.getElementById('newTask');

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Set up Event Listeners for Calendar Cells
    calendarTable.addEventListener('click', function(event) {
        if (event.target.tagName.toLowerCase() === 'td' && event.target.textContent !== '') {
            modal.style.display = 'block';
        }
    });

    newTaskInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter' && newTaskInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = newTaskInput.value.trim();
            taskList.appendChild(li);
            newTaskInput.value = '';
        }
    });
});

function buildCalendar(month, year, calendarTable) {
    const firstDay = new Date(year, month).getDay(); // Day of the week of the first day of the month (0-6)
    const lastDate = new Date(year, month + 1, 0).getDate(); // Last date of the month (1-31)
    
    // Clear existing table
    calendarTable.innerHTML = "";
    
    // Create table header
    let headerRow = document.createElement('tr');
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        let th = document.createElement('th');
        th.textContent = day;
        headerRow.appendChild(th);
    });
    calendarTable.appendChild(headerRow);
    
    let tr = document.createElement('tr');
    // Creating empty cells for the days of the week before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    
    // Filling in the days of the month
    for (let day = 1; day <= lastDate; day++) {
        let td = document.createElement('td');
        td.textContent = day;
        tr.appendChild(td);
        if ((day + firstDay) % 7 === 0 && day !== lastDate) { // Start a new row every Sunday except for the last day of the month
            calendarTable.appendChild(tr);
            tr = document.createElement('tr');
        }
    }
    calendarTable.appendChild(tr);
}
