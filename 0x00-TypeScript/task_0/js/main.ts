interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

const student1:Student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    location: "Boston",
};

const student2:Student = {
    firstName: "Lily",
    lastName: "Dough",
    age: 42,
    location: "Los Angeles",
};

const studentList:Student[] = [student1, student2];

const table = document.createElement("table");

document.body.appendChild(table);
studentList.forEach((student):void => {
    const row = document.createElement("tr");
    
    row.innerHTML = `${student.firstName} ${student.location}`;
    table.appendChild(row);
})
