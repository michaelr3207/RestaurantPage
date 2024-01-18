import CoffeeImage from './coffeeCUp2.jpeg'
import {clearMainBodyContent, createWebpage, createHeaderTitle, addButtonsToHeader, createMainBodyDiv,
    createButtonBoxDiv, createOpeningTimeMsg} from './util'
import {loadHomePage} from "./homePage";
import {loadMenuPage} from './menuPage';
import {addEventListenersToNavButtons} from "./index";



function loadInitialPage(){
    createWebpage();
    addEventListenersToNavButtons();
}


export {loadInitialPage, loadHomePage};