const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};


const showKey = (object, array) => {
    return object, array[0]
}

console.log(school.lessons[2])
let total = 0;

const sumStudents = (object) => {
    for (i = 0; i < object.lessons.length; i +=1) {
        total += object.lessons[i].students

    }
    return total 
}

console.log(sumStudents(school))

const keyExists = (object, key) => {
    for (let i = 0; i < object.lessons.length; i += 1){
        if (object.lessons[i][key] === undefined) {
            return false;
        }
    }
    return true;
}

console.log(keyExists(school, "students"))

const changeTurn = (obj, key, value) => {
    let findCourse;
    for (index = 0; index < obj.lessons.length; index +=1) {
        let element = obj.lessons[index];
        if (element.course === key);
        findCourse = element;
        break;
    }
    if (findCourse !== undefined) {
        findCourse.shift = value;
        return findCourse;
    }
    else{
        return "Course not found."
    }
    
}   

console.log(changeTurn(school, "Python", "Night"))