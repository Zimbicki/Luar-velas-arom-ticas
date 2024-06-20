function switch_menu() {
    console.log(232)
    let dropdown_menu = document.getElementById("drop-down")
    console.log(dropdown_menu)
    if (dropdown_menu) {
        if (dropdown_menu.classList.contains("opacity-[0]")) {
            dropdown_menu.classList.remove("opacity-[0]")
        } else {
            dropdown_menu.classList.add("opacity-[0]")
        }
     }

}

function link(link) {
    window.location.href = link
}