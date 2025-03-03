// Initialize task counts
const taskCards = document.querySelectorAll('#taskCards .task-card').length;
document.getElementById('taskAssignedCount').textContent = taskCards;
document.getElementById('taskCount').textContent = 0;

const date = new Date();
document.getElementById('day').innerText = `${date.toLocaleDateString('en-US', { weekday: 'short' })}`;
document.getElementById('date').innerText = date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

function completeTask(button) {
    if (confirm("Board Update Successfully")) {
        // Decrease taskAssignedCount
        const taskAssignedCount = document.getElementById('taskAssignedCount');
        let assignedCount = parseInt(taskAssignedCount.textContent);
        taskAssignedCount.textContent = assignedCount - 1;

        if((assignedCount - 1)===0)
        {
            alert("Congrats! You have completed all the current tasks successfully")
        }

        // Increase taskCount
        const taskCount = document.getElementById('taskCount');
        let count = parseInt(taskCount.textContent);
        taskCount.textContent = count + 1;

        // Add to activity log
        const taskTitle = button.parentElement.parentElement.querySelector('h3').textContent;
        const currentTime = new Date().toLocaleTimeString();
        const activityLog = document.getElementById('activityLog');
        const logEntry = document.createElement('div');
        logEntry.textContent = `You have completed the task "${taskTitle}" at ${currentTime}`;
        logEntry.classList.add('bg-gray-200', 'p-3', 'rounded-lg', 'mb-2');
        activityLog.appendChild(logEntry);

        // Disable the button
        button.disabled = true;
        button.textContent = "Completed";
        button.classList.remove('bg-[#3752FD]');
        button.classList.add('bg-gray-400');
    }
}

function clearHistory() {
    // Clear the activity log
    document.getElementById('activityLog').innerHTML = '';

    // Reset task counts
    const taskCards = document.querySelectorAll('#taskCards .task-card').length;
    document.getElementById('taskAssignedCount').textContent = taskCards;
    document.getElementById('taskCount').textContent = 0;

    const completedButtons = document.querySelectorAll('#taskCards button');
    completedButtons.forEach(button => {
        button.disabled = false;
        button.textContent = "Completed";
        button.classList.remove('bg-gray-400');
        button.classList.add('bg-[#3752FD]');
    });
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackground() {
    const body = document.body;
    body.style.backgroundColor = getRandomColor();
}
