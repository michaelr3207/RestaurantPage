import {createIntroMessage, createMainBodyMessage} from "./homePage";

function clearMainBodyContent(){
    const mainBodyContent = document.getElementById('mainBody');
    mainBodyContent.style.background = '';
    mainBodyContent.innerHTML = '';
}

// this is optimise branch

function createWebpage() {
    const headerElement = createDiv('headerDiv', '')
    headerElement.id = 'header';
    const contentDiv = document.getElementById('contentBox');
    headerElement.appendChild(createDiv('headerTitleDiv', 'Coffee Shop' ));
    headerElement.appendChild(addButtonsToHeader());
    contentDiv.appendChild(headerElement);
    createMainBodyDiv();
}

function addButtonsToHeader(){
    const headerButtons = document.createElement('div');
    headerButtons.classList.add('headerButtonDiv');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    button1.innerHTML = 'Home'; button1.id = 'homeBtn';
    button2.innerHTML = 'Menu'; button2.id = 'menuBtn';
    button3.innerHTML = 'Contact'; button3.id = 'contactBtn';
    headerButtons.appendChild(button1);
    headerButtons.appendChild(button2);
    headerButtons.appendChild(button3);
    return headerButtons;
}

function createMainBodyDiv(){
    const mainBodyElement = createDiv('mainBodyDiv');
    mainBodyElement.id = 'mainBody';
    createIntroMessage(mainBodyElement);
    createMainBodyMessage(mainBodyElement);
    mainBodyElement.appendChild(createButtonBoxDiv());
    mainBodyElement.appendChild(createOpeningTimeMsg());
    const contentDiv = document.getElementById('contentBox');
    contentDiv.appendChild(mainBodyElement);
}

function createButtonBoxDiv(){
    const btnBoxElement = createDiv('btnBoxDiv', '');
    const orderBtn = document.createElement('button');
    const learnMoreBtn = document.createElement('button');
    learnMoreBtn.id  = 'learnMoreBtn';
    learnMoreBtn.innerHTML = 'Learn More';
    orderBtn.innerHTML = 'Order Now';
    btnBoxElement.appendChild(orderBtn);
    btnBoxElement.appendChild(learnMoreBtn);
    return btnBoxElement;
}


function createOpeningTimeMsg(){
    return createDiv('openingTimesDiv', 'Open 9 - 5 <span class="underlineSpan">Mon to Friday!</span>');
}

function createDiv(classname, innerHtml){
    const divElement = document.createElement('div');
    if(innerHtml !== '')
        divElement.innerHTML = innerHtml;
    divElement.classList.add(classname);
    return divElement;
}


export {clearMainBodyContent, createWebpage, addButtonsToHeader, createMainBodyDiv,
        createButtonBoxDiv, createOpeningTimeMsg, createDiv};