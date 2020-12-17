// Yêu cầu 1
class Student {
    name;
    age;
    placeOfBirth;
    constructor(name, age, placeOfBirth) {
        this.name = name;
        this.age = age;
        this.placeOfBirth = placeOfBirth;
    }

    showInfo() {
        console.log(`Tên học sinh: ${this.name} `);
        console.log(`Tuổi        : ${this.age}`);
        console.log(`Nơi sinh    : ${this.placeOfBirth}`);
    }
}

// Yêu cầu 2
class Course {
    name;
    studentList;
    constructor(name, studentList) {
        this.name = name;
        this.studentList = [];
    }


    // Yêu cầu 3
    addStudent(student) {
        this.studentList.push(student)
    }
    findByName() {
        return this.studentList.filter(student => student.name === name);
    }
    findByAge() {
        return this.studentList.filter(student => student.age === age);
    }
    findByPOB() {
        return this.studentList.filter(student => student.placeOfBirth === placeOfBirth);
    }
}
export {Student, Course}