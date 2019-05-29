const inquirer = require("inquirer");

inquirer.prompt([
	{
		type: "list",
		name: "fruit",
		message: "Which is your favorite fruit?",
		choices: ["apple", "banana"]
	}
])
.then(answers => {
	console.info("Answer: ", answers.fruit)
});
