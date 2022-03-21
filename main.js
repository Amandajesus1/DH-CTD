let bodyReference = document.querySelector('body')
let changeClassButtonRefernece = document.querySelector('#changeClassButton')

function changeTheme() {

    bodyReference.classList.toggle('dark')

    if( bodyReference.classList.contains('dark') ) {

        changeClassButtonRefernece.innerText = '☀️'

    } else {

        changeClassButtonRefernece.innerText = '🌙'

    }

}