import './style.css';
import {loadHomePage, loadInitialPage} from './loadHomePage'
import _ from "lodash";
import {clearMainBodyContent} from "./util";
import {loadMenuPage} from "./menuPage";


function component() {
       loadInitialPage()
 }

component();


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

export {addEventListenersToNavButtons};