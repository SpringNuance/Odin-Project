let result = "0";
let onoff = 1;
let first = "";
let second = "";
let operator = "";
let ans = "";
let onoffR = 0;

function process(char){
    switch(char) {
        case 'c':
            result = "0"
            onoff = 1
            first = ""
            second = ""
            operator = ""
            ans = ""
        break;
        
        case 'a':
            if (onoff === 1){
                first = ans;
            } else second = ans; 
        break;

        case 'd':
            if (second){
                second = second.slice(0,-1);
            } else {
                if (isMath(first.slice(0,-1))) {
                    onoff = 1;
                    first = first.slice(0,-1)
                } else  first = first.slice(0,-1)
            }
                 
        break;

        case '.':
            if (onoff == 1){
                if (first){
                    first += '.'
                } else first += '0.'
            } else {
                if (second){
                    second += '.'
                } else second += '0.'
            }
        break;        

        case 'pm':
            if (onoff == 1){
                if (first){
                    first += '-'
                } else first = '-' + first;
            } else {
                if (second){
                    second += '.'
                } else second = '-' + second
            }
        break;

        case 'π':
            if (onoff === 1){
                first = "3.14159";
            } else second = "3.14159"; 
        
        break;

        case '=':
            First = Number(first.slice(0,-1));
            second = Number(second);
            switch (operator){
                
                case '+':
                    result = First + second;
                break;
                case '-':
                    result = First - second;
                break;
                case '*':
                    result = First * second;
                break;
                case '/':
                    result = First / second;
                    if (second === 0) result = "Math Error";
                break;
                case '^':
                    result = Math.pow(First,second);
                break;
                case '√':
                    result = Math.pow(First,1/second);
                break;
                case '%':
                    result = First % second;
                break;
                case '!':
                    result = factorial(First);
                break;
                 
            }
            if (result === "Math Error"){
               onoff = 1;
            } else if (isNaN(result)) {
                onoff = 1;
                result = "Syntax Error"; 
            } else {
                ans = result;
                onoff = 1;
            }
           
        break;

        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '√':
        case '%':
        case '!':
            operator = char;
            first += char;
            onoff = 2;
        break;

        default:
            if (onoff === 1){
                if (first.length < 21){
                    first += char;
                }
            } else {
                if (second.length < 21){
                    second += char;
                }
            }
            
        break;        
      }
    
    document.querySelector("#first").innerHTML = first;
    document.querySelector("#second").innerHTML = second;
    document.querySelector("#result").innerHTML = result;

}

function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++){
        product *= i;
    }
    return product;
}

function isMath(char){
    if (char === '+' || char === '-' || char === '*' || char === '/' || char === '^' || char === '√' || char === '!' || char === '%')
    return true;
    else return false;
}