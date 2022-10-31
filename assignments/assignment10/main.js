//Problem 1 
// Create JSON for each employee with the following details (first name, department, designation, salary, raise eligible)
let company = {
    "employeeList": [
            { 
                "firstName": "Sam",
                "department": "Tech",
                "designation": "Manager",
                "salary": 40000,
                "raiseEligible": true
            }, 
            {
                "firstName": "Mary",
                "department": "Finance",
                "designation": "Trainee",
                "salary": 18500,
                "raiseEligible": true
            },
            {
                "firstName": "Bill",
                "department": "HR",
                "designation": "Executive",
                "salary": 21200,
                "raiseEligible": false
            }
        ]
    }
    console.log(company);


//Problem 2 Create JSON for the company with the following details (companyName, website, employees)
let companyNames = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employeeList": [
        {
            "firstName": "Sam",
                "department": "Tech",
                "designation": "Manager",
                "salary": 40000,
                "raiseEligible": true
            }, 
            {
                "firstName": "Mary",
                "department": "Finance",
                "designation": "Trainee",
                "salary": 18500,
                "raiseEligible": true
            },
            {
                "firstName": "Bill",
                "department": "HR",
                "designation": "Executive",
                "salary": 21200,
                "raiseEligible": false
            }
    ]
}
console.log(companyNames);


//Problem 3 
// A new employee has joined the company. Update the JSON from problems 1 and 2 to reflect the addition of: Anna
let companyAnna = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employeeList": [
        {
            "firstName": "Sam",
                "department": "Tech",
                "designation": "Manager",
                "salary": 40000,
                "raiseEligible": true
            }, 
            {
                "firstName": "Mary",
                "department": "Finance",
                "designation": "Trainee",
                "salary": 18500,
                "raiseEligible": true
            },
            {
                "firstName": "Bill",
                "department": "HR",
                "designation": "Executive",
                "salary": 21200,
                "raiseEligible": false
            }
    ]
}
console.log(companyAnna);

function addEmployee(obj, name, department, designation, salary, raise) {
    let employee = {
        "firstName": name,
        "department": department,
        "designation": designation,
        "salary": salary,
        "raiseEligible": raise
    };
    obj['employeeList'].push(employee);
}
addEmployee(companyAnna, "Anna", "Tech", "Executive", 25600, false);


//Problem 4 Given the JSON for the company, calculate the total salary for all company employees.
let totalSalary = 0;
for(let i = 0; i < companyAnna.employeeList.length; i++){
    totalSalary += companyAnna.employeeList[i]['salary'];
}
console.log(totalSalary);


//Problem 5 It's raise time. If an employee is raise eligible, increase their salary by 10%. Given the JSON of the company and its employees, write a function to update the salary for each employee who is raised eligible, then set their eligibility to false.
for(let i = 0; i <companyAnna.employeeList.length; i++){
    if(companyAnna.employeeList[i]['raiseEligible'] === true){
        companyAnna.employeeList[i]['salary'] += companyAnna.employeeList[i]['salary'] * .1;
        companyAnna.employeeList[i]['raiseEligible'] = false;
    }
}
console.log(companyAnna.employeeList);


//Problem 6 Some employees have decided to work from home. The following array indicates who is working from home. Use the array to update the company JSON. For each employee, add another property called 'wfh' and set it to true of false
let wfh = ['Anna', 'Sam'];
for(let i = 0; i < companyAnna.employeeList.length; i++){
    let check = false;
    let name = companyAnna.employeeList[i].firstName;
    console.log(check);
    for(let j = 0; j < wfh.length; j++){
        if(wfh[j] === name){
            check = true;
        }
    }
    if (check === true){
        companyAnna['employeeList'][i].workFromHome = true;
    }
    else {
        companyAnna['employeeList'][i].workFromHome = false;
    }
}
console.log(companyAnna)