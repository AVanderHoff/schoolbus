var Student = require('./student.js');

var Bus = function(driverName,color,gas){
	this.studentsOnBus = [] ;
	this.driverName = driverName;
	this.color = color ;
	this.gas = gas ;
	this.studentEntersBus = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
		this.studentsOnBus.push(new Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase));
	};
	this.busChatter = function(){
		for(var i = 0 ; i < this.studentsOnBus.length ; i++)
			if( this.studentsOnBus[i].canStudentHaveFun()){
				console.log(this.studentsOnBus[i].catchPhrase);
			}
	};

};



module.exports = Bus ;