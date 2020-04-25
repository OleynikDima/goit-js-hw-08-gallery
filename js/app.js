'use script'

import galleryItems from "../js/gallery-items.js";


const gallery = document.querySelector('.js-gallery');
const divModal = document.querySelector('.js-lightbox');
const boxImg = document.querySelector('.lightbox__image')
const button = document.querySelector('.lightbox__button')

///Подключаем Галерею
const createGallery = galleryItems.map((el)=>{
    return ` <li class="gallery__item">

    <a class="gallery__link" href="${el.original}">
    <img
    class="gallery__image"
    src="${el.preview}"
    data-source="${el.original}"
    alt="${el.description}"/>
    </a> 
    </li>`    

}).join('');

//Listeners
gallery.insertAdjacentHTML('beforeend', createGallery);
gallery.addEventListener('click', handClick);
button.addEventListener('click', closeModal);
//дополнительное задания -- закрываем по клику
divModal.addEventListener('click', closeModal);
divModal.addEventListener('keydown', closeModal)

// // Создаем класс и задаем src = путь
function handClick(e){
    e.preventDefault();
    if(e.target === e.currentTarget ){
        return;
    }
    divModal.classList.add('is-open')
    boxImg.src = e.target.dataset.source
}

/// закрываем модальное окно 
function closeModal(e){
    if (e.target === boxImg){
        return;
    }
    divModal.classList.remove('is-open');
    boxImg.src = '';
}



