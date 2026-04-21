function val(id, fallback = 0) {
    const v = parseFloat(document.getElementById(id).value);
    return isNaN(v) ? fallback : v;
}

// fungsi u(x,y)
function u(x, y) {
    return x*x + y*y;
}

// turunan kedua (analitik)
function uxx(x, y) {
    return 2;
}

function uyy(x, y) {
    return 2;
}

function uxy(x, y) {
    return 0;
}

function runPDE() {

    const x = val("px");
    const y = val("py");

    let output = "";

    const valU = u(x,y);
    const valUxx = uxx(x,y);
    const valUyy = uyy(x,y);
    const valUxy = uxy(x,y);

    output += `Input: x=${x}, y=${y}\n\n`;

    output += `u(x,y) = ${valU}\n`;
    output += `u_xx = ${valUxx}\n`;
    output += `u_yy = ${valUyy}\n`;
    output += `u_xy = ${valUxy}\n\n`;

    // PDP Laplace
    const laplace = valUxx + valUyy;

    output += `Laplace: u_xx + u_yy = ${laplace}\n`;

    if (laplace === 0) {
        output += "✅ Memenuhi PDP (Laplace)";
    } else {
        output += "❌ Tidak memenuhi PDP";
    }

    document.getElementById("pde-output").textContent = output;
}