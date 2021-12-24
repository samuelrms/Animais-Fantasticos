import outsideClick from './outside-click.js'

export default class DropdownMenu {
  constructor(dropdownMenus, events) {

    // define touchstart e click como argumento padrão
    // de events caso o usuario não defina
    if (events === undefined) {
      this.events = ['click', 'touchstart']
    } else{
      this.events = events
    }
    this.dropdownMenus = document.querySelectorAll(dropdownMenus)
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
    this.activeClass = 'active'
  }

  // Ativa o dropdown menu e adiciona
  // a função que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault()
    const element = event.currentTarget
    element.classList.add(this.activeClass)
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass)
    })
  }

  // Adiciona os eventos ao dropdown menu
  addDropdownMenusEvent() {
    this.dropdownMenus.forEach(menu => {
      this.events.forEach(userEvent => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent()
    }

    return this
  }
}
