const Person = require('./person');

// Your code here

class Teacher extends Person{
  constructor(firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let sum = 0;
    for(let i = 0; i < teachers.length; i++){
      let teacher = teachers[i];
      sum += teacher.yearsOfExperience
    }
    return sum;
  }
}

let teacher1 = new Teacher("susan", "jones", "biology", 5);
let teacher2 = new Teacher("bobby", "roberts", "math", 15);

console.log(Teacher.combinedYearsOfExperience([teacher1, teacher2]))

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
