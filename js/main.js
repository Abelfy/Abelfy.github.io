document.querySelector('#age').innerHTML= calculateAge(1990, 8, 13);

function calculateAge(birthYear, birthMonth, birthDay) {
    let today = new Date();
    let age = today.getFullYear() - birthYear;
    let month = today.getMonth() - birthMonth;
    if (month < 0 || (month === 0 && today.getDate() < birthDay)) {
        age--;
    }
    return age;
}