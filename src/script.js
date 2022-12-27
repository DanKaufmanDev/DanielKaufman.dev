const terminal = document.querySelector('#terminal')
const minesweeper = document.querySelector('#minesweeper')
const project = document.querySelector('#project')
const contact = document.querySelector('#contact')
const settings = document.querySelector('#desktop__settings')
const rgbSelector = document.querySelector('#settings__taskbar--rgb--selector')
const taskbar = document.querySelector('#taskbar')

document.body.style.background = window.localStorage.getItem('bg');
document.body.style.backgroundSize = window.localStorage.getItem('bgSize');
document.body.style.backgroundRepeat = window.localStorage.getItem('bgRepeat');

// Buttons Min/Max/exit
//Terminal Window
function buttonClickExitTerminal(){
    terminal.style.display = 'none';
}
function buttonClickMinTerminal(){
}
function buttonClickMaxTerminal(){
}
//Project Window
function buttonClickExitProject(){
    project.style.display = 'none';
}
function buttonClickMinProject(){
}
function buttonClickMaxProject(){
}
//Minesweeper Window
function buttonClickExitMinesweeper(){
    minesweeper.style.display = 'none';
}
function buttonClickMinMinesweeper(){
}
function buttonClickMaxMinesweeper(){
}
//Contact Window
function buttonClickExitContact(){
    contact.style.display = 'none';
}
function buttonClickMinContact(){
}
function buttonClickMaxContact(){
}

//Desktop Icons
//Desktop About Icon
function buttonClickAbout(){
    terminal.style.display = 'block';
}
//Desktop Contact Icon
function buttonClickContacts(){
    contact.style.display = 'block';
}
//Desktop Minesweeper Icon
function buttonClickMinesweeper(){
    minesweeper.style.display = 'block';
}
//Desktop Project Icon
function buttonClickProjects(){
    project.style.display = 'block';
}

//Taskbar
//Taskbar Settings
let bool = false;
function buttonClickSettings(){
    if (bool === false) {
    bool = true;
    settings.style.transform = 'translateX(75vw)';
    document.querySelector('#terminal__wrapper').style.zIndex = '-1';
    document.querySelector('#contact__wrapper').style.zIndex = '-1'
    document.querySelector('#project__wrapper').style.zIndex = '-1';
    } else {
    bool = false;
    settings.style.transform = 'translateX(100vw)';
    document.querySelector('#terminal__wrapper').style.zIndex = 'auto';
    document.querySelector('#contact__wrapper').style.zIndex = 'auto';
    document.querySelector('#project__wrapper').style.zIndex = 'auto';
    } 
}

//Themes
//Triangles
function buttonClickTriangle(){
    document.body.style.background = 'url(background/triangles.svg)';
    window.localStorage.setItem('bg', 'url(background/triangles.svg)');
    document.body.style.backgroundSize = 'cover';
    window.localStorage.setItem('bgSize', 'cover');
    document.body.style.backgroundRepeat = 'no-repeat';
    window.localStorage.setItem('bgRepeat', 'no-repeat');
}
//Swirl
function buttonClickSwirl(){
    document.body.style.background = 'url(background/swirl.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    window.localStorage.setItem('bg', 'url(background/swirl.jpg)');
}
//Cube
function buttonClickCube(){
    document.body.style.background = 'url(background/cube.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    window.localStorage.setItem('bg', 'url(background/cube.jpg)');
}
//wave
function buttonClickWave(){
    document.body.style.background = 'url(background/wave.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    window.localStorage.setItem('bg', 'url(background/wave.jpg)');
}


