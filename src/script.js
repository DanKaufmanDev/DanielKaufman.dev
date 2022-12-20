const zIndexCon = 1
const terminal = document.querySelector('#terminal')
const project = document.querySelector('#project')

// Buttons Min/Max?exit
//Terminal Window
function buttonClickExitTerminal(){
    terminal.style.display = 'none';
}
function buttonClickMinTerminal(){
    terminal.style.width = '70vw';
    terminal.style.height = '65vh';
}
function buttonClickMaxTerminal(){
    terminal.style.width = '100vw';
    terminal.style.height = '97.5vh';
}

//Project Window
function buttonClickExitProject(){
    project.style.display = 'none';
}
function buttonClickMinProject(){
    console.log('min clicked')
}
function buttonClickMaxProject(){
    console.log('max clicked')
    project.style.width = '100vw';
    project.style.height = '97.5vh';
}

//Desktop Icons
function buttonClickAbout(){
    terminal.style.display = '';
}

function buttonClickCalender(){
    console.log('clicked calender')
}

function buttonClickContacts(){
    console.log('clicked contacts')
}

function buttonClickMinesweeper(){
    console.log('clicked minesweeper')
}

function buttonClickProjects(){
    project.style.display = 'block';
}

function buttonClickSpotify(){
    console.log('clicked spotify')
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
