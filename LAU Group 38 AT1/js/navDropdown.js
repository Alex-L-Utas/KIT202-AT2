// Event listeners.
window.addEventListener('resize', handleResize);
document.getElementById('nav-toggle').addEventListener('click', toggleNav);

// Function to clear styles mobile CSS when window enlarged back to desktop.
function handleResize() {
    var navLinks = document.getElementById('nav-links');
    
    if (window.innerWidth > 800) {
        navLinks.style.display = '';
    }
}

// Function to toggle mobile menu hamburger button.
function toggleNav() {
    var links = document.getElementById('nav-links');
    
    if (links.style.display === 'flex') {
        links.style.display = 'none';
    } else {
        links.style.display = 'flex';
    }
}