// nav bar
const menuBtn = document.querySelector('#menu-btn');

// events 
menuBtn.addEventListener('click', () => {
    document.querySelector('#nav-menu').classList.toggle('hidden');
}
);