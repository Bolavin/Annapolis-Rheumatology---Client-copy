function toggleMenu() {
    const menu = document.querySelector(".nav__menu-wrapper")
    const icon = document.querySelector(".mobile-icon")

    menu.classList.toggle("open")
    icon.classList.toggle("open")


}

function toggleDd() {
    const dropDown = document.querySelector(".dd-menu")
    const ddIcon = document.querySelector(".dd-icon")

    dropDown.classList.toggle("open")
    ddIcon.classList.toggle("open")

}

function toggleNoti() {
    const noti = document.querySelector(".noti")

    noti.classList.toggle("close")
}