const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

let count = 0;

btns.forEach(function(v) {
    v.addEventListener("click", function(e) {
        const click = e.currentTarget.classList;
        if (click.contains('dec')) {
            count--;
        } else if (click.contains('inc')) {
            count++;
        } else {
            count = 0;
        }

        if (count > 0) value.style.color = 'green';
        if (count < 0) value.style.color = 'red';
        if (count === 0) value.style.color = 'gray';

        value.textContent = count
    });
});