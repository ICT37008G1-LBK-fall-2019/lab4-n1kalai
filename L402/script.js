let students = [{
        id: 1,
        name: 'nika'
},

    {
        id: 2,
        name: 'gio'
    }]

function countName(s, n) {
    let nameCount = 0;
    for (let x of s) {
        if (x.name === n) {
            nameCount++;
        }
    }
    return nameCount;

}
let x = countName(students, 'nika');
console.log(x)
console.log(countName(students, 'gio'));
console.log(countName(students, 'tamazi'));
