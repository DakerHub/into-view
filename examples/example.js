import IntoView from './../index.js'

window.intoView = new IntoView()
intoView.whenIn(200, function () {
    console.log('yes')
})
