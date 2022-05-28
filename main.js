        // scroll enlaces y logo animation

        document.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                document.body.classList.add('hero_animation')
            } else {
                document.body.classList.remove('hero_animation')  
            }
        })

        // side login bar animation
     
        /* let login = document.querySelector('#toggleMenu');
        let sideBar = document.querySelector('#loginSideBar');
        login.addEventListener('click', () => {
            sideBar.classList.toggle('active')
        }) */