# into-view

A plugin to do something when the document scroll to somepalce

## Installation

Prerequisites:  
 - zepto 1.2.0 event fx / jQuery

## NPM

```
$ git install --save into-view
```

## Usage

```javascript
import IntoView from './../index.js'

window.intoView = new IntoView()
intoView.whenScrollTo(200, function () {
    console.log('yes')
})
intoView.whenIn($('#el1'), function () {
    console.log('#el', this)
})
```


## Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |


# License
[MIT](LICENSE)