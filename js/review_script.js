
const reviews = document.querySelectorAll('.slider__review'),
    nextBtn = document.querySelector(".slider-next"),
    prevBtn = document.querySelector(".slider-prev"),
    circleElem = document.querySelector(".circle-slider"),
    comments = document.querySelectorAll(".review"),
    userImages = document.querySelectorAll(".slider__dot-image"),
    counter = document.querySelector('.slider-counter span');

window.onload = () => {
    let deg = 0 // Градус прокрута
    let currentSlideIndex = 0 // Текущий слайдер

    for (let i = 1; i < reviews.length; i++) { // Скрыть все слайдеры кроме первого
        reviews[i].style.display = "none"
    }

    const updateCounter = () => {
        counter.innerHTML = `
        ${currentSlideIndex + 1} из ${userImages.length}
        `
    }

    const render = (boolean) => {
        if (boolean) {
            updateCounter()
            comments[currentSlideIndex].innerHTML = `
        <div class="currentSlide" style="transform: rotate(360deg);">
            ${userImages[currentSlideIndex].innerHTML}
        </div>`

            if (userImages[currentSlideIndex + 1]) {
                comments[currentSlideIndex + 1].innerHTML = `
            <div class="prevSlider" style="transform: rotate(352deg);">
                ${userImages[currentSlideIndex + 1].innerHTML}
            </div>`
            } else {
                comments[currentSlideIndex + 1].innerHTML = `
            <div class="prevSlider" style="transform: rotate(352deg);">
                ${userImages[0].innerHTML}
            </div>`
            }

            setTimeout(() => {
                comments[currentSlideIndex].children[0].style.opacity = 1
                comments[currentSlideIndex + 1].children[0].style.opacity = 1
            }, 100)
        } else {
            for (let i = 0; i < comments.length; i++) {
                comments[i].innerHTML = `<div class="img"></div>`
            }

            comments[currentSlideIndex - 1].innerHTML = `
            <div class="currentSlide" style="transform: rotate(360deg);">
                ${userImages[currentSlideIndex - 1].innerHTML}
            </div>`

            comments[currentSlideIndex].innerHTML = `
            <div class="prevSlider" style="transform: rotate(352deg);">
                ${userImages[currentSlideIndex].innerHTML}
            </div>`
            setTimeout(() => {
                comments[currentSlideIndex].children[0].style.opacity = 1
                comments[currentSlideIndex + 1].children[0].style.opacity = 1
            }, 100)
            currentSlideIndex--
            updateCounter()
        }
    }

    const changeSelectedSlider = () => { // Показываем нужный слайдер 
        for (let i = 0; i < reviews.length; i++) {
            if (i === currentSlideIndex) {
                reviews[currentSlideIndex].style.display = "block"
            } else {
                reviews[i].style.display = "none"
            }
        }
    }

    const move = (boolean) => {
        if (boolean) { // Если true прокурт вперед
            deg = deg + 40
            circleElem.style.transform = `rotate(${deg}deg)`
        } else { // Прокрут назад
            deg = deg - 40
            circleElem.style.transform = `rotate(${deg}deg)`
        }
    }

    const sliderNext = () => {
        let userLength = userImages.length - 1 // Приводим подсчет к нулевому индексу

        const clearDots = () => { // Затираем доты
            for (let i = 0; i < comments.length; i++) {
                comments[i].innerHTML = `<div class="img"></div>`
            }
        }

        if (currentSlideIndex >= userLength) { // Проверка на количество элементов
            clearDots()
            currentSlideIndex = 0 // Первый элемент слайдер листа
            deg = deg = -40 // Корректный прокрут назад
            move(true)
            changeSelectedSlider()
            render(true)

        } else {

            comments[currentSlideIndex].children[0].style.opacity = '0'
            comments[currentSlideIndex + 1].children[0].style.opacity = '0'
            comments[currentSlideIndex].children[0].children[0].style.width = '0'
            comments[currentSlideIndex + 1].children[0].children[0].style.width = '0'

            currentSlideIndex++
            setTimeout(() => {
                clearDots()
                move(true)
            }, 300)
            setTimeout(() => {
                changeSelectedSlider()
                render(true)
            }, 1000)

        }

    }


    const sliderPrev = () => {
        if (currentSlideIndex >= 1) {
            render(false)
            move()
            changeSelectedSlider()
        } else {
            return
        }
    }

    render(true)
    nextBtn.addEventListener('click', sliderNext)
    prevBtn.addEventListener('click', sliderPrev)
}
