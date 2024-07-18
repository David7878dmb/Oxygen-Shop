function porcentaje() {
    scrollbar.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
}

window.addEventListener('scroll', () => {
    const scrollbar = document.getElementById('scrollbar');
    requestAnimationFrame(porcentaje);
})