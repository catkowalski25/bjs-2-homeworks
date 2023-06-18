function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty("marks")) { 
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
    if (!this.hasOwnProperty("marks") || this.marks.length === 0) { 
        return 0;
    }
    return this.marks.reduce((acc, mark, index, arr) => {
        acc += mark;
        if (index === (arr.length - 1)) {
            return acc / arr.length;
        }
        return acc;
        }, 0);
   
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
  delete this.subject;
}
