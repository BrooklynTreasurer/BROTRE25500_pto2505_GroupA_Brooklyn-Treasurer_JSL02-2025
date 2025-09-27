//Task 1 
let task1Title = prompt("Enter the title for Task 1:");
let task1Description = prompt("Enter the description for Task 1:");

//Task 1 Status
let task1Status = prompt("Enter the status for Task 1 (ToDo, Doing, Done):") .toLowerCase();
while(
    task1Status !== "todo" &&
    task1Status !== "doing" &&
    task1Status !== "done"
){
    alert("Invalid status. Please enter 'ToDo', 'Doing', or 'Done'.");
    task1Status = prompt("Enter the status for Task 1 (ToDo, Doing, Done):").toLowerCase();
}

//Task 2
let task2Title = prompt("Enter the title for Task 2:");
let task2Desccription = prompt("Enter the description for Task 2:");

//Task 2 Status
let task2Status = prompt("Enter the status for Task 2 (ToDo, Doing, Done):") .toLowerCase();
while(
    task2Status !== "todo" &&
    task2Status !== "doing" &&
    task2Status !== "done"
){
    alert("Invalid status. Please enter 'ToDo', 'Doing', or 'Done'.");
    task2Status = prompt("Enter the status for Task 2 (ToDo, Doing, Done):").toLowerCase();
}