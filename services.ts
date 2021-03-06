// Exercise 2. To fix the problem History has been added here into import statement

import { firstNames, Geography, lastNames, Mathematics, History } from "./constants";
import { Classroom, School, Student, Teacher } from "./entities";
import { getRandomBirthDate, getRandomValueFromArray, fullName, RandomNumbersOfStudents, RandomSubject } from "./helpers";

export function initializeSchool(): School {
    const student1: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student2: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student3: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student4: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student5: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student6: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student7: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student8: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student9: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student10: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student11: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
    const student12: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());

    const teacher1: Teacher = createTeacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Mathematics]);
    const teacher2: Teacher = createTeacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [Geography]);
    const teacher3: Teacher = createTeacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), [History]);


    const mathClass: Classroom = createClassroom("Math", teacher1, [student1, student2, student3, student4]);
    const geographyClass: Classroom = createClassroom("Geography", teacher2, [student5, student6, student7, student8]);
    const historyClass: Classroom = createClassroom("History", teacher3, [student9, student10, student11, student12]);

    return {
        name: "Big school",
        address: "Moscow",
        phone: "+7 (916) 000 12 21",
        classes: [
            mathClass,
            geographyClass,
            historyClass
        ]
    }
}

function createTeacher(firstName: string, lastName: string, professions: string[]): Teacher {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName(firstName, lastName), 
        professions: professions
    };
}

function createStudent(firstName: string, lastName: string, birthDate: Date): Student {
    return {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
        fullName: fullName(firstName, lastName), 
        age: function () {
            let ageDifferenceInMilliseconds = Date.now() - this.birthDate.getTime();
            let ageDate = new Date(ageDifferenceInMilliseconds);
            let ageNow = Math.abs(ageDate.getUTCFullYear() - 1970);
            return ageNow 
        }
    };
}

function createClassroom(name: string, teacher: Teacher, students: Student[]): Classroom {
    return {
        name: name,
        teacher: teacher, 
        students: students
    };
}

export function transferStudent(fullStudentName: any, fromClassroom: Classroom, toClassroom: Classroom): void {
    fromClassroom.students.map(function(student,index): void {
        if (student.fullName === fullStudentName) {
            fromClassroom.students.splice(index,1);
            toClassroom.students.push(student);
        };
    });
}

export function getClassYoungestStudent(classroom: Classroom): any {
   classroom.students.sort((current,next)=>current.age()>next.age() ? 1 : -1)
   return  classroom.students[0].fullName;
}

export function printSchool(school: School): void {
    
    console.log(`School data:\n==========\n${school.name}\n${school.address}\n${school.phone}\n\nClasses\n==========`);
    let sortedClass = school.classes.sort((current,next)=>current.name.toLowerCase()>next.name.toLowerCase() ? 1 : -1);
    
    sortedClass.forEach(function (classRoom, index) {
        console.log(`\nClass ${index + 1}: ${classRoom.name}\nTeacher: ${classRoom.teacher.fullName}, ${classRoom.teacher.professions}`);
        const sortedNames = classRoom.students.sort((current, next) => {
            const result = current.lastName.localeCompare(next.lastName);
            return result !== 0 ? result : current.firstName.localeCompare(next.firstName);
          })

        sortedNames.forEach(function (student, index) {
            console.log(`${index+1}: ${student.fullName}: ${student.age()}`)
        });

})
}

export function dynamicallySchool(numbersOfClass:number,nameSchool:string,phoneNumber:string|number,adress:string): School {
    
    let classArray=<any>[]

    for (let classIndex = 0; classIndex < numbersOfClass; classIndex++) {
        const numbersOfStudent: number = RandomNumbersOfStudents();
        let stArray=<any>[]
        let subject=RandomSubject();
        let teacher: Teacher = createTeacher(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), subject);
        for (let studentIndex = 0; studentIndex < numbersOfStudent; studentIndex++) {

            let student: Student = createStudent(getRandomValueFromArray(firstNames), getRandomValueFromArray(lastNames), getRandomBirthDate());
           stArray.push(student);
            
        }
        const newClass: Classroom = createClassroom(subject, teacher, stArray);
        classArray.push(newClass);
    }

    return {
        name: nameSchool,
        address: adress,
        phone: phoneNumber,
        classes: classArray
    }
}