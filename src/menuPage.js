import {createDiv} from "./util";


function loadMenuPage(){
    const mainBodyElement = document.getElementById('mainBody');
    createMenuTitle(mainBodyElement);
    createMenu(mainBodyElement);
}


function createMenuTitle(mainBodyElement){
    const menuTitleElement = createDiv('menuTitleDiv', 'Coffee Menu')
    mainBodyElement.appendChild(menuTitleElement);
}


function createMenu(mainBodyElement){
    const menuElement = createDiv('menuDiv', '')
    const menuItems = ["Latte", "Cappucino", "Mocha", "Flat White", "Brownie", "Cookie", "Milkshake"];
    const menuItemsCosts = [1.99, 2.50, 2.85, 2.99, 3.49, 2.49, 4.99];
    for(let index = 0; index < menuItems.length; index ++){
        const menuItemElement = createDiv('menuItemDiv', menuItems[index]);
        const menuItemCostElement = createDiv('menuItemCostDiv', `£${menuItemsCosts[index].toString()}`)
        menuElement.appendChild(menuItemElement);
        menuElement.appendChild(menuItemCostElement);
    }
    mainBodyElement.appendChild(menuElement);
}

export {loadMenuPage, createMenuTitle};