


function loadMenuPage(){
    console.log('work');
    const mainBodyElement = document.getElementById('mainBody');
    createMenuTitle(mainBodyElement);
    createMenu(mainBodyElement);
}


function createMenuTitle(mainBodyElement){
    console.log('workdddddddd');
    const menuTitleElement = document.createElement('div');
    menuTitleElement.classList.add('menuTitleDiv');
    menuTitleElement.innerHTML = 'Coffee Menu';
    mainBodyElement.appendChild(menuTitleElement);
}


function createMenu(mainBodyElement){
    const menuElement = document.createElement('div');
    menuElement.classList.add('menuDiv');
    const menuItems = ["Latte", "Cappucino", "Mocha", "Flat White", "Brownie", "Cookie", "Milkshake"];
    const menuItemsCosts = [1.99, 2.50, 2.85, 2.99, 3.49, 2.49, 4.99];
    for(let index = 0; index < menuItems.length; index ++){
        const menuItemElement = document.createElement('div');
        menuItemElement.classList.add('menuItemDiv');
        menuItemElement.innerHTML = menuItems[index];
        const menuItemCostElement = document.createElement('div');
        menuItemCostElement.classList.add('menuItemCostDiv');
        menuItemCostElement.innerHTML = `£${menuItemsCosts[index].toString()}`;
        menuElement.appendChild(menuItemElement);
        menuElement.appendChild(menuItemCostElement);
    }
    mainBodyElement.appendChild(menuElement);
}


export {loadMenuPage, createMenuTitle};