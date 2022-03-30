
/**
 * GPA Calculator
 */
// function gpa(markes) {
    
//     let gpa ;
//     if (markes >=0 && markes <33) {
//         gpa = 0;
//     }else if (markes >= 33 && markes < 40) {
//         gpa = 1;
//     }else if (markes >= 40 && markes < 50) {
//         gpa = 2;
//     }else if (markes >= 50 && markes < 60) {
//         gpa = 3;
//     }else if (markes >= 60 && markes < 70) {
//         gpa = 3.5;
//     }else if (markes >= 70 && markes < 80) {
//         gpa = 4;
//     }else if (markes >= 80 && markes <=100) {
//         gpa = 5;
//     }

//     return gpa;
// }
// /**
//  * Grade Calculator
//  */
//  function grade(markes) {
    
//     let grade ;
//     if (markes >=0 && markes < 33) {
//         grade = 'F';
//     }else if (markes >= 33 && markes < 40) {
//         grade = 'D';
//     }else if (markes >= 40 && markes < 50) {
//         grade = 'C';
//     }else if (markes >= 50 && markes < 60) {
//         grade = 'B';
//     }else if (markes >= 60 && markes < 70) {
//         grade = 'A-';
//     }else if (markes >= 70 && markes < 80) {
//         grade = 'A';
//     }else if (markes >= 80 && markes <=100) {
//         grade = 'A+';
//     }

//     return grade;
// }
// /**
//  * CGPA
//  */
// let cgpa = (bn,en,math,s,ss,religon) =>{
    
//     let total_cgpa =( bn + en + math + s + ss + religon);
//     let cgpa =total_cgpa / 6;

//     if (bn ==0 || en == 0 || math ==0 || s==0|| ss==0 || religon ==0) {
        
//         return 'You are failed'
//     }else{
//         return ` your cgpa ${cgpa. toFixed(2)} & Grade ${totalgrade(cgpa)}`
//     }
// }

// function totalgrade(cgpa){
//     if (cgpa >=0 && cgpa <1) {
//         return 'F';
//     }else if(cgpa >=1 && cgpa <2){
//         return 'D';
//     }else if(cgpa >=2 && cgpa <3){
//         return 'C';
//     }else if(cgpa >=3 && cgpa <3.5){
//         return 'B';
//     }else if(cgpa >=3.5 && cgpa <4){
//         return 'A-';
//     }else if(cgpa >=4 && cgpa <5){
//         return 'A';
//     }else if(cgpa == 5){
//         return 'A+';
//     }
// }

/**
 * Function declearation
 */

// function ageCall(name,year) {
    
//     return ''; 


// }

/**
 * Function Expression
 */

// let ageCall = function(name,year){
// }

/**
 * Arrow function
 */

// let agecal = (name,year) =>{
//     return '';
// }

// let agcal = year => {
//     return '';
// }

// let agecal = () =>{

// }

// let agecal = year => 2021 - year ;
// console.log(agecal(1995));

 

function Result(){

    this.name      = ('Name');
    this.roll      = ('Roll');
    this.bn        = ('Bangla');
    this.en        = ('English');
    this.math      = ('Math');
    this.s         = ('Seience');
    this.ss        = ('Social Seience');
    this.religon   = ('Religon');

    this.gpa =function (mark){
        this.gpa;
        if (mark >=0 && mark <33) {
            gpa = 0;
        }else if(mark >=33 && mark <40){
            gpa = 1;
        }else if(mark >=40 && mark <50){
            gpa = 2;
        }else if(mark >=50 && mark <60){
            gpa  = 3;
        }else if(mark >=60 && mark <70){
            gpa = 3.5;
        }else if(mark >=70 && mark <80){
            gpa = 4;
        }else if(mark >=80 && mark <=100){
            gpa = 5;
        }
        return gpa;
    }
    this.grade =(gpa) => {
        this.grade;
        if (gpa == 0) {
            grade = 'F';
        }else if(gpa == 1){
            grade = 'D';
        }else if(gpa == 2){
            grade = 'C';
        }else if(gpa == 3){
            grade = 'B';
        }else if(gpa == 3.5){
            grade = 'A-';
        }else if(gpa == 4){
            grade = 'A';
        }else if(gpa == 5){
            grade = 'A+';
        }

        return grade;
    } 

    this.cgpa =(bn,en,math,s,ss,religon) => {
       
        let total_cgpa = bn + en + math + s + ss + religon ;
        let cgpa = (total_cgpa/6).toFixed(2);
        if (bn == 0 || en == 0 || math == 0 || s== 0|| ss== 0 || religon == 0) {
            return 'You are failed'
        }else{
          return `Your cgpa ${cgpa} and your grade ${this.total(cgpa)}`
        }
    }
    this.total = function (cgpa) {
        if (cgpa >=0 && cgpa <1) {
                    return 'F';
                }else if(cgpa >=1 && cgpa < 2){
                    return 'D';
                }else if(cgpa >=2 && cgpa < 3){
                    return 'C';
                }else if(cgpa >=3 && cgpa < 3.5){
                    return 'B';
                }else if(cgpa >=3.5 && cgpa < 4){
                    return 'A-';
                }else if(cgpa >=4 && cgpa < 5){
                    return 'A';
                }else if(cgpa == 5){
                    return 'A+';
                }
    }

   
}


