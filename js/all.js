let grid = document.querySelector('.grid');

// masonry
let msnry = new Masonry( grid, {
  itemSelector: 'none',
  columnWidth: '.grid-sizer',
  percentPosition: true,
  gutter: 10
});


//imagesLoaded
imagesLoaded(grid, function(){
  grid.classList.remove('are-images-unloaded');
  msnry.options.itemSelector = '.grid-item';
  let items = grid.querySelectorAll('.grid-item');
  msnry.appended(items);
  msnry.layout(); 
  
});