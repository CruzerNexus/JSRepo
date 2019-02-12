let user_to_do = document.getElementById('newToDo');
button.addEventListener('click', function(event){
	let newtask = document.createElement("li")
	newtask.innerText = user_to_do.value;
	let compBtn = document.createElement("button");
	compBtn.innerText = 'Complete Task';
	let xBtn = document.createElement("button");
	xBtn.innerText = 'Delete Task';
	let newToDo = document.getElementById("to-do");
	newToDo.appendChild(newtask);
	let newToDone = document.getElementById("to-done");
	let fin_task = document.createElement("li");
	fin_task.innerText = newtask.innerText;
	newtask.appendChild(compBtn);
	newtask.appendChild(xBtn);
	compBtn.addEventListener('click', function(event){
		newToDone.appendChild(fin_task);
		newToDo.removeChild(newtask);
	});
	xBtn.addEventListener('click', function(event){
		newToDo.removeChild(newtask);
	});
});