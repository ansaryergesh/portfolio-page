const hamburger = (() => {
    const menu = () => {
        
        var hamburger = {
            navToggle: document.querySelector('.nav-toggle'),
            nav: document.querySelector('nav'),
            links: document.querySelector('.links'),
            expanded: document.querySelector('.expanded'),
    
            doToggle: function(e) {
                e.preventDefault();
                this.navToggle.classList.toggle('expanded');
                this.nav.classList.toggle('expanded');

                this.links.addEventListener('click', (e) => {
                    this.navToggle.classList.remove('expanded');
                    this.nav.classList.remove('expanded');
                })
            }
        };
        hamburger.navToggle.addEventListener('click', (e) =>{ 
            hamburger.doToggle(e);
        });
    }

    return{menu,}
})();

export {hamburger};