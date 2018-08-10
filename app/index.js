this.a = 25;

let print = function(){
    this.a = 50;
    console.log('this.a', this.a);
}

let arrowPrint = () =>{
    console.log('this.a in arrowPrint',this.a);
}
print();
arrowPrint();