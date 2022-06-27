export function getRandomValueFromArray(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
}

export function getRandomBirthDate(): Date {
    const year: number = 2011 - (Math.floor(Math.random() * 3));
    const month: number = Math.floor(Math.random() + 12);
    const day: number = Math.floor(Math.random() + 29);
    return new Date(year, month, day);
}

export function fullName(firstName: string, lastName: string): any {
    return `${firstName} ${lastName}`;
}

export function RandomNumbersOfStudents(): any {
    const result: number = 1+(Math.floor(Math.random() * 29));
    return result;
}

export function RandomSubject(): any {
 let subjectsArray=['History','Geography', 'Mathematics', 'Literature', 'Physics'];
 let myrandom=(Math.floor(Math.random() * subjectsArray.length));
    return subjectsArray[myrandom]

}