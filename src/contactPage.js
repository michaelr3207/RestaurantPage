

function loadContactPage(){
    const mainBodyElement = document.getElementById('mainBody');
    const contactDetailsElement = createDiv('contactDetailsDiv');
    const contactDetailsTitleElement = createDiv('contactDetailsTitleDiv');

    contactDetailsElement.appendChild(contactDetailsTitleElement);
    mainBodyElement.appendChild(contactDetailsElement);
}

function createDiv(classname){
    const divElement = document.createElement('div');
    divElement.classList.add(classname);
    return divElement;
}


export {loadContactPage};