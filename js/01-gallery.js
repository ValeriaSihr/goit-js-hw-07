import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");

console.log(ulGallery);

function createGalleryMarkup(items) {
    return items
        .map(
            (item) =>
                `<li class = "gallery__item"><a class = "gallery__link" href = "${item.original}"><img class="gallery__image" src = "${item.preview}" data-source ="${item.original}" alt ="${item.description}"/> </a></li>`
        )
        .join("");
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);
ulGallery.innerHTML = addGalleryMarkup;
ulGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
    blockStandartAction(event);

    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width ="800" height = "600">`
    );
    instance.show();

    window.addEventListener("keydown", onKeyPress);
    instance.element().addEventListener("click", onCloseBtnClick);

    function onKeyPress(event) {
        if (event.code === "Escape") {
            instance.close();
        }
    }

    function onCloseBtnClick(event) {
        if (event.target.nodeName === "IMG") {
            return;
        }
        instance.close();
    }
}

function blockStandartAction(event) {
    event.preventDefault();
}
//     galleryItems.addEventListener("keydown", (event) => {
//         if (event.code === "Escape") {
//             instance.close();
//         }
//     });
// }

// function blockStandartAction(event) {
//     event.preventDefault();
// }
