const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)

// *** Change color ***
const select = document.querySelector('.color-button');

select.addEventListener('click', function() {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const changedColor = 
    `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`;
    document.body.style.backgroundColor = changedColor;
})
