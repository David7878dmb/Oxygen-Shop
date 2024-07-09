let totop = document.getElementById('top');
totop.style.display ='none';


let scrollTimeout;

window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
        if (window.scrollY > 500) {
            totop.style.display = 'block';
        } else {
            totop.style.display = 'none';
        }
    }, 200);
});

totop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})