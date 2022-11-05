function hideStickers() {
    const remove = document.getElementById('stickers')
    const add = document.getElementById('gifs');
    const gify = document.getElementById('gify');
    const sticky = document.getElementById('sticky');
   
    remove.style.display = 'none';
    add.style.display = 'flex';
    gify.style.backgroundColor = 'blue';
    sticky.style.color = 'white';
    sticky.style.backgroundColor = 'black';
}
function hideGifs() {
    const remove = document.getElementById('gifs')
    const add = document.getElementById('stickers');
    const gify = document.getElementById('gify');
    const sticky = document.getElementById('sticky');
    
    remove.style.display = 'none';
    add.style.display = 'flex';
    gify.style.backgroundColor = 'black';
    gify.style.color = 'white';
    sticky.style.backgroundColor = 'blue';
}
