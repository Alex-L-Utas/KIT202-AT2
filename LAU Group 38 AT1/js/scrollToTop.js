const scrollToTopBtn = document.getElementById('scrollToTopBtn');
if (scrollToTopBtn) {
    window.addEventListener('scroll', scrollVisibility);
    scrollToTopBtn.addEventListener('click', scrollToTop);
} else {
    console.error('Scroll to Top button not found; no functionality will be added');
}

// Function to check scroll distance and toggle button
function scrollVisibility() {
    const displayStyle = document.documentElement.scrollTop > 300 ? "block" : "none";
    scrollToTopBtn.style.display = displayStyle;
}

// Function to scroll to the top of the web page
function scrollToTop() {
    document.documentElement.scrollTop = 0;
}