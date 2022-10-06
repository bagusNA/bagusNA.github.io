const loadProfileImage = () => {
    const imageEl = document.querySelector('.hero__image');
    const url = 'https://via.placeholder.com/600x400/707070/969696.png';
    let preloadImage = new Image();
    preloadImage.src = url;

    preloadImage.addEventListener('load', () => {
        imageEl.style.backgroundImage = `url("${url}")`;
        preloadImage = null;
    });

    window.addEventListener('load', () => {
        imageEl.classList.add('loaded');
    })
}

loadProfileImage();