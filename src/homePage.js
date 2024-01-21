import {createButtonBoxDiv, createDiv, createOpeningTimeMsg} from "./util";


function loadHomePage(){
    const mainBodyElement = document.getElementById('mainBody');
    createIntroMessage(mainBodyElement);
    createMainBodyMessage(mainBodyElement);
    mainBodyElement.appendChild(createButtonBoxDiv());
    mainBodyElement.appendChild(createOpeningTimeMsg());
}

function createIntroMessage(mainBodyElement){
    const introMessage = createDiv('introMsgDiv',  'The <span class="underlineSpan">Best</span> Coffee I have Ever Had...' )
    mainBodyElement.appendChild(introMessage);
}


function createMainBodyMessage(mainBodyElement){
    const mainBodyMessageDiv = createDiv('mainBodyMessageDiv',
        'Welcome to our coffee shop website please have a look around, we have a wide selection on offer!')
    mainBodyMessageDiv.appendChild(createSmallMessage());
    mainBodyElement.appendChild(mainBodyMessageDiv);
}


function createSmallMessage(){
    return createDiv('smallMsg',
        'Please be aware of waiting times during holidays');
}


export {loadHomePage, createIntroMessage, createMainBodyMessage};