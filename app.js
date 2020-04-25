'use script'

import galleryItems from "/gallery-items.js";


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

// // Создаем класс и задаем src = путь
function handClick(e){
    e.preventDefault();
    if(e.target === e.currentTarget ){
        return;
    }
    divModal.classList.add('is-open')
    boxImg.src = e.target.dataset.source
    document.addEventListener('keydown', closeEsc)
}

/// закрываем модальное окно 
function closeModal(e){
    if (e && e.target === boxImg){
        return;
    }
    divModal.classList.remove('is-open');
    boxImg.src = '';
    document.removeEventListener('keydown', closeEsc)
}

/// Esc 
//// перелистывая картинцки leafingЕhrough

function closeEsc(e){
    const code = e.code
    if (code === "Escape"){ 
        closeModal();
    }else if(code === "ArrowRight"){
        let find = galleryItems.find((el,ind)=> el.original === e.target.href)
        if(find === galleryItems.length){
           
        }
        console.log(find);
    }
}






