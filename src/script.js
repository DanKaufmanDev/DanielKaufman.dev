const terminal = document.querySelector('#terminal')
const minesweeper = document.querySelector('#minesweeper')
const project = document.querySelector('#project')
const contact = document.querySelector('#contact')
const settings = document.querySelector('#desktop__settings')

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
    document.querySelector('#minesweeper__wrapper').style.zIndex = '-1';
    document.querySelector('#project__wrapper').style.zIndex = '-1';
    } else {
    bool = false;
    settings.style.transform = 'translateX(100vw)';
    document.querySelector('#terminal__wrapper').style.zIndex = 'auto';
    document.querySelector('#contact__wrapper').style.zIndex = 'auto';
    document.querySelector('#minesweeper__wrapper').style.zIndex = 'auto';
    document.querySelector('#project__wrapper').style.zIndex = 'auto';
    } 
}

//Themes
//Triangles
function buttonClickTriangle(){
    document.body.style.background = 'url(background/triangles.svg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
}
//Swirl
function buttonClickSwirl(){
    document.body.style.background = 'url(background/swirl.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
}
//Cube
function buttonClickCube(){
    document.body.style.background = 'url(background/cube.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
}
//wave
function buttonClickWave(){
    document.body.style.background = 'url(background/wave.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
}

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