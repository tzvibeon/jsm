console.log("This is sort()");
let name=["Amy","Miya","Bin","Jinnie","Annie"];
name.sort();
console.log(name);
let marks=[32,310,40,90,03];
marks.sort();
console.log(marks)

let result=[
       {name:"English",mark:67},
       {name:"Physics",mark:88},
       {name:"505",mark:70}
];
result.sort((a,b)=>{
    if (a.mark>b.mark) {
        return 1;
        
    }else if(a.mark<b.mark){
        return -1;
    }else{
        return 0;
    }
})
console.log(result)
console.log("This filter()")

let age=[30,10,20,40,45,56];
let filter=age.filter((ages)=>{
    return ages>10;
})
console.log(filter);
console.log("This is find()");
let num=[20,40,50,20];
let out=num.find(n=>n>40);
console.log(out)
