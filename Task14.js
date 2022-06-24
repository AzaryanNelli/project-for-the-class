"use stricte";
 
/// Nested  loop
 
 for ( let g = 12; g <= 28; g++) {
  while (g <= 28) ;
    console.log(g);
    
 for ( let h = 11; h <= 29; h++) { 
  while ( h <= 23);
    console.log(h);

 for ( let s = 23; s >= 20; s--) { 
  while ( s >= 4);
    console.log(n);
   }
  } 
 }

 for ( let c = 32; c <= 45; c++) {
  while (c <= 45) ;
    console.log(c);

 for ( let m = 0; m <= 40; m++) { 
  while ( m >= 55);
   console.log(m);

 for ( let p = 30; p >= 21; p--) { 
   while ( p <= 40);
   console.log(p);
   }
  }
 }

 for ( let f = 11; f <= 22; f++) {
  while (f <= 22);
   console.log(f);

 for ( let v = 34; v <= 88; v++) { 
  while ( v <= 88);
   console.log(v);

 for ( let z = 54; z >= 33; z--) { 
  while (z <= 66);
   console.log(z);
   }
  }
 }

  ///Calculator
  
 const  calculator  =  (num1, num2,operation ) => {
    switch(operation){
  case "+": 
    return  num1 + num2;
  case "-":
    return num1 - num2;
  case "/": 
    return  num1 / num2;
  case "*": 
    return num1 * num2;
  case "%":
    return num1 % num2;}};

  console.log(calculator(74, 32,"+"));
  console.log(calculator(56,23, "-"));
  console.log(calculator(864,24, "/"));
  console.log(calculator(43,67, "*")); 
  console.log(calculator(543,11, "%"));
     
     
 ///Չեմ կարողացել     
     
 let result = "";
  for (let i = 1; i <= 7; i++) {
  for (let j = 7; j > i; j--) {
    result += " ";
 }
  for(let j = 0; j < i; j++){
    result +=" "+"*";
    }
    result += "\n";
 }
 console.log(result);



