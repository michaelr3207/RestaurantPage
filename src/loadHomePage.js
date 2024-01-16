import CoffeeImage from './coffeeCUp2.jpeg'
import {clearMainBodyContent, createWebpage, createHeaderTitle, addButtonsToHeader, createMainBodyDiv,
    createButtonBoxDiv, createOpeningTimeMsg} from './util'
import {loadHomePage} from "./homePage";
import {loadMenuPage} from './menuPage';



function loadInitialPage(){
    createWebpage();
    addEventListenersToNavButtons();
}
function addEventListenersToNavButtons(){
    const menuBtn = document.getElementById('menuBtn');
    const homeBtn = document.getElementById('homeBtn');
    menuBtn.addEventListener("click", function (){
        clearMainBodyContent();
        loadMenuPage();

    })
    homeBtn.addEventListener("click", function (){
        clearMainBodyContent()
        loadHomePage();
    })
}

export {loadInitialPage, loadHomePage};