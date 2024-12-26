let btnClose = document.querySelector('#close');
let pageLayout = document.querySelector('#layoutContainer');
let layoutItem = document.querySelector('#layoutItem');
let next = document.querySelector('#next');
let prev = document.querySelector('#prev');
let imgs = Array.from(document.querySelectorAll('.item img'))

function displayNone() {
    pageLayout.style.display = "none"
}
function displayFlex() {
    pageLayout.style.display = "flex"
}
btnClose.addEventListener("click", function () {
    displayNone()
})



document.addEventListener("keydown", function (e) {
    if (e.key == 'Escape') {
        displayNone()
    }
})

pageLayout.addEventListener("click", function (e) {

    if (pageLayout == e.target) {
        displayNone()
    } else {
        // console.log('tooooooooot');

    }
})


// layoutItem.addEventListener("click", function(e){
//     e.stopPropagation

// })
let index = 0
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function (e) {
        index = i
        // console.log(e.target);

        layoutItem.style.backgroundImage = `url(${e.target.getAttribute('src')})`
        displayFlex()
    })

}


function nextImg() {
    index++
    // console.log(imgs[index].getAttribute('src'));
    if(index == imgs.length)index = 0

    layoutItem.style.backgroundImage = `url(${imgs[index].getAttribute('src')})`
}

next.addEventListener('click', nextImg)
document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowRight') {
        nextImg()
    }

})
function prevImg() {
    index --
    // console.log(imgs[index].getAttribute('src'));
    if(index < 0)index = imgs.length - 1

    layoutItem.style.backgroundImage = `url(${imgs[index].getAttribute('src')})`
}

prev.addEventListener('click', prevImg)
document.addEventListener('keydown', function (e) {
    if (e.key == 'ArrowLeft') {
        prevImg()
    }

})