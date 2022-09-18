document.addEventListener("DOMContentLoaded", function() {
 

    let jsonString = `[
        {
            "menuName": "home",
            "name": "Hem",
            "href": "/index.html"
        },
        {
            "menuName": "project",
            "href": "#",
            "name": "Projekt",
            "children": [
                {
                    "menuName": "all",
                    "name": "Visa alla",
                    "href": "/project.html"
                },
                {
                    "menuName": "js",
                    "name": "Javascript",
                    "href": "#",
                    "children": [
                        {
                            "menuName": "checklist",
                            "name": "Checklista",
                            "href": "/projects/checklist.html"
                        },
                        {
                            "menuName": "calc",
                            "name": "Miniräknare",
                            "href": "/projects/calc.html"
                        },
                        {
                            "menuName": "ccalc",
                            "name": "Färgblandare",
                            "href": "/projects/colorcalc.html"
                        }
                    ]
                },
                {
                    "menuName": "css",
                    "name": "CSS",
                    "href": "#",
                    "children": [
                        {
                            "menuName": "anim",
                            "name": "Animation",
                            "href": "/projects/rotate.html"
                        },
                        {
                            "menuName": "grid",
                            "name": "Grid-exempel",
                            "href": "/projects/grid.html"
                        }
                    ]
                }
            ]
        },
        {
            "menuName": "about",
            "href": "/about.html",
            "name": "Om"
        }
    ]`;


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