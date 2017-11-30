var operand1;
var operand2;
var position = 0;
var x, x1, x2, result;
function addition(x1, x2){
  return x1+x2;
}
function subtraction(x1, x2){
  return x1-x2;
}
function multiplication(x1, x2){
  return x1*x2;
}
function division(x1, x2){
  return x1/x2;
}
function remainder(x1, x2){
  return x1%x2;
}
function factorial(x, result = 1) {
  if (x == 1){ 
  return result; 
}  else{ 
  return factorial(x - 1, x * result);
  }
}

function calc(){
  var str = document.getElementById("question").value;

  for (var i = 0; i <= str.length; i++){
    if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/' || str[i] == '%' || str[i] == '^' || str[i] == '!'){
      position = i;
  }
}
  var operand = str.substring(0, position);
  operand1 = parseInt(operand);
  
  operand = str.substring(position +=1, str.length);
  operand2 = parseInt(operand);
  
  for (i = 0; i <= str.length; i++){
    if(str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/' || str[i] == '%' || str[i] == '^' || str[i] == '!'){
      var operation = str[i];
  }
    }
   switch (operation){
      
    case '+':
    document.getElementById("answer").innerHTML = "Result = " + addition(operand1,operand2);
    break;
    
    case '-':
    document.getElementById("answer").innerHTML = "Result = " + subtraction(operand1,operand2);
    break;

    case '*':
    document.getElementById("answer").innerHTML = "Result = " + multiplication(operand1,operand2);
    break;
    
    case '/':
    document.getElementById("answer").innerHTML = "Result = " + division(operand1,operand2);
    break;

    case '%':
    document.getElementById("answer").innerHTML = "Result = " + remainder(operand1,operand2);
    break;

    case '!':
    document.getElementById("answer").innerHTML = "Result = " + factorial(operand1);
    break;
    
    default:
      "Invalid operation";
    }
    console.log(operand1 + " " + operation + " " + operand2);
}

