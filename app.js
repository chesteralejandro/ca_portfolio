/** 
    ANIMATE THE BURGER: This function will toggle the the different CSS classes for each line
    of the burger button.
    Developed By: Chester Alejandro.
**/
const burgerAnimate = () => {
    const burgerLine = document.querySelectorAll('.navigation__burger-line');
    burgerLine[0].classList.toggle('navigation__burger-line--top');
    burgerLine[1].classList.toggle('navigation__burger-line--middle');
    burgerLine[2].classList.toggle('navigation__burger-line--bottom');
}

/** 
    THESE ARE THE SLIDE IN/OUT FUNCTIONS OF THE MENU
**/
const menu = document.querySelector('.navigation__link');
const linkItems = document.querySelectorAll('.navigation__list');
    //THIS IS THE SLIDE IN FUNCTION
const linkAreaSlideIn = () => {
    menu.style.transition = 'transform 0.7s ease';
    menu.classList.add('navigation__link--slide-in');
    menu.classList.remove('navigation__link--slide-out');
    //SLIDE & FADE IN EVERY LINK ITEMS
    linkItems.forEach((linkItem, index) => {
        linkItem.style.transition = `
            transform 900ms ${index/4}s ease,
            opacity 1000ms ${index/4}s ease`;
        linkItem.classList.add('navigation__list--in');
        linkItem.classList.remove('navigation__list--out');
    })
}
    //SLIDE OUT FUNCTION
const linkAreaSlideOut = () => {
    menu.style.transition = 'transform 0.7s ease';
    menu.classList.add('navigation__link--slide-out');
    menu.classList.remove('navigation__link--slide-in');
     //SLIDE & FADE OUT EVERY LINK ITEMS
     linkItems.forEach((linkItem, index) => {
        linkItem.style.transition = "none";
        linkItem.classList.add('navigation__list--out');
        linkItem.classList.remove('navigation__list--in');
     })
}

/** 
    ACTIVATE THE SLIDE IN/OUT FUNCTIONS OF THE MENU WHEN CLICKING THE HAMBURGER 
**/
let isBurger = true;
const burger = document.querySelector('.navigation__burger');
burger.addEventListener('click', e => {
    burgerAnimate();
    if(isBurger) {
        linkAreaSlideIn();
        isBurger = false;
    } else {
        linkAreaSlideOut();
        isBurger = true;
    }
    menu.addEventListener('transitionend', () => {
        menu.style.transition = 'none';
    })
})

/** 
    SLIDE OUT THE MENU WHEN YOU CLICK ANY LINK: This will slide the menu out when any of the navigation links or the logo
    is clicked or tapped when in mobile view.
    Developed By: Chester Alejandro.
**/
const logo = document.querySelector('.navigation__logo')
const mainLinks = document.querySelectorAll('.navigation__anchor');
logo.addEventListener('click', () => {
    if(isBurger == false) {
        burgerAnimate();
        linkAreaSlideOut();
        isBurger = true;
    }
})
mainLinks.forEach(mainLink => mainLink.addEventListener('click', () => {
    if(isBurger == false) {
        burgerAnimate();
        linkAreaSlideOut();
        isBurger = true;
    }
}));

/** 
    THIS IS FOR THE TYPEWRITTER EFFECT: This function will automatically be invoked when the page
    sucessfully loads. It will create a type
    Developed By: Chester Alejandro.
**/
function typewritter(){
    const cursor = document.querySelector('.banner__cursor');
    const title = ['Web Developer.', 'Front-End Developer.', 'Back-End Developer.'];
    let word = ''; 
    let setWord = '';
    let index = 0;
    let letter = 0;
    let time = 0;
    let willSpell = true;

    let type = () => {
        word = title[index];
        willSpell ? setWord = word.slice(0, ++letter) : setWord = word.slice(0, --letter);
        cursor.innerHTML = setWord;
        //SET THE TIME AND WAIT FOR 2.5s AFTER SPELLING WORD 
        if(letter == word.length){
            willSpell = false;
            time = 2500;
        }
        //DELETING EVERY LETTER EVERY 100ms
        if(letter < word.length && willSpell == false) time = 100;
        //MOVE TO THE NEXT WORD THEN SPELL EVERY LETTER IN 300ms
        if(letter == 0){
            index++;
            willSpell = true;
            time = 300;
        }
        //SET THE INDEX BACK TO ZERO AFTER SPELLING THE LAST WORD
        if(index == title.length) index = 0; 
        //console.log(letter, word.length);
        setTimeout(type, time);
    }; 
    type();
} typewritter();


