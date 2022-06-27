import { School } from "./entities";
import { getClassYoungestStudent as getClassYoungestStudentFullName, initializeSchool, printSchool } from "./services";

const school: School = initializeSchool();

printSchool(school);

console.log(`The youngest student in the ${school.classes[0].name} class is ${getClassYoungestStudentFullName(school.classes[0])}`);