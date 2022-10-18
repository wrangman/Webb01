document.addEventListener("DOMContentLoaded", function() {
                                                                        //Huvudmeny
    let jsonString = `[                                 
        {
            "menuItem": "home",
            "name": "Hem",
            "href": "/index.html"
        },
        {
            "menuItem": "portfolio",
            "href": "#",
            "name": "Portfolio",
            "children": [
                {
                    "menuItem": "all",
                    "name": "Visa allt",
                    "href": "/portfolio.html"
                },
                {
                    "menuItem": "basics",
                    "name": "HTML",
                    "href": "#",
                    "children": [
                        {
                            "menuItem": "htmldiv",
                            "name": "HTML <div>",
                            "href": "/projects/div.html"
                        },
                        {
                            "menuItem": "history",
                            "name": "HTMLs historia",
                            "href": "/projects/history.html"
                        }
                    ]
                },  
                {
                    "menuItem": "css",
                    "name": "CSS",
                    "href": "#",
                    "children": [
                        {
                            "menuItem": "pos",
                            "name": "Position",
                            "href": "/projects/position/index.html"
                        },
                        {
                            "menuItem": "anim",
                            "name": "Animation",
                            "href": "/projects/rotate.html"
                        },
                        {
                            "menuItem": "grid",
                            "name": "Grid-exempel",
                            "href": "/projects/grid.html"
                        },
                        {
                            "menuItem": "porto",
                            "name": "Portfolio med Grid",
                            "href": "/portfolio.html"
                        },
                        {
                            "menuItem": "nocco",
                            "name": "NOCCO omgjord",
                            "href": "/projects/nocco/index.html"
                        },
                        {
                            "menuItem": "colortheory",
                            "name": "Avancerad färgteori",
                            "href": "/projects/colortheory/index.html"
                        }
                    ]
                },
                {
                    "menuItem": "js",
                    "name": "Javascript",
                    "href": "#",
                    "children": [
                        {
                            "menuItem": "checklist",
                            "name": "Checklista",
                            "href": "/projects/checklist.html"
                        },
                        {
                            "menuItem": "calc",
                            "name": "Miniräknare",
                            "href": "/projects/calc.html"
                        },
                        {
                            "menuItem": "ccalc",
                            "name": "Färgblandare",
                            "href": "/projects/colorcalc.html"
                        },
                        {
                            "menuItem": "scalc",
                            "name": "Valutaomvandlare",
                            "href": "/projects/simple_calc.html"
                        }
                    ]
                }
            ]
        },
        {
            "menuItem": "about",
            "href": "/about.html",
            "name": "Om"
        }
    ]`; //Huvudmeny


    let menus = JSON.parse(jsonString);

    let navParent = document.querySelector('nav');

    function iterateJsonMenu(menus, initial = true, key='') {

        const ul = document.createElement('ul');
        initial ? ul.classList.add('nav') : '';
    
        //check if its initial then append ul or else append inside the li 
        
        if(initial){
            navParent.appendChild(ul);
        }else{
            let position = document.querySelector(`[data-position="${key}"]`);
            if(position) position.appendChild(ul);
        }
                
        menus.forEach((menu, key) => {
            const li = document.createElement('li');
            menu?.children ? li.classList.add('dropdown') : '';
            
            let str = menu.name.replace(/\s/g, '')+key;
            li.setAttribute('data-position', str);
            
            ul.appendChild(li);
            
            const a = document.createElement('a');
            a.setAttribute('href', menu.href);
            a.textContent = menu.name;
            li.appendChild(a);
            
            if(menu.children){
                iterateJsonMenu(menu.children, false, str);
            }
        });
    }

    iterateJsonMenu(menus);
    
    let allList = document.querySelectorAll('li[data-position]');
    
    if(allList.length){
      allList.forEach((each) => each.removeAttribute('data-position'));
    }

    const li = document.querySelectorAll('li.dropdown a');
    const btn = document.querySelector('.nav-btn');
    
    btn.addEventListener('click', e => {
        const nav = document.querySelector('ul.nav');
        if(nav) nav.classList.toggle('toggle');
    });
    
    li.forEach((each)=>{
        if (each.nextElementSibling !== null) {
            each.addEventListener('click', e=>{
                if (window.innerWidth < 868) {
                  e.target.parentElement.classList.toggle("active");  
                }
            });
        }
    });
});
