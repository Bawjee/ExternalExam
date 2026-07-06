function calculateBMI(){

let height=document.getElementById("height").value;
let weight=document.getElementById("weight").value;

height=height/100;

let bmi=weight/(height*height);

let status="";

if(bmi<16)
status="Severe Thinness";

else if(bmi<17)
status="Moderate Thinness";

else if(bmi<18.5)
status="Mild Thinness";

else if(bmi<25)
status="Normal";

else if(bmi<30)
status="Overweight";

else if(bmi<35)
status="Obese Class I";

else if(bmi<40)
status="Obese Class II";

else
status="Obese Class III";

document.getElementById("result").innerHTML=
"BMI = "+bmi.toFixed(2)+"<br>"+status;

}
