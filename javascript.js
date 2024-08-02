function calculateTotal() {
    const subjects = ['subject1', 'subject2', 'subject3', 'subject4', 'subject5'];
    let grandTotal = 0;

    subjects.forEach(subject => {
        const theory = parseInt(document.getElementById(`${subject}-theory`).value) || 0;
        const practical = parseInt(document.getElementById(`${subject}-practical`).value) || 0;
        const total = theory + practical;

        document.getElementById(`total${subjects.indexOf(subject) + 1}`).innerText = total;
        grandTotal += total;
    });

    return grandTotal;
}

function generateMarksheet() {
    const name = document.getElementById('name').value;
    const regNo = document.getElementById('regNo').value;
    const enrollNo = document.getElementById('enrollNo').value;
    const centerName = document.getElementById('centerName').value;
    const centerCode = document.getElementById('centerCode').value;

    const grandTotal = calculateTotal();
    const percentage = (grandTotal / 500) * 100;

    let result;
    if (percentage >= 50) {
        result = 'PASS';
    } else {
        result = 'FAIL';
    }

    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B+';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `
        <h2>Marksheet</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Registration Number:</strong> ${regNo}</p>
        <p><strong>Enrollment Number:</strong> ${enrollNo}</p>
        <p><strong>Authorized Training Centre's Name:</strong> ${centerName}</p>
        <p><strong>Authorized Training Centre's Code:</strong> ${centerCode}</p>
        <p><strong>Total Marks:</strong> ${grandTotal}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Result:</strong> ${result}</p>
        <
