const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
});


let counter = 0;

nextBtn.addEventListener('click', () => {
    counter++
    carousel()
})

prevBtn.addEventListener('click', () => {
    counter--
    carousel()
})

const carousel = () => {

    if (counter < slides.length - 1) {
        nextBtn.style.visibility = 'visible'
    } else {
        nextBtn.style.visibility = 'hidden'
    }

    if (counter > 0) {
        prevBtn.style.visibility = 'visible'
    } else {
        prevBtn.style.visibility = 'hidden'
    }

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`
    });
}
prevBtn.style.visibility = 'hidden'