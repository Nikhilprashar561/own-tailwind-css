import {spacing,  textSpcing, utilities, utils} from "./space.js"

const allElement = document.querySelectorAll('[class]')

const result = []

let number = 1

allElement.forEach((e) => {
    e.classList.forEach((elem) => {
        if(elem.startsWith(`chai-`)){
            if(elem.startsWith(`chai-text-`)){
                const spl = elem.split('-')
                e.style.color = spl[2]
            }
        }
    })


})