/** 
    THE CAROUSEL: This function is for the image carousel
    Developed By: Chester Alejandro.
**/
let index = 0;
function slide() {
    const radios = document.querySelectorAll('.about__radio');
    const images = document.querySelectorAll('.about__frame .about__image');
    images.forEach(image => image.style.transition = 'all 1.5s ease-in-out');
    if(radios[0].checked) {index = 0;}
    if(radios[1].checked) {index = 1;}
    if(radios[2].checked) {index = 2;}
    if(radios[3].checked) {index = 3;}
    index++;
    if(index >= radios.length) { 
        index = 0;
        timer = 0;
        images.forEach(image => image.style.transition = 'none');
    } else {timer = 6;}
    radios[index].checked = true;
}
let timer = 6;
let counter = 0;
setInterval(() => {
    const buttons = document.querySelectorAll('.about__button');
    buttons.forEach(button => button.addEventListener('click', e => {
        if(e.target.id == "about__button1"  || e.target.id == "about__button2" || e.target.id == "about__button3") {
            counter = 0;
            buttons.forEach(button => button.classList.add('block'));
            setTimeout(() => buttons.forEach(button => button.classList.remove('block')), 1500);
        }
    }));
    counter++; //console.log(counter, index);
    if(counter >= timer) {
        slide();
        if(index != 0) {
            buttons.forEach(button => button.classList.add('block'));
            setTimeout(() => buttons.forEach(button => button.classList.remove('block')), 1500);
        } else {
            buttons.forEach(button => button.classList.add('block'));
        }
        counter = 0;
    }
}, 1000);


/**
    ANY EFFECTS THAT IS CONNECTED TO SCROLL EVENT
    Developed By: Chester Alejandro.
**/
const mainNavigation = document.querySelector('.navigation');
window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    //GIVES BACKGROUND COLOR TO THE NAVIGATION WHEN YOU SCROLL A LITTLE
    if (scroll < 50) {
        mainNavigation.style.backgroundColor = "transparent";
    }
         else {
        mainNavigation.style.backgroundColor = "rgba(29, 60, 69, 0.9)";
    }
    let screenSize = window.innerHeight / 1.1;
    //ICONS YOU WANT TO FADE IN WHEN YOU SCROLL
    const contactLink = document.querySelector('.contact__link');
    const icons = document.querySelectorAll('.contact__icon');
    let contactLinkPosition = contactLink.getBoundingClientRect().top;
    if(contactLinkPosition < screenSize) {
        icons.forEach((icon, index) => {
            icon.style.transition = `
                transform 1000ms ${index - 0.3}s ease-out,
                opacity 500ms ${index - 0.3}s ease-out`;
            icon.style.transform = "translate(0%, 0%)";
            icon.style.opacity = "1";
        }); // end forEach
    } else {
        icons.forEach((icon, index) => {
            icon.style.transition = "none";
            if(window.innerWidth <= 768) icon.style.transform = "translate(-200%, 0%)";
            else icon.style.transform = "translate(0%, -200%)";
            icon.style.opacity = "0";
        }); // end forEach
    } // end else
})


/** 
    THESE VARIABLES ARE FOR THE MODAL
**/
const modal = document.querySelector('.modal');
const modalBox = document.querySelector('.modal__box');
const modalButton = document.querySelector('.modal__button');
const modalMessage = document.querySelector('.modal__message');

/** 
    THESE VARIABLES ARE FOR CONTACT FORM 
**/
const nameField = document.getElementById('contact__name');
const emailField = document.getElementById('contact__email');
const messageField = document.getElementById('contact__message');
const submit = document.getElementById('contact__submit');

submit.addEventListener('click', e => {
    e.preventDefault();
    modal.style.transition = "visibility 30ms ease";
    modal.style.visibility = "visible";
    modalBox.style.transition = "transform 300ms 30ms ease";
    modalBox.style.transform = "scale(1)";
    modal.style.backdropFilter = "blur(12px)";
    if(nameField.value == '' && emailField.value == '' && messageField.value == '') {
        modalMessage.innerHTML = '<h3 class="modal__message">Please say something to me.</h3>';
    } else if (nameField.value == '') {
        modalMessage.innerHTML = '<h3 class="modal__message">What is your name?</h3>';
    } else if (emailField.value == '') {
        modalMessage.innerHTML = '<h3 class="modal__message">Please provide your email address.</h3>';
    } else if (messageField.value == '') {
        modalMessage.innerHTML = `<h3 class="modal__message">You forgot to say your message <span class="modal__name">${nameField.value}</span>.</h3>`;
    }else {
        modalMessage.innerHTML = `<h3 class="modal__message">Thank you <span class="modal__name">${nameField.value}</span>, your message is sent to <span class="modal__name">Chester Alejandro</span>.</h3>`;
        nameField.value = '';
        emailField.value = '';
        messageField.value = '';
    }
})

//js make the opacity of the modal first which is the parent node of the modal box
modalButton.addEventListener('click', () => {
    modal.style.transition = "visibility 30ms 250ms ease";
    modalBox.style.transform = "scale(0)";
    modal.style.visibility = "hidden";
});