//Color Picker
function colorPicker({movementX, movementY}){
    let getStyle = window.getComputedStyle(document.querySelector('#settings__taskbar--rgb--selector'))
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);

    rgbSelector.style.left = `${movementX + left}px`;
    rgbSelector.style.top = `${movementY + top}px`;

    if(top <= -1){
        rgbSelector.style.top = '0px'
        rgbSelector.style.border = '1.5px solid black';
    }
    if(top >= 171){
        rgbSelector.style.top = '170px';
        rgbSelector.style.border = '1.5px solid white';
    }
    if(left <= -1){
        rgbSelector.style.left = '0px';
    }
    if(left >= 265){
        rgbSelector.style.left = '264px';
    }

    let x = parseInt(getStyle.left);
    let y = parseInt(getStyle.top);
    let rgba = [];

    switch(true){
        case (y <= 0):
            rgba =  [255,255,255]
            break;
        case (y >= 170):
            rgba = [0,0,0]
            break;
        case (y > 0 && x <= 10):
            rgba = [255,0,0]
            break;
        case (x >= 10 && x <= 70):
            rgba[0] = 255;
            rgba[1] = x * 3.6429;
            rgba[2] = 0;
            break;
        case (x >= 70 && x <= 110):
            rgba[0] = 255 - (x * 2.318);
            rgba[1] = 255;
            rgba[2] = 0;
            break;
        case (x >= 110 && x <= 170):
            rgba[0] = 0;
            rgba[1] = 255;
            rgba[2] = x * 1.501;
            break;
        case (x >= 170 && x <= 230):
            rgba[0] = 0;
            rgba[1] = 255 - (x * 1.11);
            rgba[2] = 255;
            break;
        case (x >= 230 && x <= 250):
            rgba[0] = x * 1.02;
            rgba[1] = 0;
            rgba[2] = 255;
            break;
        case (x >= 250 && x <= 265):
            rgba[0] = 255;
            rgba[1] = 0;
            rgba[2] = 255 - (x * 0.965);
            break;
    }
        let red = Math.round(rgba[0]);
        let green = Math.round(rgba[1]);
        let blue = Math.round(rgba[2]);

        taskbar.style.background = 'rgba(' + red + ',' + green + ',' + blue + ',' +  '0.5' + ')';
    }
rgbSelector.addEventListener('mousedown',  () => {
    rgbSelector.style.cursor = 'grabbing';
    rgbSelector.addEventListener('mousemove', colorPicker);
});
document.addEventListener('mouseup', () => {
    rgbSelector.style.cursor = 'grab';
    rgbSelector.removeEventListener('mousemove', colorPicker);
});

// Window Movement 
//Terminal Window
const terminalWrapper = document.querySelector('#terminal__wrapper'),
    terminalHeader = terminalWrapper.querySelector('#terminal__bar');

function onDragTerminal({movementX, movementY}){
    let getStyle = window.getComputedStyle(terminalWrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    terminalWrapper.style.left = `${left + movementX}px`;
    terminalWrapper.style.top = `${top + movementY}px`;
}
terminalHeader.addEventListener("mousedown", () => {
    terminalHeader.addEventListener('mousemove', onDragTerminal);
});
document.addEventListener('mouseup', () =>{
    terminalHeader.removeEventListener('mousemove', onDragTerminal);
});
//Project Window
const projectWrapper = document.querySelector('#project__wrapper'),
projectHeader = projectWrapper.querySelector('#project__bar');

function onDragProject({movementX, movementY}){
    let getStyle = window.getComputedStyle(projectWrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    projectWrapper.style.left = `${left + movementX}px`;
    projectWrapper.style.top = `${top + movementY}px`;
}
projectHeader.addEventListener("mousedown", () => {
    projectHeader.addEventListener('mousemove', onDragProject);
});
document.addEventListener('mouseup', () =>{
    projectHeader.removeEventListener('mousemove', onDragProject);
});
//Minesweeper Window
const minesweeperWrapper = document.querySelector('#minesweeper__wrapper'),
    minesweeperHeader = minesweeperWrapper.querySelector('#minesweeper__bar');

function onDragMinesweeper({movementX, movementY}){
    let getStyle = window.getComputedStyle(minesweeperWrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    minesweeperWrapper.style.left = `${left + movementX}px`;
    minesweeperWrapper.style.top = `${top + movementY}px`;
}
minesweeperHeader.addEventListener("mousedown", () => {
    minesweeperHeader.addEventListener('mousemove', onDragMinesweeper);
});
document.addEventListener('mouseup', () => {
    minesweeperHeader.removeEventListener('mousemove', onDragMinesweeper);
});
//Contact Window
const contactWrapper = document.querySelector('#contact__wrapper'),
    contactHeader = contactWrapper.querySelector('#contact__bar');

function onDragContact({movementX, movementY}){
    let getStyle = window.getComputedStyle(contactWrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    contactWrapper.style.left = `${left + movementX}px`;
    contactWrapper.style.top = `${top + movementY}px`;
}
contactHeader.addEventListener("mousedown", () => {
    contactHeader.addEventListener('mousemove', onDragContact);
});
document.addEventListener('mouseup', () => {
    contactHeader.removeEventListener('mousemove', onDragContact);
});