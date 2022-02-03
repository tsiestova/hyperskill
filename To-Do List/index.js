document.addEventListener("DOMContentLoaded", () => {
    (function () {
        const inputTask = document.getElementById("input-task");
        const addTaskButton = document.getElementById("add-task-button");
        const taskList = document.getElementById("task-list");

        // TODO: Create DOM element +
        // TODO: add event listeners to the created DOM element
        // TODO: add created DOM element to the list

        inputTask.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const task = createItem(inputTask.value);
                addElementToList(task);

                addRemoveEvent(task.querySelector('.delete-btn'));
                addCheckEvent(task.querySelector('.input-check-task'));
                inputTask.value = '';
            }
        })

        addTaskButton.addEventListener("click", () => {
            const task = createItem(inputTask.value);
            addElementToList(task);

            addRemoveEvent(task.querySelector('.delete-btn'));
            addCheckEvent(task.querySelector('.input-check-task'));
            inputTask.value = '';
        })

        /**
         * Create a DOM element
         *
         * @param {String} value
         * @returns {HTMLElement}
         */
        const createItem = (value) => {
            const li = document.createElement("li");
            const randomNumber = (Math.random() * 1000).toFixed(4);

            li.classList.add("task-item");
            li.setAttribute("data-value", `${randomNumber}`);

            const html = `<label class="check-task_label">
                <input type="checkbox" class="input-check-task" data-value="${randomNumber}">
                <i class="fas fa-check"></i>
                <span class="task" data-value="${randomNumber}">${value}</span>
            </label>
            <button class="delete-btn" data-value="${randomNumber}">
                <i class="fas fa-plus-circle"></i>
            </button>`

            li.innerHTML = html;

            return li;
        }

        /**
         * Add element to the list
         *
         * @param {HTMLElement} element
         */
        const addElementToList = (element) => {
            taskList.appendChild(element)

            return taskList;
        }


        /**
         * Add a remove event for the DOM element
         *
         * @param {HTMLElement} element
         */

        const addRemoveEvent = (element) => {
            element.addEventListener('click', (event) => {

                const value = event.target.parentNode.getAttribute('data-value');
                const currentTask = findElementByDataValue(value);
                removingItem(currentTask);
            })
        }


        /**
         * Add a remove event for the DOM element
         *
         * @param {HTMLElement} element
         */
        const addCheckEvent = (element) => {
            element.addEventListener("change", (event) => {
                const value = event.target.getAttribute('data-value');
                const currentTask = findElementByDataValue(value);
                markingItem(currentTask);
            })
        }

        /**
         * Remove element from the list
         *
         * @param {String} value
         */
        const findElementByDataValue = (value) => {
            const list = Array.from(document.querySelectorAll('.task-item'));

            const task = list.find((item) => item.getAttribute("data-value") === value);

            return task;
        }

        const removingItem = (task) => {
            task.remove();
        }

        const markingItem = (task) => {
            task.classList.toggle("decor-text");
        }

    } ())
})


