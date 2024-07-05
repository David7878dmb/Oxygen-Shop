let totop = document.getElementById('top');
totop.style.display ='none';
window.addEventListener('scroll', () => {
    if(this.scrollY > 500){
        totop.style.display = 'block';
    }else{
        toTop.style.display = 'none';
    }
})

totop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}