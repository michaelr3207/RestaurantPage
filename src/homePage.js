import {createButtonBoxDiv, createOpeningTimeMsg} from "./util";


function loadHomePage(){
    const mainBodyElement = document.getElementById('mainBody');
    createIntroMessage(mainBodyElement);
    createMainBodyMessage(mainBodyElement);
    mainBodyElement.appendChild(createButtonBoxDiv());
    mainBodyElement.appendChild(createOpeningTimeMsg());
}

function createIntroMessage(mainBodyElement){
    const introMessage = document.createElement('div');
    introMessage.innerHTML = 'The Best Coffee I have Ever Had...';
    introMessage.classList.add('introMsgDiv');
    mainBodyElement.appendChild(introMessage);
}


function createMainBodyMessage(mainBodyElement){
    const mainBodyMessageDiv = document.createElement('div');
    mainBodyMessageDiv.classList.add('mainBodyMessageDiv');
    mainBodyMessageDiv.innerHTML = 'Welcome to our coffee shop website please have a loook around, we have a' +
        'wide selection on offer!';
    mainBodyMessageDiv.appendChild(createSmallMessage());
    mainBodyElement.appendChild(mainBodyMessageDiv);
}


function createSmallMessage(){
    const smallMessage = document.createElement('div');
    smallMessage.innerHTML = 'Please be aware of waiting times during holidays';
    smallMessage.classList.add('smallMsg');
    return smallMessage;
}


export {loadHomePage};