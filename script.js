
  const screenDisplay = document.getElementById('screen-display');
  const screenResults = document.getElementById('screen-display2');
  const allClear = document.getElementById('item1');
  const Clear = document.getElementById('item2');
  const modulosOperator = document.getElementById('item3');
  const divisionOperator = document.getElementById('item4');
  const theNumber7 = document.getElementById('item5');
  const theNumber8 = document.getElementById('item6');
  const theNumber9 = document.getElementById('item7');
  const additionOperator = document.getElementById('item8');
  const theNumber4 = document.getElementById('item9');
  const theNumber5 = document.getElementById('item10');
  const theNumber6 = document.getElementById('item11');
  const subtractionOperator = document.getElementById('item12');
  const theNumber1 = document.getElementById('item13');
  const theNumber2 = document.getElementById('item14');
  const theNumber3 = document.getElementById('item15');
  const multiplicationOperator = document.getElementById('item16');
  const theNumber0 = document.getElementById('item17');
  const pointOperator = document.getElementById('item18');
  const equalityOperator = document.getElementById('item19');

  let displayValue = 0;
  screenDisplay.textContent = 0;

 function click(number){
  if (click1()){
    number = click1()
  } else if ( click2()){
    number = click2();
  }else if ( click3() ){
    number = click3();
  } else if ( click4() ){
    number = click4();
  } else if ( click5() ){
    number = click5();
  } else if( click6() ){
    number = click6();
  } else if ( click7() ){
    number = click7();
  } else if( click8()){
    number = click8()
  } else if ( click9() ){
    number = click9()
  } else if ( click0() ){
    number = click0();
  }
 };

 function click1(){
  theNumber1.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 1;
        screenResults.textContent = '';
        screenDisplay.textContent= displayValue;
      } else{
        screenResults.textContent = '';
        screenDisplay.textContent += 1;
      }
    }
  });
 };


 function click2(event){
  theNumber2.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 2;
        screenResults.textContent = '';
        screenDisplay.textContent = displayValue;
      } else {
        screenResults.textContent = '';
        screenDisplay.textContent += 2;
      }}
  })
 };

 function click3(){
  theNumber3.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 3;
        screenResults.textContent = '';
        screenDisplay.textContent = displayValue;
      } else {
         screenResults.textContent = '';
         screenDisplay.textContent += 3;
      }}
  })
 };
 function click4(){
  theNumber4.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 4;
        screenResults.textContent = '';
        screenDisplay.textContent = displayValue;
      } else {
        screenResults.textContent = '';
        screenDisplay.textContent += 4;
      }}
  })
 };
 function click5(){
  theNumber5.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 5
        screenResults.textContent = '';
        screenDisplay.textContent = displayValue;
      } else {
        screenResults.textContent = '';
        screenDisplay.textContent += 5;
      }
    }
  })
 };
 function click6(){
  theNumber6.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 6
        screenResults.textContent = '';
        screenDisplay.textContent = displayValue;
      } else {
        screenResults.textContent = '';
        screenDisplay.textContent += 6;
      }}
  })
 };
 function click7(){
  theNumber7.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 7;
        screenResults.textContent = '';
        screenDisplay.textContent = displayValue;
      } else {
        screenResults.textContent = '';
        screenDisplay.textContent += 7;
      }}
  })
 };
 function click8(){
  theNumber8.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 8;
        screenResults.textContent = '';
        screenDisplay.textContent = displayValue;
      } else {
        screenResults.textContent = '';
        screenDisplay.textContent += 8;
      }}
  })
 };
 function click9(){
  theNumber9.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 9;
        screenResults.textContent = '';
        screenDisplay.textContent = 9;
      } else {
        screenResults.textContent = '';
        screenDisplay.textContent += 9;
      }}
  })
 };
 function click0(){
  theNumber0.addEventListener('click', function(event){
    if(event.target){
      if(displayValue === 0){
        displayValue = 0;
        screenResults.textContent = '';
        screenDisplay.textContent = displayValue;
      } else {
        screenResults.textContent = '';
        screenDisplay.textContent += 0;
      }}
  })
 };

 click();

function addition(a, b){
   return a + b;
};

function subraction(a, b){
  return a - b;
};

function multiplication(a, b){
  return a * b
};

function division(a, b){
  return a / b;
};

function modulos(a, b){
  return a % b;
}


 let results1 = '';
 let operator = '';
 let results2 = '';

 function operate(operator){
     let results;
  if(operator === '+'){
    results = addition(results1, results2)
  } else if( operator === '-'){
    results = subraction(results1, results2)
  } else if(operator === '*'){
    results = multiplication(results1, results2)
  } else if(operator === '/'){
    results = division(results1, results2)
  } else if(operator === '%'){
    results = modulos(results1, results2)
  }
  return results;
 }
 

