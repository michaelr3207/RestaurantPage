import CoffeeImage from './darkCoffee.jpg'

function loadContactPage(){
    const contactPageMainBodyElement = createDiv('contactPageMain');
    const mainBodyElement = document.getElementById('mainBody');
    mainBodyElement.style.background = 'black';
    const contactDetailsElement = createDiv('contactDetailsDiv');
    const contactDetailsTitleElement = createDiv('contactDetailsTitleDiv');
    contactDetailsTitleElement.innerHTML = 'Get In Contact!';
    const formContactElement = createDiv('formContactDiv');
    createFormContactElement(formContactElement);
    contactDetailsElement.appendChild(contactDetailsTitleElement);
    contactDetailsElement.appendChild(formContactElement);
    contactPageMainBodyElement.appendChild(contactDetailsElement);
    contactPageMainBodyElement.appendChild(createImageDiv());
    mainBodyElement.appendChild(contactPageMainBodyElement);
}

function createDiv(classname){
    const divElement = document.createElement('div');
    divElement.classList.add(classname);
    return divElement;
}

function createImageDiv(){
    const coffeeImageElement = createDiv('coffeeImgDiv');
    const imgOfCoffee = new Image();
    imgOfCoffee.src = CoffeeImage;
    coffeeImageElement.appendChild(imgOfCoffee);
    return coffeeImageElement;
}


function createFormContactElement(formContactElement){
    const inputName = document.createElement("input");
    const emailName = document.createElement("input");
    const testAreaMessageBox = document.createElement("textarea");
    const submitButton = document.createElement('button');
    submitButton.innerHTML = 'Submit'
    testAreaMessageBox.id = 'textAreaBox';
    testAreaMessageBox.placeholder = 'Your message...'
    testAreaMessageBox.rows = 10;
    testAreaMessageBox.cols = 30;
    inputName.type = 'text';
    inputName.placeholder = 'Your Name';
    emailName.type = 'text';
    emailName.placeholder = 'Your Email'

    formContactElement.appendChild(inputName);
    formContactElement.appendChild(emailName);
    formContactElement.appendChild(testAreaMessageBox);
    formContactElement.appendChild(submitButton);
}

export {loadContactPage};