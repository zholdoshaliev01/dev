const students=[
    {name:'Ermek', Age:14, salary:50000},
    {name:'Ali', Age:11, salary:30000},
    {name:'Nurel', Age:12, salary:40000},
    {name:'Adinai', Age:12, salary:10000}
]
console.log(students);

const mapStudents=students.map(student=>{
    return `${student.name} ${student.age}`
})
console.log(mapStudents);

const filterStudents=students.filter(adam=>adam.salary>40000)
console.log(filterStudents);

const reduceStud=students.reduce((total,student)=>{
    return total+student.salary
}, 0)
console.log(reduceStud);

const newStud=students.map(adam=>{
    return adam.name.toUpperCase()
})
console.log(newStud);

const student=students.find(adam=>adam.name==='Ali')
console.log(student);

const studentInd=students.findIndex(adam=>adam.name==='Ali')
console.log(studentInd);

students.forEach(adam=>console.log((`${adam.name} ${adam.age}`)))

const animals=[
    {id: 1, name:'fox'},
    {id: 2, name:'woLF'},
    {id: 3, name:'liNo'},
    {id: 4, name:'Tiger'},
    {id: 5, name:'CAmel'},
    {id: 6, name:'water'},
    {id: 7, name:'agektiv'},
]
// 'fox', 'woLF', 'liNo', 'Tiger', 'CAmel', 'water','agektiv'

const newAni=animals.map(adam=>{
    return adam.name.toUpperCase()
})
console.log(newAni);
