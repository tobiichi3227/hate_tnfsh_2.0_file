// add by tobiichi3227
window.addEventListener('load', () => {
    const loadImage = (img) => {
        img.setAttribute('src', img.dataset.src)
        img.removeAttribute('data-src')
    }

    const onEnterView = (entires, observer) => {
        for (let entry of entires) {
            if (entry.isIntersecting) {
                loadImage(entry.target)
                observer.unobserve(entry.target)
            }
        }
    }

    const watcher = new IntersectionObserver(onEnterView)
    const lazyImages = document.querySelectorAll('._a6_o._3-96')
    for (let image of lazyImages) {
        watcher.observe(image)
    }

})