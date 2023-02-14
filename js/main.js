// select multilingual in this site
const translations = {
    en : {
        rouya: "Rouya",
        home: "Home",
        ourServices: "Our services",
        ourClients: "Our clients",
        aboutUs: "About us",
        contactUs: "Contact us",
        english: "English",
        arabic: "Arabic",
        textContent: "We exist to help people live better with artificial intelligence",
    },
    ar : {
        rouya: "رؤية",
        home: "الصفحة الرئيسية",
        ourServices: "خدماتنا",
        ourClients: "عملاؤنا",
        aboutUs: "من نحن",
        contactUs: "تواصل معنا",
        english: "الانجليزية",
        arabic: "العربية",
        textContent: "نحن موجودون لمساعدة الناس على العيش بشكل أفضل باستخدام الذكاء الاصطناعي",
    },
};

const select = document.querySelector('#language-selector');
select.addEventListener("change", (e) => {
    setLanguage(e.target.value);
    localStorage.setItem('lang', e.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem('lang') || 'en';
    setLanguage(language);
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-lang');
        element.textContent = translations[language][translationKey];
    });
    document.dir = language === 'ar' ? 'rtl' : 'ltr';
};




/* select navigation */
window.addEventListener('scroll', ()=> {
    let navbar = document.querySelector('.navbar');
    navbar.classList.toggle('sticky', window.scrollY > 150);
});
/* create open and close in navBar media query */
let navbarToggler = document.querySelector('.navbar-toggler');
let iconBar = document.querySelector('.fa-bars');
let navbarNav = document.querySelector('.navbar-nav');
navbarToggler.addEventListener('click' , ()=> {
    iconBar.classList.toggle('fa-xmark');
    navbarNav.classList.toggle('active');
});


/* select solutions section */
let tabs = document.querySelectorAll('.tabs p');
let tabsArr = Array.from(tabs);
let tabsContent = document.querySelectorAll('.tabs-content > .solution');
let tabsContentArr = Array.from(tabsContent);

tabsArr.forEach (ele => {
    ele.addEventListener('click', e => {
        tabsArr.forEach (elem => {
            elem.classList.remove('active');
        });

        e.currentTarget.classList.add('active');

        tabsContentArr.forEach (elem => {
            elem.style.display = 'none';
        });

        let dataset = document.querySelector(e.currentTarget.dataset.content);
        dataset.style.display = 'block';
    });
});