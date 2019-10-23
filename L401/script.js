function Min(a, b, c) {
    let box = a;
    //
    //    if (a < b && a < c) {
    //        box = a
    //    } else if (b < a && b < c) {
    //        box = b
    //    } else {
    //        box = c
    //    }

    if (b < a && b < c) {
        box = b;
    } else if (c < a && c < b) {
        box = c
    }

    alert(box)
}

console.log(Min(1, 25, 0));
