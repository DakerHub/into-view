import throttle from 'lodash.throttle'

class IntoView {
    constructor () {
        const self = this
        this.eventQueue = []
        $(window).on('scroll', throttle(function (e) {
            const newQueue = []
            self.eventQueue.forEach((element, i) => {
                if (element.offsetTop > this.pageYOffset) {
                    return element.fn()
                }
                newQueue.push(element)
            })
            self.eventQueue = newQueue
        }, 100))
    }
    whenIn (offsetTop, fn) {
        this.eventQueue.push({
            offsetTop,
            fn
        })
    }

}

export default IntoView
