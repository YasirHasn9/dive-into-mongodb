// select the necessary elements
const button = document.querySelector('.addButton')
var html_input = document.querySelector('.input')
const todo_container = document.querySelector('.todo_container')


// create a class for each new todo/input with its functionalities
class Todo {
	constructor(value) {
		this.createTodoBox(value)
	}

	createTodoBox(val) {
        // create a todo box 
		let todoBox = document.createElement('div')
		todoBox.classList.add('item')
        // create a new input
		let newInput = document.createElement('input')
        // set the value to the passed parameter
		newInput.value = val 
        // by setting the disabled attribute in the input to true
        // we disabled 
		newInput.disabled = true
        // add a class to the new input
		newInput.classList.add('item_input')
		newInput.type = 'text'

        // create a button for updating a todo
		let editButton = document.createElement('button')
		editButton.innerHTML = 'EDIT'
		editButton.classList.add('editButton')

        // create a button for deleting a todo
		let removeButton = document.createElement('button')
		removeButton.innerHTML = 'REMOVE'
		removeButton.classList.add('removeButton')

        // append the todo box to the todo container
		todo_container.appendChild(todoBox)

        // append the newly created buttons and input to the todoBox
		todoBox.appendChild(newInput)
		todoBox.appendChild(editButton)
		todoBox.appendChild(removeButton)

		editButton.addEventListener('click', () => this.edit(newInput))
		removeButton.addEventListener('click', () => this.remove(todoBox, newInput.value))
	}

    // take an old input
	async edit(oldTodo) {
        // update the old value
		const updatedValue = prompt('Enter new msg:', oldTodo.value)
		oldTodo.value = updatedValue
        // send the updated value to our api
		await fetch('/api/modify', {
			method: 'POST',
			body: JSON.stringify({ old: oldTodo.value, new: updatedValue }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}

    // takes a todo a value
	async remove(todo, value) {
        // remove it from the container
		todo_container.removeChild(todo)
        // send the information to our api
		await fetch('/api/delete', {
			method: 'POST',
			body: JSON.stringify({ record: value }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
}

async function check() {
    // if client enter a todo list
    if (html_input.value != '') {
        // create a class 
        new Todo(html_input.value)

        await fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({ record: html_input.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        html_input.value = ''
    }
}

async function boot() {
    const records = await fetch('/api/get').then((t) => t.json())
    records.forEach(({ record }) => {
        new Todo(record)
    })
}
boot()

button.addEventListener('click', check)
window.addEventListener('keydown', (e) => {
	if (e.which == 13) {
		check()
	}
})