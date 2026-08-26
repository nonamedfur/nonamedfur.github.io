(function() {
    const t = localStorage.getItem('tabTitle');
    const i = localStorage.getItem('tabIcon');
    if (t) document.title = t;
    if (i) {
        let link = document.querySelector('link[rel="shortcut icon"], link[rel="icon"]');
        if (!link) {
            link = document.createElement('link');
            link.rel = 'shortcut icon';
            document.head.appendChild(link);
        }
        link.href = i;
    }
})();   
