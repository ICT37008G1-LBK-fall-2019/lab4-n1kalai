let students = [
    {
        id: 1,
        name: 'gio'
    },
    {
        id: 2,
        name: 'nika'
    },
    {
        id: 3,
        name: 'nika'
    },
    {
        id: 4,
        name: 'gio'
    },
    {
        id: 5,
        name: 'saxlshi damrhca'
    }
];

function myList(variable) {
    let myArray = [];
    for (let x of variable) {
        if (myArray.indexOf(x.name) == -1) {
            myArray.push(x.name);
        }
    }
    return myArray;
}

console.log(myList(students));
