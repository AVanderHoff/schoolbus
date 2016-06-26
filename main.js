// NOTE
// enter "add" as third command line argument for adding student
// enter "chatter" as third command line argument for calling busChatter

var prompt = require('prompt');
var arg = process.argv[2];
var Bus = require('./bus.js');
var Student = require('./student.js');

prompt.start();

var bus = new Bus("Mr Bill","Yellow",60);


function add(){
prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function (err, result) { 
	var student = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase)
	student.canStudentHaveFun();

});  
}

//can have fun
bus.studentEntersBus("student1","male",10,3,5,true,"phrase 1");
//cant have fun
bus.studentEntersBus("student2","female",11,1,5,false,"phrase 2");
//cant have fun
bus.studentEntersBus("student3","male",9,3,13,false,"phrase 3");
//can have fun
bus.studentEntersBus("student4","female",12,3.5,2,true,"phrase 4");
// can have fun
bus.studentEntersBus("student5","male",9,2.5,5,true,"phrase 5");
//cant have fun
bus.studentEntersBus("student6","male",10,2,13,false,"phrase 6");
// cant have fun
bus.studentEntersBus("student7","female",9,2.5,10,true,"phrase 7");
// can have fun
bus.studentEntersBus("student8","male",9,2.5,5,true,"phrase 8");
// cant have fun
bus.studentEntersBus("student9","female",9,2,10,true,"phrase 9");
// can have fun
bus.studentEntersBus("student10","female",9,2.5,5,true,"phrase 10");
//can have fun
bus.studentEntersBus("student11","male",10,3,5,true,"phrase 11");
//cant have fun
bus.studentEntersBus("student12","female",11,1,5,false,"phrase 12");
//cant have fun
bus.studentEntersBus("student13","male",9,3,13,false,"phrase 13");
//can have fun
bus.studentEntersBus("student14","female",12,3.5,2,true,"phrase 14");
// can have fun
bus.studentEntersBus("student15","male",9,2.5,5,true,"phrase 15");
//cant have fun
bus.studentEntersBus("student16","male",10,2,13,false,"phrase 16");
// cant have fun
bus.studentEntersBus("student17","female",9,2.5,10,true,"phrase 17");
// can have fun
bus.studentEntersBus("student18","male",9,2.5,5,true,"phrase 18");
// cant have fun
bus.studentEntersBus("student19","female",9,2,10,true,"phrase 19");
// can have fun
bus.studentEntersBus("student20","female",9,2.5,5,true,"phrase 20");




if(arg=="add"){add()}
else if(arg=="chatter"){bus.busChatter()}
else{console.log('no command')};