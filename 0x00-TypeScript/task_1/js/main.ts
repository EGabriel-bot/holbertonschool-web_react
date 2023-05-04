interface Teacher extends Record<string, any> {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
}

interface Directors extends Teacher {
    numberOfReports: number,
};

const teacher3:Teacher = {
    firstName: "John",
    fullTimeEmployee: false,
    lastName: "Doe",
    location: "London",
    contract: false,
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

interface printTeacherFunction {
    firstName: string,
    lastName: string,
};

function printTeacher(firstName:string, lastName:string):string {
    return `${firstName[0]}. ${lastName}`;
}

interface Students {
    firstName: string,
    lastName: string,
};

class StudentClass {
    constructor(
        public firstName: string,
        public lastName: string,
        ) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public workOnHomeWork():string {
            return "Currently working";
        }

        public displayName():string {
            return this.firstName;
        }
}

console.log(teacher3);
console.log(director1);
console.log(printTeacher("John", "Doe"));
