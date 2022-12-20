const zIndexCon = 5
const terminal = document.querySelector('#terminal')
const calender = document.querySelector('#calender')
const minesweeper = document.querySelector('#minesweeper')
const project = document.querySelector('#project')
const contact = document.querySelector('#contact')

// Buttons Min/Max?exit
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

//Calender Window
function buttonClickExitCalender(){
    calender.style.display = 'none';
}
function buttonClickMinCalender(){
}
function buttonClickMaxCalender(){
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
function buttonClickAbout(){
    terminal.style.display = '';
}

function buttonClickCalender(){
    calender.style.display = 'block';
}

function buttonClickContacts(){
    contact.style.display = 'block'
}

function buttonClickMinesweeper(){
    minesweeper.style.display = 'block';
}

function buttonClickProjects(){
    project.style.display = 'block';
}

// function buttonClickSpotify(){
//     console.log('clicked spotify')
// }

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

//Calender Window
const calenderWrapper = document.querySelector('#calender__wrapper'),
    calenderHeader = calenderWrapper.querySelector('#calender__bar');

function onDragCalender({movementX, movementY}){
    let getStyle = window.getComputedStyle(calenderWrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    calenderWrapper.style.left = `${left + movementX}px`;
    calenderWrapper.style.top = `${top + movementY}px`;
}
calenderHeader.addEventListener("mousedown", () => {
    calenderHeader.addEventListener('mousemove', onDragCalender);
});
document.addEventListener('mouseup', () => {
    calenderHeader.removeEventListener('mousemove', onDragCalender);
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