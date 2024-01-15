import CoffeeImage from './coffeeCUp2.jpeg'

function loadHomePage(){
    // const coffeeBackgroundImage = new Image();
    // coffeeBackgroundImage.src = CoffeeImage;
    // const contentDiv = document.getElementById('contentBox');
    // contentDiv.appendChild(coffeeBackgroundImage);
    createHeader();
}


function createHeader() {
    const headerElement = document.createElement('div');
    headerElement.classList.add('headerDiv'); headerElement.id = 'header';
    const contentDiv = document.getElementById('contentBox');
    headerElement.appendChild(createHeaderTitle());
    contentDiv.appendChild(headerElement);
}

function createHeaderTitle(){
    const headerTitleDiv = document.createElement('div');
    headerTitleDiv.id = 'headerTitle'; headerTitleDiv.classList.add('headerTitleDiv');
    headerTitleDiv.innerHTML = 'Coffee Shop'
    return headerTitleDiv;
}

export {loadHomePage};