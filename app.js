

let result = new Result();

let name      = prompt('Name');
let roll      = prompt('Roll');
let bn        = Number(prompt('Bangla'));
let en        = Number(prompt('English'));
let math      = Number(prompt('Math'));
let s         = Number(prompt('Seience'));
let ss        = Number(prompt('Social Seience'));
let religon   = Number(prompt('Religon'));


// console.log(result.gpa (bn,en,math,s,ss,religon));
// console.log(result.grade (bn,en,math,s,ss,religon));
// console.log(result.cgpa(result.gpa,result.(bn),result.gpa(en),));
// console.log(result.totalgrade(bn,en,math,s,ss,religon));
// console.log(`              
// Student Name : ${name} 
// Student roll : ${roll}

// Subject name   Marks           Gpa                       Grade
// Bangla       : ${bn}            ${gpa(bn)}              ${grade(bn)}
// English      : ${en}            ${gpa(en)}              ${grade(en)}
// Math         : ${math}          ${gpa(math)}            ${grade(math)}
// Seience      : ${s}             ${gpa(s)}               ${grade(s)}
// S Seience    : ${ss}            ${gpa(ss)}              ${grade(ss)}
// Relgion      : ${religon}       ${gpa(religon)}         ${grade(religon)}
// -----------------------------------------------------------------
//                               cgpa =${ cgpa(gpa(bn) ,gpa(en), gpa(math), gpa(s), gpa(ss), gpa(religon))}
        
// `);

console.log(
    `
    Student Name: ${name}
    Student Roll: ${roll}
    
    Subject             Mark                GPA                     Grade
    Bangla              ${bn}               ${result.gpa(bn)}           ${result.grade(result.gpa(bn))}
    English             ${en}               ${result.gpa(en)}           ${result.grade(result.gpa(en))}
    Math                ${math}             ${result.gpa(math)}         ${result.grade(result.gpa(math))}
    Seience             ${s}                ${result.gpa(s)}            ${result.grade(result.gpa(s))}
    Social Seince       ${ss}               ${result.gpa(ss)}           ${result.grade(result.gpa(ss))}
    Religon             ${religon}          ${result.gpa(religon)}      ${result.grade(result.gpa(religon))}
    ---------------------------------------- ----------------------------------------------------------
    ${result.cgpa(result.gpa(bn), result.gpa(en), result.gpa(math), result.gpa(s), result.gpa(ss),result.gpa(religon))}
    
    `
);