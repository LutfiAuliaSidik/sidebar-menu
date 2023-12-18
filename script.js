const clickMenuHaveChild = () => {
  const menu = document.querySelector('.menu-parent')
  const childMenu = document.querySelector('.menu-child')
  const iconArrowMenu = document.querySelector('.menu-parent .arrow-right')

  menu.addEventListener('click', () => {
    const isActive = childMenu.classList.toggle('active')
  
    if (isActive) {
      iconArrowMenu.className = "bi bi-caret-down-fill"
    } else {
      iconArrowMenu.className = "bi bi-caret-right-fill"
    }

  })
}

clickMenuHaveChild()
