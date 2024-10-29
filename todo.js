const fs = require('fs');
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }
}

const saveTasks = (task) => {
    const dataJSON = JSON.stringify(task);
    fs.writeFileSync(filePath, dataJSON);
    console.log("Tasks saved successfully", task);
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    saveTasks(tasks);
}

const listTasks = () => {
    loadTasks();
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`)); 
}

const command = process.argv[2];
const argument = process.argv[3];

if(command === "add"){
    addTask(argument);
}else if(command === "list"){
    listTasks();
}else if(command === "remove"){
    removeTask(parseInt(argument));
}else{
    console.log("Command not found");
}
