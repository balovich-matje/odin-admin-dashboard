const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const appLayout = document.querySelector('.app-layout');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    appLayout.classList.toggle('sidebar-open');
});

// Close sidebar when a nav item is clicked
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        sidebar.classList.remove('active');
        appLayout.classList.remove('sidebar-open');
    });
});

// Close sidebar when clicking outside of it
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        sidebar.classList.remove('active');
        appLayout.classList.remove('sidebar-open');
    }
});
