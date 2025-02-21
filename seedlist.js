const filter__form = document.getElementById('filter__form')
const filter__fruit = document.getElementById('filter__fruit')
const filter__vegetable = document.getElementById('filter__vegetable')
const filter__grain = document.getElementById('filter__grain')
const filter__herb = document.getElementById('filter__herb')
const filter__flower = document.getElementById('filter__flower')
const filter__other = document.getElementById('filter__other')

let filter__list = {}

filter__form.addEventListener('submit', (event) => {
    event.preventDefault()

    getFilters()
    filter(filter__list)

})

function getFilters() {
    filter__list = {
    'fruit': filter__fruit.checked,
    'vegetable': filter__vegetable.checked,
    'grain': filter__grain.checked,
    'herb': filter__herb.checked,
    'flower': filter__flower.checked,
    'other': filter__other.checked    
    }
}

function filter(filters) {
    let uncheckedlist = ''
    let uncheckedelements
    let checkedlist = ''
    let checkedelements


    for (const pair in filters) {
        if (filters[pair] === false) {

            if (uncheckedlist === '') {
                uncheckedlist += `.${pair}`
            } else {
                uncheckedlist += `,.${pair}`
            }
        } else {
            if (checkedlist === '') {
                checkedlist += `.${pair}`
            } else {
                checkedlist += `,.${pair}`
            }
        }
    }


    if (uncheckedlist !== '') {
        uncheckedelements = document.querySelectorAll(`${uncheckedlist}`)
        uncheckedelements.forEach(element => {
            element.classList.add('hidden')
        });

    }


    if (checkedlist !== '') {
        checkedelements = document.querySelectorAll(`${checkedlist}`)
        checkedelements.forEach(element => {
            element.classList.remove('hidden')
        });
    }






}

filter__form.addEventListener('reset', () => {
    resetFilters()
})

function resetFilters() {
    const hidden = document.querySelectorAll('.hidden')

    hidden.forEach(element => {
        element.classList.remove('hidden')
    });
}