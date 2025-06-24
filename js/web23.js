// let start = new Date('2025-06-01');
// let now = new Date();

// let pass_day = now.getTime()-start.getTime();
// pass_day = Math.round(pass_day/1000/60/60/24);
// console.log(pass_day);

// document.getElementById('day').innerText = pass_day;

// let people = prompt('응모자 수를 입력하세요.');
// let win = Math.floor(Math.random() * people + 1);

// document.getElementById('peopleText').innerText =people;


const b_left = window.screenX;
const b_top = window.screenY;

const p_left = b_left + 100;
const p_top = b_top + 100;

function win() {
    let winni = window.open("popup.html", "popup", "width=300, height=200, left=" + p_left + ", top=" + p_top);
    if (winni == null) {
        alert("팝업이 차단되어 있습니다. 팝업을 허용해주세요.");
    }
}
