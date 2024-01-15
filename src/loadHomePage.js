import CoffeeImage from './coffeeCUp2.jpeg'
import {clearMainBodyContent, createWebpage, createHeaderTitle, addButtonsToHeader, createMainBodyDiv,
    createButtonBoxDiv, createOpeningTimeMsg} from './util'
import {loadHomePage} from "./homePage";

function loadInitialPage(){
    createWebpage();
    addEventListenersToNavButtons();
}
function addEventListenersToNavButtons(){
    const menuBtn = document.getElementById('menuBtn');
    const homeBtn = document.getElementById('homeBtn');
    menuBtn.addEventListener("click", function (){
        clearMainBodyContent();
    })
    homeBtn.addEventListener("click", function (){
        console.log('bru');
        loadHomePage();
    })
}

export {loadInitialPage};