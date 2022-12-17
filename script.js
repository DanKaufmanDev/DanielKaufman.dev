const bool = false

function buttonClickExit(bool){
        if(!bool === true){
            console.log('close')
            document.querySelector('#terminal').style.opacity = '0';
        }
    }

function buttonClickMin(bool){
        if(!bool === true){
            console.log('Minimize')
            const element = document.querySelector('#terminal')
            element.style.width = '70vw'
            element.style.height = '65vh'
        }
}

function buttonClickMax(bool){
    if(!bool === true){
        console.log('Maximize')
       const element = document.querySelector('#terminal')
       element.style.width = '100vw'
       element.style.height = '100vh'
    }
}

function iconMinesweeper(bool){
    if(!bool === true){
        console.log('Minesweeper')
       
    }
}
