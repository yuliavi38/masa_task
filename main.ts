import { School } from "./entities";
import { getClassYoungestStudent as getClassYoungestStudentFullName, initializeSchool, printSchool, transferStudent } from "./services";
const school: School = initializeSchool();

printSchool(school);

transferStudent(`${school.classes[0].students[0].firstName} ${school.classes[0].students[0].lastName}`, school.classes[0],school.classes[1]);

printSchool(school);

console.log(`The youngest student in the ${school.classes[0].name} class is ${getClassYoungestStudentFullName(school.classes[0])}`);