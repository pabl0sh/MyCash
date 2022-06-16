"use strict"

// Variables
const btn_one = document.querySelectorAll('.btn_one');
btn_one[0].value = 0.75;
btn_one[1].value = 1.04;
btn_one[2].value = 0.86;
btn_one[3].value = 1.58;
btn_one[4].value = 3.48;
btn_one[5].value = 2.06;
const btn_two = document.querySelectorAll('.btn_two');
btn_two[0].value = 0.2;
btn_two[1].value = 1;
btn_two[2].value = 1.67;
const number = document.getElementById('inp');
const button = document.getElementById('but');
const answ = document.querySelector('.answ');
const green = 'rgb(243, 39, 53)';
const grey = 'rgb(108, 117, 125)'
 
// Functions
function Color_One() {
    if (this.style.backgroundColor == green) {
        this.style.backgroundColor = grey;
        for (let l = 0; l <= 5; l++) {
            if (btn_one[l].style.backgroundColor != green) {
                btn_one[l].disabled = false;
            }
        }
    } else {
        this.style.backgroundColor = green;
        if (btn_one[4].style.backgroundColor == green) {
            btn_two[0].value = 0.5;
        }
        if (btn_one[5].style.backgroundColor == green) {
            btn_two[0].value = 0.4;
        }
        for (let k = 0; k <= 5; k++) {
            if (btn_one[k].style.backgroundColor != green) {
                btn_one[k].disabled = true;
            }
        }
    }
}

function Color_Two() {
    if (this.style.backgroundColor == green) {
        this.style.backgroundColor = grey; 
        for (let l = 0; l <= 2; l++) {
            if (btn_two[l].style.backgroundColor != green) {
                btn_two[l].disabled = false;
            }
        }
    } else {
        this.style.backgroundColor = green;
        for (let k = 0; k <= 2; k++) {
            if (btn_two[k].style.backgroundColor != green) {
                btn_two[k].disabled = true;
            }
        }
    }
}

function calc () {
    for (let k = 0; k <= 5; k++) {
        if (btn_one[k].style.backgroundColor == green) {
            for (let i = 0; i <= 2; i++) {
                if (btn_two[i].style.backgroundColor == green && number.value != '') {
                    answ.innerHTML = (((btn_one[k].value * btn_two[i].value * +number.value) / 100) * 1).toFixed(2);
                }
            }
        }
    }
}

//EventListener
for (let i = 0; i <= 5; i++) {
    btn_one[i].addEventListener('click', Color_One);
}
for (let i = 0; i <= 2; i++) {
    btn_two[i].addEventListener('click', Color_Two);
}
button.addEventListener('click', calc);
