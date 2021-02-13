'use strict';

const navbarDom = {
    navbarToggler: document.querySelector('.navbar-toggler'),
    menu: document.querySelector('#menu'),
};

const classes = {
    collapse: 'collapse',
    collapsed: 'collapsed',
};

navbarDom.navbarToggler.addEventListener('click', () => {
    navbarDom.navbarToggler.classList.toggle(classes.collapsed);
    navbarDom.menu.classList.toggle(classes.collapse);
});
