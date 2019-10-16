let maxOuterNum = 12;
let maxInnerNum = 12;

for(i = 0; i <= maxOuterNum; i++) {
    console.log("This is the " + i + "'s table");
    for(j = 0; j <= maxInnerNum; j++){
        console.log(i + " x " + j + " = " + (i * j));
    }
    if(i != maxOuterNum) {
        console.log("________________")
    }
};