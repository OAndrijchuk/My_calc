let input = document.getElementById('input');
const arr = document.getElementsByTagName('button');
let inputArrAll = [];
let arrLastEl = 0;
const reg = /[A-Za-zА-Яа-я]/g

function bacSpace () {
    inputArrAll.splice(-1 , 1);
    input.value = inputArrAll.join('');
}

function validation () {
    let inputArr = input.value.split('');
    inputArrAll = inputArr;
    arrLastEl = inputArr.length - 1;
    if (inputArrAll[arrLastEl] == '-'||inputArrAll[arrLastEl] =='+'||inputArrAll[arrLastEl] =='*'||inputArrAll[arrLastEl] =='/'||inputArrAll[arrLastEl] =='%' ){
        if(inputArrAll[arrLastEl-1] == '-'||inputArrAll[arrLastEl-1] =='+'||inputArrAll[arrLastEl-1] =='*'||inputArrAll[arrLastEl-1] =='/'||inputArrAll[arrLastEl-1] =='%' ){
            bacSpace();
        }
    }
}

input.oninput = function(){
    this.value = this.value.replace(reg , '');
}
    
input.onfocus = validation;
input.addEventListener('input', validation)

let numb = 0;
    for (let i=0;i<arr.length;i++){
        
        arr[i].addEventListener( 'click', () => {
                
        if(arr[i].textContent==='CE'){
            input.value = '';
        }else if(arr[i].textContent==='C'){
            bacSpace();
        }else if(arr[i].textContent==='%'){
            numb = eval(input.value);
            input.value = '';
        }else if(arr[i].textContent==='='){
            if(numb != 0){
                input.value = (numb/100)*Number(input.value)
            }else{
                input.value = eval(input.value);
            }
        }else{
            input.value += arr[i].textContent;
    }
    input.focus(); 
})
}










