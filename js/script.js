// example of If-Statement

let age = parseInt(prompt());
// from 0
if (age ===0){
    alert('please enter a valid age')
}
// 1-17
else if(age <=17){
    alert('you are still a teenager. Enjoy it while it last')
}
// 18-40
else if(age ===18 && age >=40){
    alert('life is too short')
}
// 40-60
else if(age > 40 &&age === 40 && age >=60){
    alert('remember a fool at 40 is a fool forever')
}
else{
    alert('you should start preparing for the end')
}