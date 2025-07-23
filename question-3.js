// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
let count = 0;

function checkPasswordStrength (userPassword){
    for(let password of userPassword){
        count++
    };
    if (count < 6){
        return "Weak";
    } else if (count >=6 && count<=10){
        return "Medium";
    } else if (count > 10){
        return "Strong";
    }
};

userPassword =  "ssswnalWadqQ";
console.log(checkPasswordStrength(userPassword))