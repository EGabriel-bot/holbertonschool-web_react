interface DirectorInterface{
    workFromHome(): string,
    getCoffeBreak():string,
    workDirectorTasks():string,
};

interface TeacherInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string,
};

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from Home";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }

    getCoffeBreak(): string {
        return "Getting a coffee break";
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Working from Home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary:number | string) :Director | Teacher {
    return (typeof salary === "number" && salary < 500) ? new Teacher() : new Director()
}

function isDirector(employee:unknown) {
    return employee instanceof Director;
}

function executeWork(employee:Director | Teacher):string {
    if (employee instanceof Director){
        return employee.workDirectorTasks();
    }
    else if (employee instanceof Teacher) {
        return employee.workTeacherTasks();
    }
}

type Subjects = "Math" | "History";

function teachClass(todayClass:Subjects):string {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));

console.log(createEmployee('$500'));

const result = executeWork(createEmployee(200))
console.log(result);

console.log(teachClass("Math"));
console.log(teachClass("History"));



