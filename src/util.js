
function clearMainBodyContent(){
    const mainBodyContent = document.getElementById('mainBody');
    mainBodyContent.innerHTML = '';
}


function createWebpage() {
    const headerElement = document.createElement('div');
    headerElement.classList.add('headerDiv'); headerElement.id = 'header';
    const contentDiv = document.getElementById('contentBox');
    headerElement.appendChild(createHeaderTitle());
    headerElement.appendChild(addButtonsToHeader());
    contentDiv.appendChild(headerElement);
    createMainBodyDiv();
}

function createHeaderTitle(){
    const headerTitleDiv = document.createElement('div');
    headerTitleDiv.id = 'headerTitle'; headerTitleDiv.classList.add('headerTitleDiv');
    headerTitleDiv.innerHTML = 'Coffee Shop'
    return headerTitleDiv;
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
    const mainBodyElement = document.createElement('div');
    const mainBodyMessageDiv = document.createElement('div');
    const smallMessage = document.createElement('div');
    const introMessage = document.createElement('div');
    mainBodyElement.id = 'mainBody';
    introMessage.classList.add('introMsgDiv');
    introMessage.innerHTML = 'The <span class="underlineSpan">Best</span> Coffee I have Ever Had...';
    smallMessage.innerHTML = 'Please be aware of waiting times during holidays';
    smallMessage.classList.add('smallMsg');
    mainBodyElement.appendChild(introMessage);
    mainBodyElement.classList.add('mainBodyDiv');
    mainBodyMessageDiv.classList.add('mainBodyMessageDiv');
    mainBodyMessageDiv.innerHTML = 'Welcome to our coffee shop website please have a loook around, we have a' +
        'wide selection on offer!';
    mainBodyMessageDiv.appendChild(smallMessage);
    mainBodyElement.appendChild(mainBodyMessageDiv);
    mainBodyElement.appendChild(createButtonBoxDiv());
    mainBodyElement.appendChild(createOpeningTimeMsg());
    const contentDiv = document.getElementById('contentBox');
    contentDiv.appendChild(mainBodyElement);
}

function createButtonBoxDiv(){
    const btnBoxElement = document.createElement('div');
    btnBoxElement.classList.add('btnBoxDiv');
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
    const openingTimesMessageElement = document.createElement('div');
    openingTimesMessageElement.innerHTML = 'Open 9 - 5 <span class="underlineSpan">Mon to Friday!</span>';
    openingTimesMessageElement.classList.add('openingTimesDiv');
    return openingTimesMessageElement;
}


export {clearMainBodyContent, createWebpage, createHeaderTitle, addButtonsToHeader, createMainBodyDiv,
        createButtonBoxDiv, createOpeningTimeMsg};