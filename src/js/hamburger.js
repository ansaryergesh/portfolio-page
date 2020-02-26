const hamburger = (() => {
    const container = document.querySelector('.main-header');
    const menu = () => {
        var hamburger = {
            navToggle: document.querySelector('.nav-toggle'),
            nav: document.querySelector('nav'),
            expanded: document.querySelector('.expanded'),
    
            doToggle: function(e) {
                e.preventDefault();
                this.navToggle.classList.toggle('expanded');
                this.nav.classList.toggle('expanded');

            }
        };
        hamburger.navToggle.addEventListener('click', (e) =>{ 
            hamburger.doToggle(e);
        });
        
    }

    return{menu,}
})();

export {hamburger};