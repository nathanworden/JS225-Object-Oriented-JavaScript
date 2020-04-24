

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      return this.name + " is a " + this.year + ' year student';
    },
    listCourses: function() {
      return this.courses;
    },
    addCourse: function(course) {
      this.courses.push(course);
    },
    addNote: function(code, note) {
      this.courses.forEach(course => {
        if (course['code'] === code) {
          if (course['notes']) {
            course['notes'] += `; ${note}`
          } else {
            course['notes'] = note;
          }
        }
      });
    },
    viewNotes: function() {
      this.courses.forEach(course => {
        if (course['notes']) {
          console.log(course['name'] + ': ' + course['notes']);
        }
      });
    },
    updateNote: function(code, note) {
      this.courses.forEach(course => {
        if (course['code'] === code) {
          course['notes'] = note;
        }
      });
    },
  }
}

school = {
  students: [],
  addStudent: function(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      this.students.push(createStudent(name, year));
    } else {
      console.log('Invalid Year');
    }
  },
  enrollStudent: function(studentName, course) {
    let student = this.students.filter(student => student.name === studentName)[0];
    student.addCourse(course);
  },
  addGrade: function(studentName, courseName, grade) {
    let student = this.students.filter(student => student.name === studentName)[0];
    let course = student.courses.filter(course => course.name === courseName)[0];
    course['grade'] = grade;
    // console.log(student);
  },
  getReportCard(studentName) {
    student = this.students.filter(stu => stu.name === studentName)[0];
    course = student.courses.forEach(course => {
      if (course.grade) {
        console.log(course.name + ": " + course.grade);
      } else {
        console.log(course.name + ": " + 'In progress');
      }
    });
  },
  courseReport(courseName) {
    let scoreTotal = 0;
    let totalGrades = 0;
    let noGradesExist = true;
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName) {
          if (course.grade) {
            console.log(student.name + ": " + course.grade);
            scoreTotal += course.grade;
            totalGrades += 1;
            noGradesExist = false;
          }
        }
      });
    });
    if (noGradesExist) {
      console.log('undefined');
    } else {
      console.log("=" + courseName + " Grades" + "=");
      console.log('---');
      console.log('Course Average: ' + scoreTotal / totalGrades);
    }
  },

}

school.addStudent('foo', '3rd');
school.enrollStudent('foo', { name: 'Math', code: 101, });
school.enrollStudent('foo', { name: 'Advanced Math', code: 102, });
school.enrollStudent('foo', { name: 'Physics', code: 202, });
school.addGrade('foo', 'Math', 95);
school.addGrade('foo', 'Advanced Math', 90);

school.addStudent('bar', '1st');
school.enrollStudent('bar', { name: 'Math', code: 101, });
school.addGrade('bar', 'Math', 91);

school.addStudent('qux', '2nd');
school.enrollStudent('qux', { name: 'Math', code: 101, });
school.enrollStudent('qux', { name: 'Advanced Math', code: 102, });
school.addGrade('qux', 'Math', 93);
school.addGrade('qux', 'Advanced Math', 90);

school.getReportCard('foo');
// Math: 95
// Advanced Math: 90
// Physics: In progress

school.courseReport('Math');
// =Math Grades=
// foo: 95
// bar: 91
// qux: 93
// ---
// Course Average: 93

school.courseReport('Advanced Math');
// =Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 90

school.courseReport('Physics');
// undefined






