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
    });

    // Fix animation retriggered when resizing between breakpoints
    const heroElements = Array.from(document.querySelector('.hero').children);

    heroElements.forEach(el => {
       el.addEventListener('animationend', () => {
           el.classList.add('animation-once');
       });
    });
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
    });
}

const sidebarAction = () => {
    const toggleEl = document.getElementById('toggle-sidebar');
    const aside = document.querySelector('aside');
    const navLinks = document.querySelectorAll('.aside__links');

    const removeActive = () => {
        toggleEl.classList.remove('active');
        aside.classList.remove('active');
        document.body.classList.remove('hide-overflow');
    }

    toggleEl.addEventListener('click', () => {
        toggleEl.classList.toggle('active');
        aside.classList.toggle('active');
        document.body.classList.toggle('hide-overflow');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            removeActive();
        });
    });

    window.addEventListener('resize', () => {
       if (window.innerWidth >= 768 && aside.classList.contains('active'))
           removeActive();
    });
}

loadProfileImage();
headerOnScroll();
arrowScrollAction();
sidebarAction();
