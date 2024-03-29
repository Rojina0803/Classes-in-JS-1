//Using Classes

//1.Declaraing the class

class first_class{
    constructor(){

    }; //Constructor
    period(){

    }
    faculty="Science"; //instance of the class

    static teachers(){
        console.log(`We are teachers!!`);
    };// Static method

    static student_id=[0,1,2,3,4,5,6]; //static field
    // Static Block
    static{

    }
    // #myprivatefield="foo"
}
console.log(first_class);
console.log(first_class.student_id);
// console.log(first_class.faculty); 

//Constructing a class
const myinstance= new first_class()
console.log(first_class.student_id);

//Class declaration hoisting
//class declarations are not hoisted 


// new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class lass {
   static data=[67,78,80]
}
console.log(lass.data);


//Class expressions
const land= class rome{
    constructor(move,stop){
        this.move=move;
        this.stop= stop;
    }
    arrange(){
        return this.move% this.stop;
    }
}
let arrangement= new land(88,10)
console.log(arrangement);
console.log(typeof land);
