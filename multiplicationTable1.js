for(i = 0; i <= 12; i++) {
    console.log("The " + i + "'s Table");
    for(j = 0; j <= 12; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
    if(i != 12) {
        console.log("__________________");
    }
};