const terminal = document.querySelector('#terminal')
const btnMin = document.querySelector('#bar__button--minimize')
const btnMax = document.querySelector('#bar__button--maximize')
const appTerminal = document.querySelector('#desktop__background--about').children

// Buttons / Functions
function buttonClickExit(){
    terminal.style.display = 'none';
}

function buttonClickMin(){
    terminal.style.width = '70vw';
    terminal.style.height = '65vh';
    btnMax.style.background= 'linear-gradient(#58f358 0%, #12de34 100%)';
}

function buttonClickMax(){
    terminal.style.width = '100vw';
    terminal.style.height = '97.5vh';
    btnMax.style.background= 'linear-gradient(#7d7871 0%, #595953 100%)';  
}

function buttonClickAbout(){
    console.log('clicked terminal')
    terminal.style.display = 'block'
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
    console.log('clicked projects')
}

function buttonClickSpotify(){
    console.log('clicked spotify')
}
// Window Movement 
const wrapper = document.querySelector('#terminal__wrapper'),
header = wrapper.querySelector('#terminal__bar');

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(wrapper);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${top + movementY}px`;
}
    header.addEventListener("mousedown", () => {
        header.addEventListener('mousemove', onDrag);
});
    document.addEventListener('mouseup', () =>{
        header.removeEventListener('mousemove', onDrag);
});

// Event Listener
