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

function myList(array) {
    let myArray = [];
    let map = {};
    let num = 0;
    for (let x of array) {


        if (map[x.name] == null) {
            map[x.name] = 0;

        }
        map[x.name] += 1;
    }


    return map;
}

console.log(myList(students));
