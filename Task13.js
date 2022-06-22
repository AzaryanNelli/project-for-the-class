" use strict ";

//function declaration

 function country(number1) {
	console.log(`Our country has an ancient ${number1}
   `);
	} 
 country("history.");
	
	
 function lessen(number2) {
	 console.log(`This lessen is ${number2}
   `);
	} 
 lessen("easy."); 

 
 function x(number3,number4){
    console.log(` 
    The weather is ${number3} today. 
    It is  ${number4} outside.
	`); 
    } 
 x("good", "summer");
  

 function   science(number5 ,number6,number7){
	console.log(`
	${number5} created the green color of the dollar.
	${number6} was the first plastic surgeon.
	${number7} the creator of color television.
	`);
     }
  science("Khachatur Serobyan","Varazdat Kalanjyan","Hovhannes Abgaryan");


 function   science(number8,number9,number10){
	console.log(`
    ${number8} cultural figure.
	${number9}  cultural figure.
	${number10} cultural figure.
	`);
     }
 science("Misak Aramyan","Vrtanes Papazyan","Shahen Mkrtchyan");


//function expression

 const  option1 = function (a,b){
	return a + b;
    };
 console.log(option1(26,7));

 const  option2 = function (c,b){
    return c - b;
    };
 console.log(option2(56,34));

 const option3 = function (e,f,g,h,i,g){
    return e / f;
    return g / h;
    return i / g;
    };
 console.log(option3(186,3));
 console.log(option3(72,6));
 console.log(option3(483,7));

 const option4 = function (k,l,m,n,o,p){
    return k * l - k ;
    return m * n + l;
    return o * p * n ;
    };
 console.log(option4(54,65));
 console.log(option4(72,76));
 console.log(option4(83,23));

 const option5 = function (q,r,s,t,u,v,w,x){
    return q + r;
    return s - t;
	return u / v;
	return w * x;
	};
 console.log(option5(54,23));
 console.log(option5(84,48));
 console.log(option5(864,24));
 console.log(option5(37,29));
 

 // arrow function  

 const a = (name1, name2, name3) => {
    return name1 +  name2 * name3; 
	}; 
 console.log(a(23,54,11));

 const b = (lesson1, lesson2, lessen3) =>{
    console.log(lesson1 + lesson2 * lessen3);
    };
    b(43,54,54);
	b(73,346,53);
	b(54,23,82);
	b(76,90,85);
	
 const c = (lesson4, lesson5,lesson6 ) =>{
	return lesson4 + lesson5 - lesson6 ;
	};
	console.log(c(43,54,4));
	console.log(c(73,346,54));
	console.log(c(76,90,83));
	
 const d = (lesson7 => lesson7 * 42 - 86 / 2);
		
    console.log(d(4,84,63));
	console.log(d(8,28,84));
	console.log(d(2,63,863));

 const e = () => 524 + 42 -54 / 68 * 34;
	console.log(e());

///////////

 function mig(){
	data();
	console.log("My name is Nelli");
    }
 function data(){
	console.log("My last name is Azaryan ");
    }
    mig();



 function test (b){
    if (34 > 23){
	return b + b;
    console.log(c);
	}
	if (45 === 45){
	return b * b;
    console.log(a);
	}
	return b - b;
    console.log(c);
    }
 console.log(test (23));
    if (34 > 23) {
	return "Task13";
 console.log (test);
    }



	

	
