( document.querySelectorAll('.js-toggle-menu-drawer') || [] ).forEach( button => {
  button.addEventListener('click', event => {
    alert('clicked!');
  })
});
