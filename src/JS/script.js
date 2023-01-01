const terminal = document.querySelector('#terminal')
const project = document.querySelector('#project')
const contact = document.querySelector('#contact')
const settings = document.querySelector('#desktop__settings')
const rgbSelector = document.querySelector('#settings__taskbar--rgb--selector')
const taskbar = document.querySelector('#taskbar')

// Local Storage Load
document.body.style.background = window.localStorage.getItem('bg');
document.body.style.backgroundSize = window.localStorage.getItem('bgSize');
document.body.style.backgroundRepeat = window.localStorage.getItem('bgRepeat');
taskbar.style.background = window.localStorage.getItem('taskbar');

//Preloader & onload
window.onload = function preloader(){
    document.querySelector('.wrapper').style.display = 'none';
    L1();
}

//Terminal Animation
let i = 0;
let txt = "Hi There, My name is Dan Im a Software Engineer & Fullstack Developer Try Clicking Some of the Apps for More info";
let speed = 45;
let txtL1 = "Hi There,";
function L1(){
    if(i <= txtL1.length){
        document.querySelector('#l-1').innerHTML += txt.charAt(i)
        i++;
        setTimeout(L1, speed);
        return;
    }
    if(i >= txtL1.length){
        document.querySelector('#l-1').style.borderRight = 'none';
        setTimeout(() => {L2();}, 50);
    }
}
let txtL2 = "My name is Dan ";
function L2(){
    if(i <= txtL1.length + txtL2.length){
        document.querySelector('#l-2').innerHTML += txt.charAt(i);
        i++;
        setTimeout(L2, speed);
        return;
    }
    if(i >= txtL1.length + txtL2.length){
        document.querySelector('#l-2').style.borderRight = 'none';
        setTimeout(() => {L3();}, 50);
    }
}
let txtL3 = "Im a Software Engineer & Fullstack Developer ";
function L3(){
    if(i <= txtL1.length + txtL2.length + txtL3.length){
        document.querySelector('#l-3').innerHTML += txt.charAt(i);
        i++;
        setTimeout(L3, speed);
        return;
    }
    if(i >= txtL1.length + txtL2.length + txtL3.length){
        document.querySelector('#l-3').style.borderRight = 'none';
        setTimeout(() => {L4();}, 50);
    }
}
let txtL4 = "Try Clicking Some of the Apps for More info";
function L4(){
    if(i <= txtL1.length + txtL2.length + txtL3.length + txtL4.length){
        document.querySelector('#l-4'). innerHTML += txt.charAt(i);
        i++;
        setTimeout(L4, speed);
        return;
    }
    if(i >= txtL1.length + txtL2.length + txtL3.length + txtL4.length){
        document.querySelector('#l-4').style.borderRight = 'none';
        setTimeout(() => {dragonL1();}, 50)
    }
}
let j = 0;
let dragontxt = "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⣲⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠖⠋⢀⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠜⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡰⠊⠀⠀⡠⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠊⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⡜⠁⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠚⠁⡜⠁ ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢸⠀⠀⠀⠀⢀⣀⣀⠤⠖⠈⠀⠀⢀⡜⠀⡀⠀⠀⠀⠀⠀⠀⠀⢀⠔⠓⠲⢤⣸⠒⣊⣭⠛⠉⠀⠀⠀⠀⠀⢀⣠⢿⡶⠛⠁⠀⠀⠀⠀⠀⠀⢠⠇⠀⠀⠀⠀⣹⠎⠀⠀⠑⡄⠀⢀⡠⠔⢊⡥⢺⠋⠀⠀⠀⠀⠀⣠⠎⠀⠀⠀⣠⠞⠁⠀⠀⠀⢀⣾⠋⠁⣠⠞⠁⠀⢸⡀⠀⠀⠀⠀⢰⠃⠀⡠⠊⡜⠁⠀⠀⠀⢀⡊⠁⠁⠀⢊⡀⠀⠀⠀⣀⣉⣓⣦⡤⠤⠀⠀⠀⠀⠘⡤⠊⠁⠸⠀⠀⠀⡠⡖⡝⠀⠀⠀⠀⠀⠈⢉⡩⠭⠒⢋⡟⠁⠀⠀⠀⠀⡸⠁⠀⠀⠀⠑⠒⠛⠒⠋⠁⠀⠀⠀⠀⠀⠀⠘⠤⣀⡀⠈⣇⠀⠀⣀⠜⠁⠀⠀⠀⠀⠀⠀⢀⣀⠤⠄⠀⠀⠀⡰⠚⢧⠉⠒⠒⠮⠽⣾⣦⣀⢠⠋⠁⡠⣖⠂⠀⠀⠀⡠⠋⠉⠀⡀⠀⠀⢀⡴⠁⠀⠸⡄⠀⠀⠀⠀⡇⠙⢌⠉⢸⠀⠘⠐⠁⣀⡠⠔⠋⣀⣀⡴⠚⠓⡶⣞⣉⣀⣀⡠⢤⠇⠀⠀⠀⢰⣃⡀⠈⢳⡀⠈⢧⣀⣠⡊⠁⡀⣠⠞⠁⠀⠀⠀⡜⠁⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⣿⠀⠈⠑⢄⢳⠀⠀⠀⠰⣽⢻⡏⠁⠀⠀⠀⢀⠞⠑⠦⠤⠤⠤⠄⡸⠁⠀⠀⠀⢸⠉⣆⠀⠀⠘⡾";
function dragonL1(){
    if(j < 30){
        document.querySelector('#l-5').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL1, speed);
        return;
        }
        if(j >= 30){
            document.querySelector('#l-5').style.borderRight = 'none';
            setTimeout(() => {dragonL2();}, 50);
        }
}
function dragonL2(){
    if(j < 60){
        document.querySelector('#l-6').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL2, speed);
        return;
        }
        if(j >= 60){
            document.querySelector('#l-6').style.borderRight = 'none';
            setTimeout(() => {dragonL3();}, 50);
        }
}
function dragonL3(){
    if(j < 90){
        document.querySelector('#l-7').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL3, speed);
        return;
        }
        if(j >= 90){
            document.querySelector('#l-7').style.borderRight = 'none';
            setTimeout(() => {dragonL4();}, 50);
        }
}
function dragonL4(){
    if(j <= 119){
        document.querySelector('#l-8').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL4, speed);
        return;
        }
        if(j >= 119){
            document.querySelector('#l-8').style.borderRight = 'none';
            setTimeout(() => {dragonL5();}, 50);
        }
}
function dragonL5(){
    if(j <= 148){
        document.querySelector('#l-9').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL5, speed);
        return;
    }
    if(j >= 148){
        document.querySelector('#l-9').style.borderRight = 'none';
                setTimeout(() => {dragonL6();}, 50);
    }
}
function dragonL6(){
    if(j <= 177){
        document.querySelector('#l-10').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL6, speed);
        return;
    }
    if(j >= 177){
        document.querySelector('#l-10').style.borderRight = 'none';
                setTimeout(() => {dragonL7();}, 50);
    }
}
function dragonL7(){
    if(j <= 203){
        document.querySelector('#l-11').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL7, speed);
        return;
    }
    if(j >= 203){
        document.querySelector('#l-11').style.borderRight = 'none';
                setTimeout(() => {dragonL8();}, 50);
    }
}
function dragonL8(){
    if(j <= 229){
        document.querySelector('#l-12').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL8, speed);
        return;
    }
    if(j >= 229){
        document.querySelector('#l-12').style.borderRight = 'none';
                setTimeout(() => {dragonL9();}, 50);
    }
}
function dragonL9(){
    if(j <= 259){
        document.querySelector('#l-13').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL9, speed);
        return;
    }
    if(j >= 259){
        document.querySelector('#l-13').style.borderRight = 'none';
                setTimeout(() => {dragonL10();}, 50);
    }
}
function dragonL10(){
    if(j <= 287){
        document.querySelector('#l-14').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL10, speed);
        return;
    }
    if(j >= 287){
        document.querySelector('#l-14').style.borderRight = 'none';
                setTimeout(() => {dragonL11();}, 50);
    }
}
function dragonL11(){
    if(j <= 314){
        document.querySelector('#l-15').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL11, speed);
        return;
    }
    if(j >= 314){
        document.querySelector('#l-15').style.borderRight = 'none';
                setTimeout(() => {dragonL12();}, 50);
    }
}
function dragonL12(){
    if(j <= 343){
        document.querySelector('#l-16').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL12, speed);
        return;
    }
    if(j >= 343){
        document.querySelector('#l-16').style.borderRight = 'none';
                setTimeout(() => {dragonL13();}, 50);
    }
}
function dragonL13(){
    if(j <= 373){
        document.querySelector('#l-17').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL13, speed);
        return;
    }
    if(j >= 373){
        document.querySelector('#l-17').style.borderRight = 'none';
                setTimeout(() => {dragonL14();}, 50);
    }
}
function dragonL14(){
    if(j <= 404){
        document.querySelector('#l-18').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL14, speed);
        return;
    }
    if(j >= 404){
        document.querySelector('#l-18').style.borderRight = 'none';
                setTimeout(() => {dragonL15();}, 50);
    }
}
function dragonL15(){
    if(j <= 435){
        document.querySelector('#l-19').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL15, speed);
        return;
    }
    if(j >= 435){
        document.querySelector('#l-19').style.borderRight = 'none';
                setTimeout(() => {dragonL16();}, 50);
    }
}
function dragonL16(){
    if(j <= 466){
        document.querySelector('#l-20').innerHTML += dragontxt.charAt(j);
        j++;
        setTimeout(dragonL16, speed);
        return;
    }
    if(j >= 466){
        document.querySelector('#l-20').style.borderRight = 'none';
        document.querySelector('#terminal__prompt--cursor').style.display = 'block';
        document.querySelector('#terminal__prompt--cursor').style.animation = 'blink 1200ms linear infinite';
    }
}
// Buttons Min/Max/Exit
//Terminal Window
function buttonClickExitTerminal(){
    terminal.style.display = 'none';
    document.querySelector('#taskbar--about').style.display = 'none';
}
function buttonClickMinTerminal(){
    terminal.style.display = 'none';
    document.querySelector('#taskbar--about').style.display = 'flex'
    document.querySelector('#taskbar--about').style.height = '100%';
    boolAbout = false;
}
//Contact Window
function buttonClickExitContact(){
    contact.style.display = 'none';
    document.querySelector('#taskbar--contact').style.display = 'none';
}
function buttonClickMinContact(){
    contact.style.display = 'none';
    document.querySelector('#taskbar--contact').style.display = 'flex'
    document.querySelector('#taskbar--contact').style.height = '100%';
    boolContact = false;
}
//Project Window
function buttonClickExitProject(){
    project.style.display = 'none';
    document.querySelector('#taskbar--project').style.display = 'none';

}
function buttonClickMinProject(){
    project.style.display = 'none';
    document.querySelector('#taskbar--project').style.display = 'flex'
    document.querySelector('#taskbar--project').style.height = '100%';
    boolProject = false;
}

