const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

// #issue: menu toggle isnt working , trying to fix the damn issue
    const toggleMenu =() =>{
        mobileMenu.classlist.toggle('hidden')
        mobileMenu.classlist.toggle('flex')

    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)