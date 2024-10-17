const modal = document.getElementById('contactModal');
const btn = document.querySelector('.talkbutton');
const span = document.querySelector('.close');

btn.addEventListener('click', () => {
    modal.style.display = 'block';
});

span.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
