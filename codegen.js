// Creating variables tied to each of the parts of the form so can get their data.
const formcontainer = document.getElementById('formcontainer__plantcard')
const plant__code = document.getElementById('plant__code')
const plant__name = document.getElementById('plant__name')
const plant__cultivar = document.getElementById('plant__cultivar')
const plant__timetilharvest = document.getElementById('plant__timetilharvest')
const plant__description = document.getElementById('plant__description')
const plant__bulky = document.getElementById('plant__bulky')
const plant__category = document.getElementById('plant__category')
const plant__color = document.getElementById('plant__color')

const submitbutton = document.querySelector('#submitbutton')

const templateoutput = document.getElementById('templateoutput')

const form__switch = document.getElementById('form__switch')

// Empty placeholder for the data from the form.
let plant__formdata = {}

// Gets the value of each part of the form and adds it to the relevant part of plant__formdata
function getFormData() {
    return plant__formdata = {
        'plant__code': plant__code.value,
        'plant__name': plant__name.value,
        'plant__cultivar': plant__cultivar.value,
        'plant__timetilharvest': plant__timetilharvest.value,
        'plant__description': plant__description.value,
        'plant__bulky': plant__bulky.checked,
        'plant__category': document.querySelector('input[name="category"]:checked').value,
        'plant__color': document.querySelector('input[name="color"]:checked').value
    }    

}

// Listens for the Submit button being clicked in the form then uses getFormData to do as name says followed by generateTemplate. Finally resets plant__formdata so ready for next submission.
formcontainer.addEventListener('submit', (event) => {
    event.preventDefault()
    getFormData()
    generateTemplate(plant__formdata)

    plant__formdata = {}
})

let test

// Takes the data from plant__formdata and slots the pieces into the template then outputs that to the text box under the form.
function generateTemplate(data) {
    let firstletter = data.plant__name[0].toLowerCase()
    let classes
    let template

    // The bulky class is to allow users to filter those out of the seedlist if want to.
    if (data.plant__bulky === true) {
        classes = `plant__${firstletter} ${data.plant__category} ${data.plant__color} bulky` 
    } else {
        classes = `plant__${firstletter} ${data.plant__category} ${data.plant__color}` 

    }

    if (data.plant__timetilharvest === '') {
        data.plant__timetilharvest = 'Unknown'
    }

    if (formcontainer.classList.contains('plant__group')) {
        template = `
        <li class="${classes} plant__group">
            <h3 class="plant__type">${data.plant__name}</h3>
            <p class="plant__info">${data.plant__description}</p>
        </li> 
        `   
    } else {
        template = `
        <li class="${classes}">
            <h3 class="plant__type">#${data.plant__code}-${data.plant__name}</h3>
            <p class="plant__info">${data.plant__cultivar}, (${data.plant__timetilharvest} Days) ${data.plant__description}</p>
        </li> 
        `
    }
    templateoutput.value = template

    navigator.clipboard.writeText(template)


}

// When click the switch button hides or reveals parts of the form and adds a class so the template knows to use a different one.
form__switch.addEventListener('click', (event) => {

    const formcode = document.getElementById('form__code')
    const formcultivar = document.getElementById('form__cultivar')
    const formeta = document.getElementById('form__eta')
    const formbulky = document.getElementById('form__bulky')

    if (formcontainer.classList.contains('plant__group')) {
        formcontainer.classList.remove('plant__group')

        formcode.style.display = 'flex'
        formcultivar.style.display = 'flex'
        formeta.style.display = 'flex'
        formbulky.style.display = 'flex'
    } else {
        formcontainer.classList.add('plant__group')     

        formcode.style.display = 'none'
        formcultivar.style.display = 'none'
        formeta.style.display = 'none'
        formbulky.style.display = 'none'
    }
})