// --------------------------Modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

// --------------------------Story Modal
const openStoryModalButtons = document.querySelectorAll('[data-storyModalTarget]')
const closeStoryModalButtons = document.querySelectorAll('[data-close-button]')

openStoryModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const storyModal = document.querySelector(button.dataset.storymodaltarget)
        openStoryModal(storyModal)
    })
})

closeStoryModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const storyModal = button.closest('.storyModal')
        closeStoryModal(storyModal)
    })
})

overlay.addEventListener('click', () => {
    const storyModal = document.querySelectorAll('.storyModal.active')
    storyModal.forEach(storyModal => {
        closeModal(storyModal)
    })
})

function openStoryModal(storyModal) {
    if (storyModal == null) return
    storyModal.classList.add('active')
    overlay.classList.add('active')
}

function closeStoryModal(storyModal) {
    if (storyModal == null) return
    storyModal.classList.remove('active')
    overlay.classList.remove('active')
}
// --------------------------Log In Modal
const openLogInModalButtons = document.querySelectorAll('[data-logInModalTarget]')

openLogInModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const logInModal = document.querySelector(button.dataset.loginmodaltarget)
        openLogInModal(logInModal)
    })
})

overlay.addEventListener('click', () => {
    const logInModal = document.querySelectorAll('.logInModal.active')
    logInModal.forEach(logInModal => {
        closeLogInModal(logInModal)
    })
})

function openLogInModal(logInModal) {
    if (logInModal == null) return
    logInModal.classList.add('active')
    overlay.classList.add('active')
}

function closeLogInModal(logInModal) {
    if (logInModal == null) return
    logInModal.classList.remove('active')
    overlay.classList.remove('active')
}


// -----------------------Follow Button
const followButton = document.getElementById("followButton")

followButton.addEventListener ('click', () => {
    if (followButton.textContent == "Follow"){
        followButton.textContent = "Following"
        followButton.style.backgroundColor = "white";
        followButton.style.color = "rgb(64, 141, 230)";
        followButton.style.border = "1px rgb(64, 141, 230) solid";
        // followButton.style.width = "80px";  
    }
    else if (followButton.textContent == "Following"){
        followButton.textContent = "Follow"
        followButton.style.backgroundColor = "rgb(64, 141, 230)";
        followButton.style.color = "white";
        // followButton.style.width = "60px";
    }
})


// // --------------------------Like Button

// const likeButton = document.getElementById("likeButton")

// likeButton.addEventListener ('click', () => {
//     if (likeButton.textContent == "♡") {
//         likeButton.textContent = "❤️"
//         likeButton.style.fontSize = "18px"
//     }
//     else if (likeButton.textContent == "❤️") {
//         likeButton.textContent = "♡"
//         likeButton.style.fontSize = "25px"
//     }
// })