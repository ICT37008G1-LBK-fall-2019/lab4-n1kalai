let students = [
    {
        id: 1,
        name: 'gio',
        gpa: 3
    },
    {
        id: 2,
        name: 'nika',
        gpa: 1.2
    },
    {
        id: 3,
        name: 'dato',
        gpa: 2.5
    },
    {
        id: 4,
        name: 'nino',
        gpa: 1.5
    },
    {
        id: 5,
        name: 'saxlshi damrhca',
        gpa: 2
    }
];

// function myList(array, mingpa = 2) {
//     let myArray = array.filter(x => x.gpa > mingpa).map((x) => x.gpa);
    //    for (let x of array) {
    //        if (x.gpa >= mingpa) {
    //            myArray.push(x.gpa);
    //        }
    //
    //    }

//     let sum = 0;
//     for (var i = 0; i < myArray.length; i++) {
//         sum += myArray[i];

//     }
//     let avg = sum / (myArray.length > 0 ? myArray.length : 1);

//     return avg;
// }

// console.log(myList(students, 1));

function myList(list,mingpa = 2){
    let sum = 0;
    let myArray = list.filter((x) => x.gpa > mingpa).map((y) => y.gpa);
    myArray.map((h) => sum+=h);
    let avg = sum / myArray.length

    return avg
}

console.log(myList(students, 1));

