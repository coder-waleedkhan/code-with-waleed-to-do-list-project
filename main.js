#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.bold("\n \t Welcome to Code with Waleed - Todo List Application\n"));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-list", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-list") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-list`);
};
// function to view all Todo-list task
let viewTask = () => {
    console.log("\n your Todo-List \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
// function to delete a task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index.no' of the task you want to delete:",
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n ${deleteTask} this task has been deleted succesfully from your Todo-List`);
};
main();
// function to update a task 
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to update: "
        },
        {
            name: "new task",
            type: "input",
            message: "now Enter your new task:",
        }
    ]);
    todoList[update_task_index.index] = update_task_index.newTask;
    console.log(`\n Task at index no.${update_task_index.index} updated successfully [for Updated list check option: "view Todo-List"]`);
};
