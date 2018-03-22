import throttle from 'lodash.throttle'

class IntoView {
    constructor () {
        const self = this
        this.eventQueue = []
        this.windowHeight = window.innerHeight
        $(window).on('scroll', throttle(function (e) {
            const newQueue = []
            self.eventQueue.forEach((element, i) => {
                if (element.offsetTop < this.pageYOffset) {
                    return element.fn()
                }
                newQueue.push(element)
            })
            self.eventQueue = newQueue
        }, 100))
    }
    whenScrollTo (offsetTop, fn) {
        this.eventQueue.push({
            offsetTop,
            fn
        })
    }
    whenIn ($el, fn) {
        const offsetTop = $el.offset().top - this.windowHeight
        this.eventQueue.push({
            offsetTop,
            fn: fn.bind($el)
        })
    }
}

export default IntoView
