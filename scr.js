let a = document.getElementById('f');
let b = document.getElementById('s');

function sub() {
    let d = parseFloat(a.value);
    let e = parseFloat(b.value);
    let c = d - e;
    document.getElementById('ans').innerHTML = 'Answer = ' + c;
}
function add() {
    let d = parseFloat(a.value);
    let e = parseFloat(b.value);
    let c = d + e; 
    document.getElementById('ans').innerHTML = 'Answer = ' + c;
}
function div() {
    let d = parseFloat(a.value);
    let e = parseFloat(b.value);
    let c = d / e;
    document.getElementById('ans').innerHTML = 'Answer = ' + c;
}
function mul() {
    let d = parseFloat(a.value);
    let e = parseFloat(b.value);
    let c = d * e;
    document.getElementById('ans').innerHTML = 'Answer = ' + c;
}

document.getElementById('sub').addEventListener('click', sub);
document.getElementById('add').addEventListener('click', add);
document.getElementById('mul').addEventListener('click', mul);
document.getElementById('div').addEventListener('click', div);
