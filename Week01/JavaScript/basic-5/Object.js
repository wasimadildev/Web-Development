// function multipleby5(num){
//     return num * 5;
// }


// multipleby5.power = 2;
// console.log(multipleby5(5))
// console.log(multipleby5.power);
// console.log(multipleby5.prototype);

// console.log( typeof multipleby5);


function createUser(username, score){
    this.username = username;
    this.score = score


}


createUser.prototype.increment = function(){
   this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser("user", 25)
const tea = createUser("tea", 250)

chai.printMe()
