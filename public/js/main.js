const hamburger = document.querySelector('.hamburger');
const ada = document.querySelector('.adap__menu');
const list = document.querySelector('.nav__list');
const lis = document.querySelectorAll('.nav__list li');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const hero = document.querySelector('.hero');
const header = document.querySelector('.header');
const contacts = document.querySelector('.contacts');
const body = document.getElementById('body');
let lang;
let theme;



sun.addEventListener('click',sunner);
function sunner() {
    theme = "sunner";
    sun.style.display = 'none';
    moon.style.display = 'block';
    moon.style.fill = 'black';
    header.classList.add('white_theme');
    hero.classList.add('hero_theme');
    contacts.classList.remove('contacts');
    contacts.classList.add('contacts_theme');
    document.querySelectorAll('.price__cards button').forEach(el => {
        el.classList.add('btn_white')
    });
    document.querySelectorAll('section').forEach(el => {
        el.classList.remove('body_theme_dark');
        el.classList.add('body_theme')
    })
    document.querySelector('footer').classList.remove('body_theme_dark');
    document.querySelector('footer').classList.add('body_theme');
    document.querySelectorAll('*').forEach(el => {

        if (el.classList.contains('font_white')) {
            el.classList.remove('font_white');
            el.classList.add('font_black');
        }
        if (el.classList.contains('font_gold')) {
            el.classList.remove('font_gold');
            el.classList.add('font_big_black');
        }
        if (el.classList.contains('btn_gold')) {
            el.classList.remove('btn_gold');
            el.classList.add('btn_white');
        }
        if (el.classList.contains('active_btn')) {
            el.classList.remove('active_btn')
            el.classList.add('active_btn_white')
        }
        if (el.classList.contains('btns_hero_contacts')) {
            el.classList.remove('gold');
            el.classList.add('btn_contacts_hero');
        }
        if(el.classList.contains('opener')){
            el.classList.remove('bg_black_burger')
            el.classList.add('bg_white_burger')
        }
        if(el.classList.contains('line')){
            el.classList.remove('bg_white_burger')
            el.classList.add('bg_black_burger')

        }
    });

    document.querySelector('.nav__logo svg path').classList.add('add_fill')
    // document.querySelector('.contacts__form input').style.setProperty('color',$bg-dark)
    document.querySelectorAll('.contacts__form .inp_text').forEach(el => el.classList.add('active_inp'));
    document.querySelectorAll('.footer__link a').forEach(
        el => el.classList.add('filtred'));
}

moon.addEventListener('click', moonlight);

function moonlight() {
    moon.style.display = 'none';
    sun.style.display = 'block';
    theme = "moonlight";
    header.classList.remove('white_theme');
    hero.classList.remove('hero_theme');
    contacts.classList.remove('contacts_theme');
    contacts.classList.add('contacts');
    document.querySelectorAll('.price__cards button').forEach(el => {
        el.classList.remove('btn_white')
    });
    document.querySelectorAll('section').forEach(el => {
        el.classList.remove('body_theme');
        el.classList.add('body_theme_dark')
    })
    document.querySelector('footer').classList.remove('body_theme');
    document.querySelector('footer').classList.add('body_theme_dark');
    document.querySelectorAll('*').forEach(el => {
        if (el.classList.contains('font_black')) {
            el.classList.remove('font_black');
            el.classList.add('font_white');
        }
        if (el.classList.contains('font_big_black')) {
            el.classList.remove('font_big_black');
            el.classList.add('font_gold');
        }
        if (el.classList.contains('btn_white')) {
            el.classList.remove('btn_white');
            el.classList.add('btn_gold');
        }
        if (el.classList.contains('active_btn_white')) {
            el.classList.remove('active_btn_white')
            el.classList.add('active_btn')
        }
        if (el.classList.contains('btns_hero_contacts')) {
            el.classList.remove('btn_contacts_hero');
            el.classList.add('gold');
        }
        if(el.classList.contains('opener')){
            el.classList.remove('bg_white_burger')
            el.classList.add('bg_black_burger')
        }
        if(el.classList.contains('line')){

            el.classList.remove('bg_black_burger')
            el.classList.add('bg_white_burger')
        }
    });

    document.querySelector('.nav__logo svg path').classList.remove('add_fill');
    document.querySelectorAll('.contacts__form .inp_text').forEach(
        el => el.classList.remove('active_inp'));
    document.querySelectorAll('.footer__link a').forEach(
        el => el.classList.remove('filtred'));

}


function toggleMenu() {
    hamburger.classList.toggle('open');
    if(list.classList.contains('df')){
        list.classList.remove('df');
    }
    else{
        setTimeout(function(){
            list.classList.add('df');
        },300)
    }
    document.querySelector('.opener').classList.toggle('op');
    body.classList.toggle('overf');
}

lis.forEach(el => {
    el.addEventListener('click', () => {
        hamburger.classList.remove('open');
        // ada.classList.remove('opener');
        list.classList.remove('df');
        body.classList.remove('overf');
        document.querySelector('.opener').classList.remove('op');
    })
})

window.addEventListener(`resize`, event => {
    hamburger.classList.remove('open');
    // ada.classList.remove('opener');
    list.classList.remove('df');
    body.classList.remove('overf');
    document.querySelector('.opener').classList.remove('op');
}, false);

hamburger.addEventListener('click', toggleMenu);


const btns = document.querySelectorAll('.portfolio__btns .btn_text');
const imgs = document.querySelectorAll('.portfolio_img img');
let path;
btns.forEach((btn) => btn.addEventListener('click', (event) => {
    path = event.target.getAttribute('data-year');
    btns.forEach(btn => {
        btn.classList.remove('active_btn')
        btn.classList.remove('active_btn_white')
    });
    imgs.forEach((img, i) => img.src = `./public/assets/imgs/portfolio/${path}/${i + 1}.jpg`)
    if (sun.style.display != "none") {
        event.target.classList.add('active_btn');
    } else {
        event.target.classList.add('active_btn_white');
    }
}))


const i18Obj = {
    'EN': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message'
    },
    'RU': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить'
    }
}
const dataAtts = document.querySelectorAll('[data-i18]');
const trans = document.querySelector('.nav__translate');
const langs = document.querySelectorAll('.nav__text_bold');

console.log('100');

function translate(event){
        if (event.target.getAttribute('data-lang')) {
            lang = event.target.textContent;
            let att = event.target.getAttribute('data-lang');
            dataAtts.forEach(el => {
                let n = el.getAttribute('data-i18');
                el.textContent = i18Obj[att][n]
            })
            langs.forEach(el => {
                el.classList.remove('golder')
            })
            event.target.classList.add('golder')
        }
        else{
            const lang = localStorage.getItem('lang');
            dataAtts.forEach(el => {
                let n = el.getAttribute('data-i18');
                el.textContent = i18Obj[lang][n]
            })
            langs.forEach(el => {
                el.classList.remove('golder')
            })
        }
}

trans.addEventListener('click',translate );

function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme',theme);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
    if(localStorage.getItem('theme')) {
        let themat = localStorage.getItem('theme');
        if(themat=='sunner'){
            sunner()
        }
        if(themat=='moonlight'){
            moonlight()
        }
    }
    if(localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
        dataAtts.forEach(el => {
            let n = el.getAttribute('data-i18');
            el.textContent = i18Obj[lang][n]
        })
        langs.forEach(el => {
            el.classList.remove('golder')
        })
    }

}
window.addEventListener('load', getLocalStorage);
console.log(theme);
console.log(lang);






