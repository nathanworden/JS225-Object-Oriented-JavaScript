var school = (function() {
  let students = [];
  let allowedYears = ['1st', '2nd', '3rd', '4th', '5th'];

  function getCourse(student, courseName) {
    return student.listCourses().filter(function(course) {
      return course.name === courseName;
    })[0];
  }


  return {
    addStudent: function(name, year) {
      if (allowedYears.indexOf(year) >= 0) {
        var student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year');
      }
    },

    enrollStudent: function(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode})
    },

    addGrade: function(student, courseName, grade) {
      var course = getCourse(student, courseName);
  
        if (course) {
          course.grade = grade;
        }
    },

    getReportCard: function(student) {
      student.listCourses().forEach(function(course) {
        if (course.grade) {
          console.log(course.name + ': ' + String(course.grade));
        } else {
          console.log(course.name + ': In progress');
        }
      });
    },

    courseReport: function(courseName) {
      var courseStudents = students.map(function(student) {
        var course = getCourse(student, courseName) || {
          grade: undefined
        };
        return {
          name: student.name,
          grade: course.grade,
        };
      }).filter(function(student) {
        return student.grade
      });
  
        if (courseStudents.length > 0) {
          console.log('=' + courseName + ' Grades=');
  
          var average = courseStudents.reduce(function(total, student) {
            console.log(student.name + ': ' + String(student.grade));
            return total + student.grade;
          }, 0) / courseStudents.length;
  
          console.log('---');
          console.log('Course Average: ' + String(average));
        }
    },
  }
})();

let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}


let schObj = school;
// console.log(schObj);
schObj.getReportCard(foo);