additionOperator.addEventListener('click', function(event){
  if(results1 === Number(screenResults.textContent)){
    operator = '+'
    results1 = Number(screenResults.textContent);
  }else if(equalClicked === true && screenDisplay.textContent === ''){
    operator = '+';
    results1 = Number(screenResults.textContent);
  }else if(screenResults.textContent !== ''){
    operator = '+'
    screenResults.textContent = `${results1} +`;
  } else{
    operator = '+'
    results1 = Number(screenDisplay.textContent);
    screenResults.textContent = `${results1} +`;
    screenDisplay.textContent = '';
  }
})

subtractionOperator.addEventListener('click', function(){
  if(results1 === Number(screenResults.textContent)){
    operator = '-'
    results1 = Number(screenResults.textContent);
    console.log(`second results ${results1}`)
  }else if(equalClicked === true && screenDisplay.textContent === ''){
    operator = '-';
    results1 = Number(screenResults.textContent);
  }else if(screenResults.textContent !== ''){
    operator = '-'
    screenResults.textContent = `${results1} -`;
  }else{
    operator = '-'
    results1 = Number(screenDisplay.textContent);
    screenResults.textContent = `${results1} -`;
    screenDisplay.textContent = '';
  }
})

multiplicationOperator.addEventListener('click', function(){
  if(results1 === Number(screenResults.textContent)){
    operator = '*'
    results1 = Number(screenResults.textContent);
  }else if(equalClicked === true && screenDisplay.textContent === ''){
    operator = '*';
    results1 = Number(screenResults.textContent);
  }else if(screenResults.textContent !== ''){
    operator = '*'
    screenResults.textContent = `${results1} *`;
  }else{
    operator = '*'
    results1 = Number(screenDisplay.textContent);
    screenResults.textContent = `${results1} *`;
    screenDisplay.textContent = '';
  }
})

divisionOperator.addEventListener('click', function(){
  if(results1 === Number(screenResults.textContent)){
    operator = '/'
    results1 = Number(screenResults.textContent);
  }else if(equalClicked === true && screenDisplay.textContent === ''){
    operator = '/';
    results1 = Number(screenResults.textContent);
  }else if(screenResults.textContent !== ''){
    operator = '/'
    screenResults.textContent = `${results1} /`;
  }else{
    operator = '/'
    results1 = Number(screenDisplay.textContent);
    screenResults.textContent = `${results1} /`;
    screenDisplay.textContent = '';
  }
})

modulosOperator.addEventListener('click', function(){
  if(results1 === Number(screenResults.textContent)){
    operator = '%'
    results1 = Number(screenResults.textContent);
  }else if(equalClicked === true && screenDisplay.textContent === ''){
    operator = '%';
    results1 = Number(screenResults.textContent);
  }else if(screenResults.textContent !== ''){
    operator = '%'
    screenResults.textContent = `${results1} %`;
  }else{
    operator = '%'
    results1 = Number(screenDisplay.textContent);
    screenResults.textContent = `${results1} %`;
    screenDisplay.textContent = '';
  }
})

let equalClicked = false;

equalityOperator.addEventListener('click', function(){

  screenResults.textContent = ''
  if(screenDisplay.textContent === ''){
    results2 = Number(results1);
    screenResults.textContent = operate(operator);
    screenDisplay.textContent = '';
    results1 = ''
    equalClicked = true;
  } else if(operator === ''){
    screenDisplay.textContent = screenDisplay.textContent;
  } else {
    results2 = Number(screenDisplay.textContent)
    screenResults.textContent = operate(operator);
    screenDisplay.textContent = '';
    results1 = ''
    equalClicked = true;
  }
})

allClear.addEventListener('click', function(){
  screenDisplay.textContent = '';
  screenResults.textContent = 0;
  displayValue = 0;
  equalClicked = false
  results1 = '';
})

pointOperator.addEventListener('click', function(event){

  if(event.target){
    if(results1 !== '' && screenDisplay.textContent.includes('.') === false && screenDisplay.textContent === ''){
      screenResults.textContent = '';
      screenDisplay.textContent = '0.';
    } else if(displayValue === 0 && screenDisplay.textContent.includes('.') === false){
      displayValue = '.';
      screenResults.textContent = '';
      screenDisplay.textContent = '0.';
    } else if(screenDisplay.textContent.includes('.') === false && screenDisplay.textContent !== ''){
      screenResults.textContent = '';
      screenDisplay.textContent += '.';
    }} else if(screenDisplay.textContent.includes('.') === false){
      screenResults.textContent = '';
      screenDisplay.textContent += '0.';
    } else{return screenDisplay.textContent};
})

Clear.addEventListener('click', function(){
  let sliced;
  let sliced1;
  if(screenResults.textContent !== ''){
      sliced1 = screenResults.textContent.slice(0, -1)
      screenResults.textContent = sliced1;
  }else{
      sliced = screenDisplay.textContent.slice(0,-1);
      screenDisplay.textContent = sliced;
  }
})