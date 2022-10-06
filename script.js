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

const headerOnScroll = () => {
    const header = document.getElementById('header');

    document.addEventListener('scroll', () => {
        if (window.scrollY)
            header.classList.add('header--scrolled');
        else
            header.classList.remove('header--scrolled');
    });
}

const arrowScrollAction = () => {
    const arrowEl = document.querySelector('.arrow-down');
    const about = document.getElementById('about');

    arrowEl.addEventListener('click', () => {
        about.scrollIntoView();
    })

}

loadProfileImage();
headerOnScroll();
arrowScrollAction();