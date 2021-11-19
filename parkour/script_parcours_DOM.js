console.log("Nombre de p: " + document.getElementsByTagName('p').length);
console.log(document.getElementById('coucou').innerHTML);
console.log(document.getElementsByTagName('a')[2].href);
console.log(document.getElementsByClassName('compte-moi').length);
console.log(document.querySelectorAll('li.compte-moi').length);
console.log(document.querySelectorAll('ol>li.compte-moi').length);
console.log(document.querySelectorAll('div>ul')[1].querySelectorAll('li')[0].innerHTML);