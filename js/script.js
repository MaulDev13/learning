function val(id, fallback = 0) {
    const el = document.getElementById(id);
    if (!el) return fallback;

    const v = parseFloat(el.value);
    return isNaN(v) ? fallback : v;
}

function isDiagonallyDominant(A) {
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let j = 0; j < A.length; j++) {
            if (i !== j) sum += Math.abs(A[i][j]);
        }
        if (Math.abs(A[i][i]) <= sum) return false;
    }
    return true;
}

function runJacobiDynamic() {

    const A = [
        [val("a1"), val("b1"), val("c1")],
        [val("a2"), val("b2"), val("c2")],
        [val("a3"), val("b3"), val("c3")]
    ];

    const b = [val("d1"), val("d2"), val("d3")];

    let x = val("x0");
    let y = val("y0");
    let z = val("z0");

    const maxIter = val("maxIter", 10);
    const tolerance = val("tolerance", 0.001);

    let output = "";
    let errors = [];

    output += `Iterasi 0: x=${x}, y=${y}, z=${z}\n`;

    const isDD = isDiagonallyDominant(A);
    if (!isDD) {
        output += "\n[Warning] Matrix tidak diagonal dominan → hasil mungkin tidak konvergen\n\n";
    }

    for (let i = 1; i <= maxIter; i++) {

        const x_old = x;
        const y_old = y;
        const z_old = z;

        if (A[0][0] === 0 || A[1][1] === 0 || A[2][2] === 0) {
            output = "Error: diagonal tidak boleh 0";
            document.getElementById("jacobi-output").textContent = output;
            return;
        }

        x = (b[0] - (A[0][1]*y_old + A[0][2]*z_old)) / A[0][0];
        y = (b[1] - (A[1][0]*x_old + A[1][2]*z_old)) / A[1][1];
        z = (b[2] - (A[2][0]*x_old + A[2][1]*y_old)) / A[2][2];

        const error = Math.max(
            Math.abs(x - x_old),
            Math.abs(y - y_old),
            Math.abs(z - z_old)
        );

        errors.push(error);

        output += `Iterasi ${i}: x=${x.toFixed(6)}, y=${y.toFixed(6)}, z=${z.toFixed(6)} | error=${error.toExponential(3)}\n`;

        // 🔥 AUTO STOP
        if (error < tolerance) {
            output += `\n🛑 Berhenti di iterasi ${i} (toleransi tercapai)\n`;
            break;
        }
    }

    // KONKLUSI
    let conclusion = "";

    if (errors.length > 0) {
        const last = errors[errors.length - 1];

        if (!isFinite(last)) {
            conclusion = "❌ Gagal (overflow / NaN)";
        } else if (last < tolerance) {
            conclusion = "✅ Konvergen (toleransi tercapai)";
        } else if (errors.length >= 2 && last > errors[errors.length - 2]) {
            conclusion = "❌ Divergen";
        } else {
            conclusion = "⚠️ Belum konvergen (max iter tercapai)";
        }
    }

    output += `\n=== KONKLUSI ===\n${conclusion}`;

    document.getElementById("jacobi-output").textContent = output;
}

// Generate random system of equations that is guaranteed to be diagonally dominant
function rand(min, max) {
    return Math.random() * (max - min) + min;
}

function randInt(min, max) {
    return Math.floor(rand(min, max + 1));
}

function generateRow(prefix) {
    // random off-diagonal kecil
    const b = randInt(-5, 5);
    const c = randInt(-5, 5);

    // diagonal dibuat lebih besar (biar dominan)
    const margin = randInt(1, 5);
    const a = Math.abs(b) + Math.abs(c) + margin;

    // random sign biar ga selalu positif
    const aSigned = Math.random() > 0.5 ? a : -a;

    const d = randInt(-20, 20);

    document.getElementById(`a${prefix}`).value = aSigned;
    document.getElementById(`b${prefix}`).value = b;
    document.getElementById(`c${prefix}`).value = c;
    document.getElementById(`d${prefix}`).value = d;
}

function generateRandomSystem() {
    generateRow(1);
    generateRow(2);
    generateRow(3);

    // initial guess random juga (optional)
    document.getElementById("x0").value = randInt(-5, 5);
    document.getElementById("y0").value = randInt(-5, 5);
    document.getElementById("z0").value = randInt(-5, 5);
}