window.onload = () => {
    const SLIDE = 'slide';
    const body = document.body;
    const slides = Array.prototype.slice.call(body.children);
    let currentSlide = Number(localStorage.getItem(SLIDE)) ?? 0;

    const deleteChilds = (e) => {
        let child = e.lastElementChild;
        while(child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }

    const chooseSlide = (e) => {
        if(e.key === 'ArrowRight') {
            if (currentSlide >= (slides.length - 1)) {
                return;
            }
            currentSlide += 1;
        } else if (e.key === 'ArrowLeft') {
            if (currentSlide <= 0) {
                return;
            }
            currentSlide -= 1;
        }
        window.localStorage.setItem(SLIDE, currentSlide);
        updateSlide();
    }

    const updateSlide = () => {
        deleteChilds(body);
        body.appendChild(slides[currentSlide]);
    }

    window.addEventListener('keydown', chooseSlide);
    deleteChilds(body);
    updateSlide();
}