//Desktop Icons
//Desktop About Icon
function buttonClickAbout(){
    terminal.style.display = 'block';
    document.querySelector('#taskbar--about').style.display = 'flex';
    document.querySelector('#taskbar--about').style.borderBottom = '2px solid snow';
    document.querySelector('#taskbar--about').style.height = '92%';
} 
//Desktop Contact Icon
function buttonClickContacts(){
    contact.style.display = 'block';
    document.querySelector('#taskbar--contact').style.display = 'flex';
    document.querySelector('#taskbar--contact').style.borderBottom = '2px solid snow';
    document.querySelector('#taskbar--contact').style.height = '92%';
}
//Desktop Project Icon
function buttonClickProjects(){
    project.style.display = 'block';
    document.querySelector('#taskbar--project').style.display = 'flex';
    document.querySelector('#taskbar--project').style.borderBottom = '2px solid snow';
    document.querySelector('#taskbar--project').style.height = '92%';
}
//Desktop Resume Icon
function buttonClickResume(){
    // window.open("url", "_blank"); add resume
}

//Taskbar
//Taskbar Start
let boolStart = true;
function buttonClickStart(){
    if(window.innerWidth <= 600){
        terminal.style.display = 'none';
        document.querySelector('#taskbar--about').style.display = 'none';
        contact.style.display = 'none';
        document.querySelector('#taskbar--contact').style.display = 'none';
        project.style.display = 'none';
        document.querySelector('#taskbar--project').style.display = 'none';
    } else {
    if(boolStart === false){
        boolStart = true;
        document.querySelector('#taskbar--search').style.display = 'flex';
        document.querySelector('#taskbar--start').style.borderRight = '2px solid snow';

    } else {
        boolStart = false;
        document.querySelector('#taskbar--search').style.display = 'none';
        document.querySelector('#taskbar--start').style.borderRight = '0px solid snow';
    }
    }
}
//Taskbar Search
const mySearch = document.querySelector('#taskbar--search--input');
function taskbarSearch(){
    let searchTerm = mySearch.value;
        switch(searchTerm){
            case "about":
                boolAbout = true;
                terminal.style.display = 'block';
                document.querySelector('#taskbar--about').style.display = 'flex';
                document.querySelector('#taskbar--about').style.borderBottom = '2px solid snow';
                document.querySelector('#taskbar--about').style.height = '92%';
                break;
            case "contact":
                boolContact = true;
                contact.style.display = 'block';
                document.querySelector('#taskbar--contact').style.display = 'flex'
                document.querySelector('#taskbar--contact').style.borderBottom = '2px solid snow';
                document.querySelector('#taskbar--contact').style.height = '92%';                
                break;
            case "projects":
                boolProject = true;
                project.style.display = 'block';
                document.querySelector('#taskbar--project').style.display = 'flex'
                document.querySelector('#taskbar--project').style.borderBottom = '2px solid snow';
                document.querySelector('#taskbar--project').style.height = '92%';                    
                break;
            case "github":
                boolGithub = false;
                document.querySelector('#taskbar--github').style.opacity = '100%';
                document.querySelector('#taskbar--github').style.borderBottom = '2px solid snow';
                document.querySelector('#taskbar--github').style.height = '92%';
                window.open("https://www.github.com/DanKaufmanDev", "_blank");                
                break;
            case "linkedin":
                boolLinkedin = false;
                document.querySelector('#taskbar--linkedin').style.opacity = '100%';
                document.querySelector('#taskbar--linkedin').style.borderBottom = '2px solid snow';
                document.querySelector('#taskbar--linkedin').style.height = '92%';
                window.open("https://www.linkedin.com", "_blank");                
                break;
            case "resume":
              //window.open("url", "_blank"); add resume
                break;
            case "close":
                boolAbout = false;
                terminal.style.display = 'none';
                document.querySelector('#taskbar--about').style.height = '100%';
                document.querySelector('#taskbar--about').style.display = 'none';

                boolContact = false;
                contact.style.display = 'none';
                document.querySelector('#taskbar--contact').style.height = '100%';
                document.querySelector('#taskbar--contact').style.display = 'none';

                boolProject = false;
                project.style.display = 'none';
                document.querySelector('#taskbar--project').style.height = '100%';
                document.querySelector('#taskbar--project').style.display = 'none';
                break;
        }
        mySearch.value="";
}
document.querySelector('#taskbar--search').addEventListener('keydown', (event) =>{
    if(event.keyCode === 13){
        taskbarSearch();
    }
});
//Taskbar About
let boolAbout = true;
function buttonClickAbouts(){
    if(boolAbout === false){
    boolAbout = true;
    terminal.style.display = 'block';
    document.querySelector('#taskbar--about').style.display = 'flex';
    document.querySelector('#taskbar--about').style.borderBottom = '2px solid snow';
    document.querySelector('#taskbar--about').style.height = '92%';
    } else {
    boolAbout = false;
    terminal.style.display = 'none';
    document.querySelector('#taskbar--about').style.height = '100%';
    }
}
//Taskbar Contact
let boolContact = true;
function buttonClickContact(){
    if(boolContact === false){
        boolContact = true;
        contact.style.display = 'block';
        document.querySelector('#taskbar--contact').style.display = 'flex'
        document.querySelector('#taskbar--contact').style.borderBottom = '2px solid snow';
        document.querySelector('#taskbar--contact').style.height = '92%';
    } else {
        boolContact = false;
        contact.style.display = 'none';
        document.querySelector('#taskbar--contact').style.height = '100%';
    }
}
//Taskbar Github
let boolGithub = true;
function buttonClickGithub(){
    if(boolGithub === false){
        boolGithub = true;
        document.querySelector('#taskbar--github').style.opacity = '75%';
        document.querySelector('#taskbar--github').style.height = '100%';
    } else {
        boolGithub = false;
        document.querySelector('#taskbar--github').style.opacity = '100%';
        document.querySelector('#taskbar--github').style.borderBottom = '2px solid snow';
        document.querySelector('#taskbar--github').style.height = '92%';
        window.open("https://www.github.com/DanKaufmanDev", "_blank");
    }
}
//Taskbar Linkedin
let boolLinkedin = true;
function buttonClickLinkedin(){
    if(boolLinkedin === false){
        boolLinkedin = true;
        document.querySelector('#taskbar--linkedin').style.opacity = '75%';
        document.querySelector('#taskbar--linkedin').style.height = '100%';
    } else {
        boolLinkedin = false;
        document.querySelector('#taskbar--linkedin').style.opacity = '100%';
        document.querySelector('#taskbar--linkedin').style.borderBottom = '2px solid snow';
        document.querySelector('#taskbar--linkedin').style.height = '92%';
        window.open("https://www.linkedin.com", "_blank");
    }
}
//Taskbar Project
let boolProject = true;
function buttonClickProject(){
    if(boolProject === false){
        boolProject = true;
        project.style.display = 'block';
        document.querySelector('#taskbar--project').style.display = 'flex'
        document.querySelector('#taskbar--project').style.borderBottom = '2px solid snow';
        document.querySelector('#taskbar--project').style.height = '92%';    
    } else {
        boolProject = false;
        project.style.display = 'none';
        document.querySelector('#taskbar--project').style.height = '100%';
    }
}
//Taskbar Settings
let bool = false;
function buttonClickSettings(){
    if (bool === false) {
    bool = true;
    settings.style.transform = 'translateX(75vw)';
    document.querySelector('#taskbar--settings').style.borderLeft = '2px solid snow';
    document.querySelector('#terminal__wrapper').style.zIndex = '-1';
    document.querySelector('#contact__wrapper').style.zIndex = '-1'
    document.querySelector('#project__wrapper').style.zIndex = '-1';
    } else {
    bool = false;
    settings.style.transform = 'translateX(100vw)';
    document.querySelector('#taskbar--settings').style.borderLeft = 'none';
    document.querySelector('#terminal__wrapper').style.zIndex = 'auto';
    document.querySelector('#contact__wrapper').style.zIndex = 'auto';
    document.querySelector('#project__wrapper').style.zIndex = 'auto';
    } 
}
document.querySelector('#taskbar--settings').addEventListener('keydown', (event) =>{
    if(event.keyCode === 27){
        bool = false;
        settings.style.transform = 'translateX(100vw';
        document.querySelector('#taskbar--settings').style.borderLeft = 'none';
    }
})

//Themes
//Triangles
function buttonClickTriangle(){
    document.body.style.background = 'url(../src/background/triangles.svg)';
    window.localStorage.setItem('bg', 'url(../src/background/triangles.svg)');
    document.body.style.backgroundSize = 'cover';
    window.localStorage.setItem('bgSize', 'cover');
    document.body.style.backgroundRepeat = 'no-repeat';
    window.localStorage.setItem('bgRepeat', 'no-repeat');
}
//Swirl
function buttonClickSwirl(){
    document.body.style.background = 'url(../src/background/swirl.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    window.localStorage.setItem('bg', 'url(../src/background/swirl.jpg)');
}
//Cube
function buttonClickCube(){
    document.body.style.background = 'url(../src/background/cube.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    window.localStorage.setItem('bg', 'url(../src/background/cube.jpg)');
}
//wave
function buttonClickWave(){
    document.body.style.background = 'url(../src/background/wave.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    window.localStorage.setItem('bg', 'url(../src/background/wave.jpg)');
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
        window.localStorage.setItem('taskbar', 'rgba(' + red + ',' + green + ',' + blue + ',' +  '0.85' + ')');
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