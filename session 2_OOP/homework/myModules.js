import {Student, Course} from './homework.js'

let student1 = new Student('Ngô Bá Khá', 26, 'Bắc Giang')
let student2 = new Student('Abel Tesfaye', 30, 'Toronto')


const ITclass = new Course('Itclass')
ITclass.studentList = studentList
ITclass.addStudent(student1);
ITclass.addStudent(student2);

console.log(ITclass);
console.log(`Hiển thị các học sinh 15 tuổi: ${ITclass.findByAge(26)}`);
// console.log(`Hiển thị các học sinh 18 tuổi quê Hà Nội: ${ITclass.findByPOB(18, 'Hanoi')}`)

