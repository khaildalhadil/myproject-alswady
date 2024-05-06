// init html elemetn 
const btn = document.querySelector('.btn--green');
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const numberEl = document.querySelector('#number');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const select = document.querySelector('.select');
const spanWrong = document.querySelector('.span--wrong');
const wrongP = document.querySelector('.wrong--p');

function valitName()  {
    if (nameEl.value === '') {
        alert('Hi')
        spanWrong.innerHTML = 'write you name'
    }
}

function valitName() {
    if (nameEl.value === '') {
        nameEl.style.cssText = `
            border-bottom: 3px solid #ff7730;
        `
        return false
    }
    
    nameEl.style.cssText = `
        border-bottom: 3px solid #55c57a;
    `
    return true
}

function valitEmail() {
    if (!emailEl.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailEl.style.cssText = `
            border-bottom: 3px solid #ff7730;
        `
        
        return false
    }

    emailEl.style.cssText = `
        border-bottom: 3px solid #55c57a;
    `
    return true
}

function valitNumber() {
    if (numberEl.value.length < 7) {
        numberEl.style.cssText = `
            border-bottom: 3px solid #ff7730;
        `
        return false
    } 
    numberEl.style.cssText = `
        border-bottom: 3px solid #55c57a;
    `
    return true
}

btn.addEventListener('click', (e)=> {
    e.preventDefault()

    if (!valitName() || !valitEmail() || !valitNumber()) {
        wrongP.textContent = 'you have to right ❌';
        return false;
    }

    wrongP.textContent = ''

    const modalH1 = document.querySelector('.modal--h1')
    const modalP = document.querySelector('.modal--p')
    const date = document.querySelector('.date').value

    modalH1.innerHTML = `Thinks You ${nameEl.value}`;
    modalP.innerHTML = ` we will send an appointment \nin this number ${numberEl.value}\n for ${select.value} date ${date} `
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click', ()=> {
    modal.classList.add('hidden');
    overlay.classList.add('hidden')

    nameEl.value = '';
    emailEl.value = '';
    numberEl.value = '';
})

overlay.addEventListener('click', ()=> {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    nameEl.value = '';
    emailEl.value = '';
    numberEl.value = '';
});