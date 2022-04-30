var i = true;
function click1() {
    if (i == true) {
    document.getElementById('button-1').style.backgroundColor = "#fc7613";
    i = false;
    } else {
        document.getElementById('button-1').style.backgroundColor = "#30393f";
        i =true;
    }
}

var o = true;
function click2() {
    if (o == true) {
    document.getElementById('button-2').style.backgroundColor = "#fc7613";
    o = false;
    } else {
        document.getElementById('button-2').style.backgroundColor = "#30393f";
        o =true;
    }
}

var p = true;
function click3() {
    if (p == true) {
    document.getElementById('button-3').style.backgroundColor = "#fc7613";
    p = false;
    } else {
        document.getElementById('button-3').style.backgroundColor = "#30393f";
        p =true;
    }
}

var q = true;
function click4() {
    if (q == true) {
    document.getElementById('button-4').style.backgroundColor = "#fc7613";
    q = false;
    } else {
        document.getElementById('button-4').style.backgroundColor = "#30393f";
        q =true;
    }
}

var r = true;
function click5() {
    if (r == true) {
    document.getElementById('button-5').style.backgroundColor = "#fc7613";
    r = false;
    } else {
        document.getElementById('button-5').style.backgroundColor = "#30393f";
        r =true;
    }
}

function clicked() {
    var get = 0;
    if (i == false) {
        get++;
    } 
    if (o == false) {
        get++;
    }
    if (p == false) {
        get++;
    }
    if (q == false) {
        get++;
    }
    if (r == false) {
        get++;
    }
    if (get == 0) {
        document.getElementById('hilang1').style.display = 'block';
    document.getElementById('tampil').style.display = "none";
    } else {
        document.getElementById('hilang1').style.display = 'none';
    document.getElementById('tampil').style.display = "block";
    };
    document.getElementById('score').innerHTML = get;
}