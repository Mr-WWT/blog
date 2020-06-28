var fixedNav = document.getElementById('fixed')
var staicNav = document.getElementById('staic')
var y = fixedNav.offsetHeight + staicNav.offsetTop

var show = function () {
    fixedNav.classList.add('active')
}

var hide = function () {
    fixedNav.classList.remove('active')
}

window.addEventListener('scroll', function () {
    if (window.scrollY > y) {
        show()
    } else {
        hide()
    }
})