let btn = document.querySelector('.mobilemenubar')
let lsitLi = document.querySelectorAll('.navbar>li')
btn.addEventListener('click', function () {
    for (let i = 0; i < lsitLi.length; i++) {
        if (lsitLi[i].style.display == 'block') {
            lsitLi[i].style.display = 'none'
        }
        else {
            lsitLi[i].style.display = 'block'
        }
    }

})
