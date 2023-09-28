// Your code here
const dodger = document.getElementById('dodger');

dodger.style.background = '#FF69B4'; 

//moving element up

dodger.style.bottom = '100px';

//wrapping it all together(abit complex function)
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft'){
        const leftNumbers = dodger.style.left.replace('px','');
        const left = parseInt(leftNumbers, 10);

        dodger.style.left = '${left-1}px'
    }
})

//breaking it down

function moveDodgerLeft(){
    const leftNumbers = dodger.style.replace('px', '');
    const left = parseInt(leftNumbers, 10)

    if(left > 0){
        dodger.style.left = '${left - 1}px'
    }
}

document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }
})
//Right
function moveDodgerRight(){
    const leftNumbers = dodger.style.replace('px', '');
    const left = parseInt(leftNumbers, 10)

    if(left <= 0){
        dodger.style.left = '${left + 1}px'
        document.addEventListener('keydown', function(e){
            if(e.key === 'ArrowRight' && left <= 10){
                moveDodgerRight();
            }
        });
    }
}

moveDodgerRight();
