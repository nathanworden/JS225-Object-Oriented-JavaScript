

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

foo = createStudent('Foo', '1st');
console.log(foo.info());
// Foo is a 1st year student
console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// Math: Fun Course; Remember to study for algebra
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// Math: Fun Course; Remember to study for algebra
// Advanced Math: Difficult Subject
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// Math: Fun Course
// Advance Math: Difficult Subject