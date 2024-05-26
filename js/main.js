AOS.init();

const sidebar = document.querySelector('#sidebar');
const sidebarToggler = document.querySelector('.sidebar_toggler');

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (e.target.id !== 'sidebar' && !e.target.classList.contains('sidebar_toggler')) {
        sidebar.classList.remove('show');
    }
});
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
        document.querySelector('.background-change').classList.add('background-black');
    } else {
        document.querySelector('.background-change').classList.remove('background-black');
    }
});


