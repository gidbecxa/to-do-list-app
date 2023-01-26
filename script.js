document.querySelector('#btn').onclick = function() {
    if (document.querySelector('#nouvelle-tache input').value.length == 0) {
        alert("Kindly Enter Task Name!!!!")
    } else {
        document.querySelector('#liste').innerHTML += `
    <div class="taches">
        <span id="taskname">
            ${document.querySelector('#nouvelle-tache input').value}
        </span>
        <button class="delete">
            X
        </button>
    </div>
`;

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
}