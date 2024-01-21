import './style.css';
import {loadHomePage, loadInitialPage} from './loadHomePage'
import {clearMainBodyContent} from "./util";
import {loadMenuPage} from "./menuPage";
import {loadContactPage} from "./contactPage";

function component() {
       loadInitialPage();
 }

component();

function addEventListenersToNavButtons(){
    const menuBtn = document.getElementById('menuBtn');
    const homeBtn = document.getElementById('homeBtn');
    const contactBtn = document.getElementById('contactBtn');
    menuBtn.addEventListener("click", function (){
        clearMainBodyContent();
        loadMenuPage();

    })
    homeBtn.addEventListener("click", function (){
        clearMainBodyContent()
        loadHomePage();
    })
    contactBtn.addEventListener("click", () =>{
        clearMainBodyContent();
        loadContactPage();
    })
}



export {addEventListenersToNavButtons};