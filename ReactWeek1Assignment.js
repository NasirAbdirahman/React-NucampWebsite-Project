class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}
class Bootcamp {
    constructor (name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(student) {
        //*Alternate approach for code = if (this.students.includes(student.email))// 
        if (this.students.filter(student => student.email === student.email).length) {
          console.log(`The student ${student.email} is already registered`);
        } else {
          this.students.push(student);
          console.log(`Registering ${student.email} to the bootcamp ${this.name}`); 
        }
      return this.students;
    }
}

//Creating the Class//
const webDevFundamentals = new Bootcamp ("React", 1);

//Creating the Student//
const student1 = new Student ("nasir", "nasir@gmail", "seattle");

//Student is registered to class//
webDevFundamentals.registerStudent(student1);

