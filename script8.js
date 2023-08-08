

let f = +prompt('witch month?')
 let season

 if (f <= 2) {
   season = 'winter'
 } else if (f <= 5) {
   season = 'spring'
 } else if (f <= 8) {
       season = 'summer'
 } else if (f <= 11) {
   season = 'autumn'
 } else if(f <= 12) {
   season = 'winter'
}
alert(season )

let Number1 = +prompt("Введите первое число:");
if (isNaN(Number1)) {
  while (isNaN(Number1)) {
    Number1 = +9("Пожалуйста, введите правильное число!");
  }
}

let znak = prompt("Введите знак: ");
let plus = "+";
let minus = "-";
let umnojenie= "*";
let delenie = "/";

let Number2 = +prompt("Введите второе число:");

if (znak === plus) {
  alert(Number1 + Number2);
} else if (znak === minus) {
  alert(Number1 - Number2);
} else if (znak === umnojenie) {
  alert(Number1 * Number2);
} else if (znak === delenie) {

  } else {
    alert(Number1 / Number1);
  } 


let schet = prompt("Введите число:");

if (schet === null || schet.trim() === "" || isNaN(schet)) {
  alert("Пожалуйста, введите  число.");
} else {
  schet = +schet; 
  if (schet % 2 === 0) {
    alert("Число " + schet + " четное");
  } else {
    alert("Число " + schet + " нечетное");
  }
}
let a = prompt('напишите свое имя')

if(a.length % 2 === 0) {
  alert('Ваше имя четное')
} else {
  alert('Ваше имя не четное')

}
