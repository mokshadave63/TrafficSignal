function startSimulation() {
    const simulationArea = document.getElementById("traffic-simulation");
    simulationArea.innerHTML = "Adjusting signal timings based on real-time traffic data...";
    simulationArea.style.backgroundColor = "#c1e1c5"; 
    setTimeout(() => {
        simulationArea.innerHTML = "Traffic flow optimized! Signals are now adjusted.";
        simulationArea.style.backgroundColor = "#a0d8f1"; 
    }, 3000); 
}

// JavaScript to toggle between light and dark themes
function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    // Optionally, save the user's preference in localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Load theme preference from localStorage (if any)
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
};

