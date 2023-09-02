
/* Start Slider */


var images = document.querySelectorAll('.slider__img');

var BtnRight = document.querySelector('.right')
var BtnLeft = document.querySelector('.left')

BtnRight.addEventListener('click', function () {
    right()
})

BtnLeft.addEventListener('click', function () {
    left()
})



var counter = 0;
var li = document.querySelectorAll('.indecator');

function right() {
    images[counter].classList.remove('active')
    li[counter].classList.remove('active-li')
    counter++;

    if (images.length == counter) {
        counter = 0
    }

    images[counter].classList.add('active')
    li[counter].classList.add('active-li')
}

function left() {
    images[counter].classList.remove('active')
    li[counter].classList.remove('active-li')
    counter--;

    if (counter < 0) {
        counter = images.length - 1
    }

    images[counter].classList.add('active')
    li[counter].classList.add('active-li')
}

for (var i = 0; i < li.length; i++) {
    li[i].onclick = function () {

        for (var j = 0; j < li.length; j++) {
            li[j].classList.remove('active-li')
            images[j].classList.remove('active')
        }

        this.classList.add('active-li');
        var dataSlide = this.getAttribute('data-slide');
        images[dataSlide].classList.add('active');
        counter = dataSlide;


    }
}


/* End Slider */






