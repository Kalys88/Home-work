const elements = document.querySelectorAll('.element')
for (let i = 0; i < elements.length; i++) {
    if (i <= 2) {
        elements[i].style.color = 'red'
    }else {
        elements[i].style.color = 'green'
    }
}