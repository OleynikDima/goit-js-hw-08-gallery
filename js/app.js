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
//дополнительное задания -- закрываем по клику
divModal.addEventListener('click', closeModal);



///// Проходит делегирования при target = createMaldWin
function handClick(e){
    e.preventDefault();
    if(e.target === e.currentTarget ){
        return;
    }
    const dataSource = e.target.dataset.source
    createModalWin(dataSource);   
}
// Создаем класс и задаем src = путь
// создаем отдельно Модальное окно (облегчить код)
function createModalWin(src){
    divModal.classList.add('is-open')
    boxImg.src = src
    boxImg.transi
    document.addEventListener('keydown', diferentKeyPress)
}

/// закрываем модальное окно // Делегирование закрытия модалОкна кроме картинки
function closeModal(e){
    e.preventDefault();
    if (e && e.target === boxImg){
        return;
    }
    divModal.classList.remove('is-open');
    boxImg.src = '';
    document.removeEventListener('keydown', diferentKeyPress)
}

function diferentKeyPress(e){
    
    /// Esc 
    const code = e.code
     if (code === "Escape"){ 
         closeModal(e);

    //// перелистывая картинцки leafingЕhrough
        }else if(code === "ArrowRight"){
        
            const nImg = galleryItems.findIndex((el) => el.original === boxImg.src);
            let sum = nImg+1;
            if(sum >= galleryItems.length){
                sum = 0;
            }
            createModalWin(galleryItems[sum].original);
         }else if(code === "ArrowLeft"){
        
            const nImg = galleryItems.findIndex((el) => el.original === boxImg.src);
            let sum = nImg-1;
            // console.log(sum);
            if(sum < 0){
                sum = galleryItems.length-1;
            }
            createModalWin(galleryItems[sum].original);
        }
}






