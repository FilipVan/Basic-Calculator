var sum = 0;
var currentValue = 0;
var currentOperator = "";
var display = document.querySelector("#display");
var numbers = document.querySelectorAll(".number")
var operators = document.querySelectorAll(".operator");
var restart = document.getElementById("restart")
var isOperatorClicked = false;
var isFirstInputEver = true;
var operator;
var result;


for(var i = 0; i<numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        debugger;
         if(isOperatorClicked){
             display.value = "";
             isOperatorClicked = false;        
         }
            display.value += this.innerHTML;
            currentValue = parseFloat(display.value);
    });
}


for(var i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(){
         isOperatorClicked = true;        
        switch(this.innerHTML){
            case "+": 
            debugger;
                operator = this.innerHTML;
                display.value = operator;
                sum += currentValue;
                break;
            case "-":
            debugger;
                operator = this.innerHTML;
                display.value = operator;
                sum += currentValue;              
                break;
            case "*": 
            debugger;
                operator = this.innerHTML;                
                if(isFirstInputEver){
                    sum = currentValue;
                    isFirstInputEver = false;
                } else {
                    currentValue = result;    
                }
                display.value = sum;
                break;
            case "/":
                operator = this.innerHTML;                
                if(isFirstInputEver){
                    sum = currentValue;
                    isFirstInputEver = false;
                } else {
                    currentValue = result;    
                } 
                display.value = sum;
                break;
            case "=":
            debugger;
                if(operator === "+"){
                    sum += currentValue;
                    display.value = sum;
                    isFirstInputEver = false;
                    currentValue = 0;
                    break;
                }
                else if(operator === "-"){
                debugger;
                    sum = sum - currentValue;
                    display.value = sum;
                    isFirstInputEver = false;
                    currentValue = 0;
                    break;
                }
            else if (operator === "*"){
                    result = currentValue;
                    sum *= result;    
                    display.value = sum;
                    currentValue = null;
                    break;
            }
            else if (operator === "/"){
                    result = currentValue;
                    sum /= result;    
                    display.value = Math.round(sum * 100) / 100;
                    currentValue = null;
                    break;
            }
        }
    });
}

restart.addEventListener("click", function(){
 sum = 0;
 currentValue = 0;
 currentOperator ="";
 isOperatorClicked = false;
 isFirstInputEver = true;
 display.value = "";
})



