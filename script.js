//Task 1 
let task1Title = prompt("Enter the title for Task 1:");
let task1Desc = prompt("Enter the description for Task 1:");

//Task 1 Status
let task1Status = prompt("Enter the status for Task 1 (To Do, Doing, Done):") .toLowerCase();
while(
    task1Status !== "to do" &&
    task1Status !== "doing" &&
    task1Status !== "done"
){
    alert("Invalid status. Please enter 'To Do', 'Doing', or 'Done'.");
    task1Status = prompt("Enter the status for Task 1 (To Do, Doing, Done):").toLowerCase();
}

