var Student = function(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase){
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.GPA = GPA ;
	this.detentions = detentions ;
	this.sleepingInClass = sleepingInClass ;
	this.catchPhrase = catchPhrase ;
	this.canStudentHaveFun = function(){
		if(this.GPA > 2 && this.detentions < 10){
			
			console.log(this.name + " can have fun");
			return true
		}
		else{return false};

	
	}

};


module.exports = Student ;