import IntoView from './../index.js'

window.intoView = new IntoView()
intoView.whenScrollTo(200, function () {
    console.log('yes')
})
intoView.whenIn($('#el1'), function () {
    console.log('#el', this)
})
console.log(intoView)
