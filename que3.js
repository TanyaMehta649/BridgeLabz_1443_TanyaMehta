//que->you have  a list of employees with salaries and filter employee earning more than a specified amount
//map the filtered employee to show their name and salary after 10% increment
//use reduce to calculate the total updated salary for these employees
//we have created an object of having name and salaries of different employeees of a company
const employees = [
    { employeename: "anil", salary: 57000 },
    { employeename: "rajat", salary: 67000 },
    { employeename: "sunil", salary: 90000 },
    { employeename: "ritu", salary: 830000 }
];

// Salary threshold to filter employees
const check = 60000;

// Step 1: Filter employees with salary greater than the specified amount
const filteredemployees = employees.filter(employee => employee.salary > check);

// Step 2: Map to create a new array with updated salaries (10% increment)
const updated = filteredemployees.map(employee => ({
    name: employee.employeename,
    updatedsalary: employee.salary * 1.10, // Add 10% increment
}));

// Step 3: Calculate the total of the updated salaries using reduce
const total = updated.reduce(
    (total, employee) => total + employee.updatedsalary,
    0 // Initial total is 0
);

// Output the results
console.log("Filtered Employees with Updated Salaries:", updated);
console.log("Total Updated Salary:", total);
