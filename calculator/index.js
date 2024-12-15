let equationVariable = "";
let equationText = "";
let qreset = false;
let lastFunction = null;

function evaluateEquation(equation) {
    // Helper to compute factorial
    function factorial(x) {
        if (x === 0) return 1;
        if (x > 0 && Number.isInteger(x)) {
            return x * factorial(x - 1);
        } else {
            throw new Error("Factorial is only defined for non-negative integers");
        }
    }
    let processedEquation = equation.replace(/(\d+(\.\d+)?(?:[*/+-]\d+(\.\d+)?)+)!/g, (match, expr) => {
        const value = eval(expr); // Evaluate the inner expression (e.g., 2.5*2)
        if (!Number.isInteger(value)) {
            throw new Error("Factorial is only defined for non-negative integers");
        }
        return factorial(value);
    });

    // Step 2: Replace standalone factorials (e.g., "2!")
    processedEquation = processedEquation.replace(/(\d+)!/g, (match, num) => {
        const value = Number(num);
        return factorial(value);
    });

    // Step 3: Evaluate the final processed equation
    return eval(processedEquation);
}

function factorial(x) {
    if (x == 0) {
        return(1)
    }
    if (x > 0) {
        console.log(x)
        return x * factorial(x - 1)
    }
}

function factorialClick() {
    //equationVariable += "factorial(" + equationVariable + ")";
    equationVariable += '!';
    equationText += '!';
    refreshEquation();
}

function addToEquationVariableParentheses(x) {
    if (equationVariable == '') {
        return;
    }
    if (lastFunction == 'addToEquationVariableNumber') {
        return;
    }
    else {
        equationVariable += String(x);
        equationText += String(x)
        refreshEquation();
        lastFunction = 'addToEquationVariable'
    }
}

function addToEquationVariable(x) {
    if (equationVariable == '') {
        return;
    }
    if (lastFunction == 'addToEquationVariable') {
        return;
    }
    if (x == '**') {
        equationVariable += String(x);
        equationText += String('^');
        refreshEquation();
        lastFunction = 'addToEquationVariable'
    }
    else {
        equationVariable += String(x);
        equationText += String(x)
        refreshEquation();
        lastFunction = 'addToEquationVariable'
    }
}

function addToEquationVariable00(x) {
    if (equationVariable == '') {
        return;
    }
    else {
        equationVariable += String(x);
        equationText += String(x);
        refreshEquation();
    }
}

function addToEquationVariableNumber(x) {
    equationVariable += String(x);
    equationText += String(x);
    refreshEquation();
    lastFunction = 'addToEquationVariableNumber'
}

function refreshEquation() {
    document.getElementById("equation").innerText = equationText;
}

function clearEquation() {
    document.getElementById('equation').innerText = ''
    equationVariable = ''
    equationText = ''
    lastFunction = clearEquation
}

function calculateAnswer() {
    if (equationVariable == '') {
        return;
    }
    if (lastFunction == 'addToEquationVariable') {
        return; 
    }
    else {
        try {
            //console.log(equationVariable.replace(/factorial\((\d+)\)/g, (match, num) => factorial(Number(num))))
            //let result = eval(equationVariable.replace(/factorial\((\d+)\)/g, (match, num) => factorial(Number(num))));
            console.log(equationVariable)
            console.log(evaluateEquation(equationVariable))
            let result = evaluateEquation(equationVariable)
            equationVariable = String(result);
            equationText = String(result);
        } catch (error) {
            equationVariable = "Error";
            equationText = "Error";
        }
        refreshEquation();
        reset = true;
        lastFunction = calculateAnswer
    }
}