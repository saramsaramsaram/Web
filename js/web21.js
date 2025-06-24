// let heading = document.getElementById('heading');
// heading.onclick = function() {
//         heading.style.color = 'green';
// }

// alert("안녕하시긔");
// confirm("안녕하시긔?");
// prompt("안녕하시긔??", "안녕하시긔??")

// let width;
// let height
// width=200;
// height=50;
// let area = width * height
// console.log(area)

// const Pl = 3.14;
// let radius = prompt("반지름")
// let area = Pl * radius * radius;

// console.log(area)


// let userrNum = prompt("숫자를 입력하세요");

// if (userrNum != null) {
//     if (userrNum % 3 == 0) {
//         console.log("3의 배수입니다.");
//     } else {
//         console.log("3의 배수가 아닙니다.");
//     }
// } else {
//     console.log("입력값이 없습니다.");
// }

// let subj1 = prompt("과목1 점수");

// let subj2 = prompt("과목2 점수");
// let subj3 = prompt("과목3 점수");

// (subj1 + subj2 + subj3 >= 180 && subj1 >= 40 && subj2 >= 40 && subj3 >= 40)? console.log("합격입니다.") : console.log("불합격입니다.");

// let session = prompt("세션을 입력하세요");

// switch (session) {
//     case "1":
//         document.writeln("1세션입니다.");
//         break;
//     case "2":
//         document.writeln("2세션입니다.");
//         break;
//     case "3":
//         document.writeln("3세션입니다.");
//         break;
//     default:
//         document.writeln("세션이 없습니다.");
// }

// for (i = 2; i <= 9;i++) {
//     for (j = 1; j <= 9; j++) {
//         document.writeln(i + " * " + j + " = " + (i * j) + "<br>");
//     }
// }

// let stars = prompt("별의 개수를 입력하세요");
// while (stars > 0) {
//     document.writeln("*");
//     stars--;
// }

// let n = prompt("숫자를 입력하세요");
// let cnt = 0;
// while (n > 0) {
//     if (n % 3 == 0) {
//         document.writeln(n);
//         cnt++;
//     }
//     n--;

// }
// document.writeln("<br>" + "3의 배수의 개수: " + cnt);

// function add() {
//     let num1 =2;
//     let num2 = 3;
//     console.log(num1 + num2);
// }

// add();
// add();

// var sum = 0;
// function add() {
//     sum = 10 + 20;
//     result = 10 * 20;
// }

// add()
// console.log("덧셈 결과: " + sum);
// console.log("곱셈 결과: " + result);

// function multiple(a,b=5,c=10) {
//     return a * b + c;
// }

// console.log(multiple(5,10,20));
// console.log(multiple(10,20));
// console.log(multiple(30)); // 20

// let sum = function(a, b) {
//     return a + b;
// }
// let result = sum(10, 20);
// console.log("덧셈 결과: " + result);

(function() {
    let userrName = prompt("이름을 입력하세요");
    console.log("안녕하세요, " + userrName + "님!");
}());

(function(a,b) {
    sum = a+b;
})(10, 20);
console.log("덧셈 결과: " + sum);