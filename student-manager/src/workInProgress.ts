interface student {
    id: number, 
    name: string,
    subjects: subject[]
}

interface subject {
    id: number,
    name: string,
    grade: number
}

const students: student[] = []

function addStudent(student: student):void{
    students.push(student)
}

function getGradeDistribution(student: student):number{
    let gradeDist: number = 0
    student.subjects.map(subject => gradeDist += subject.grade)
    return gradeDist / student.subjects.length
}

function getStudentSubjects(student: student):subject[]{
    return student.subjects
}

function addSubject(student: student, subject: subject):void{
    student.subjects.push(subject)
}




