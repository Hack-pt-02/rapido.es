        // scroll enlaces y logo animation

        document.addEventListener('scroll', () => {
            if (window.scrollY > 350) {
                document.body.classList.add('hero_animation')
            } else {
                document.body.classList.remove('hero_animation')
            }
        })

        // side login bar animation

        let register = document.querySelector('#toggleRegister');
        let sideBar = document.querySelector('#registerSidebar');
        register.addEventListener('click', (e) => {
            e.preventDefault();
            sideBar.classList.add('active')
        })

        let closeSidebar = document.querySelector('#closeSidebar');
        closeSidebar.addEventListener('click', (e) => {
            e.preventDefault();
            sideBar.classList.remove('active')
        })

        //login 

        let login = document.querySelector('#toggleLogin');
        let loginSidebar = document.querySelector('#loginSidebar');
        login.addEventListener('click', (e) => {
            e.preventDefault();
            loginSidebar.classList.add('active')
        })

        let closeLogin = document.querySelector('#closeLogin');
        closeLogin.addEventListener('click', (e) => {
            e.preventDefault();
            loginSidebar.classList.remove('active')
        })

        // btn subir productos flotante
        let btnAllArticles = document.querySelector(".btnAllProducts");
        window.addEventListener('scroll', () => {
            if(window.scrollY > 500) {
                btnAllArticles.style.animation = "fadeBtn 1.5s ease-in-out forwards "

            }
        })

        //Primer uso de biblioteca gsap
        gsap.to(".hero_title", {
            y: 20,
            duration: 1.5,
            opacity: 1,
            ease: Power3.easeOut,
            delay: 0.8,
        });

        gsap.to(".hero_description", {
            y: 20,
            duration: 1.5,
            opacity: 1,
            delay: 1,
            ease: Power3.easeOut,
        });

        gsap.to(".hero_logo", {
            y: 20,
            duration: 1.5,
            opacity: 1,
            ease: Power3.easeOut
        })

        gsap.to(".hero_login", {
            y: 20,
            duration: 1.5,
            opacity: 1,
            ease: Power3.easeOut
        })

        gsap.from(".hero_items li", {
            opacity: 0,
            y: 20,
            duration: 1.5,
            delay: 1.2,
            stagger: 0.3
        });

        gsap.to(".hiro-callToAction", {
            y: 20,
            duration: 1.5,
            opacity: 1,
            delay: 1,
            ease: Power3.easeOut
        })