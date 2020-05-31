const cards = document.querySelectorAll(".card");

const dropzones = document.querySelectorAll(".dropzone");

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('drag', drag);
    card.addEventListener('dragend', dragend);
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter);
    dropzone.addEventListener('dragover', dragover);
    dropzone.addEventListener('dragleave', dragleave);
    dropzone.addEventListener('drop', drop);
});

function dragstart() {
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'));

    this.classList.add('is-dragging');
}

function drag() {}

function dragend() {
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

function dragenter() {
    console.log('dropzone: card enter in zone');
}

function dragover() {
    this.classList.add("dragover");

    const cardBeingOver = document.querySelector('.is-dragging');

    this.appendChild(cardBeingOver);
}

function dragleave() {
    this.classList.remove("dragover");
}

function drop() {
    console.log('dropzone: card is dropped');
    this.classList.remove("dragover");
}