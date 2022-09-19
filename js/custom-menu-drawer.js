const getArrayOfElementsByTag = ( $elements = [ 'body', 'footer', 'header', 'main' ] ) => {
  let filteredElements = $elements.filter( tag => { return document.getElementsByTagName( tag )[0] } ) || [];
  return filteredElements.map( tag => document.getElementsByTagName( tag )[0] ) || [];
};

const removeClass = ( $class = '', $elements = [] ) => {
  if ( $class && $elements.length ) {
    for( let i = 0; i < $elements.length; i++ ) {
      if ( $elements[i] ) {
        $elements[i].classList.remove( $class );
      }
    }
  }
};

const toggleClass = ( $class = '', $elements = [] ) => {
  if ( $class && $elements.length ) {
    for( let i = 0; i < $elements.length; i++ ) {
      if ( $elements[i] ) {
        $elements[i].classList.toggle( $class );
      }
    }
  }
};

const DrawerMenu = (() => {

  let debug = true;
  let info = { name : 'DrawerMenu', version : '1.0' };

  let elements = getArrayOfElementsByTag();
  let trigger = document.querySelectorAll('.js-toggle-menu-drawer') || [];

  //////////////////////////////////////////////////////////
  ////  Toggle Mobile Menu
  //////////////////////////////////////////////////////////

  const toggleMobileMenu = () => {
    trigger.forEach( el => {
      el.addEventListener('click',() => {
        console.log( '.js-toggle-menu-drawer clicked!' );
        toggleClass( 'mobile-menu--active', elements );
        el.classList.toggle( 'is-active' );
      });
    });
  };

  //////////////////////////////////////////////////////////
  ////  Close Menu
  //////////////////////////////////////////////////////////

  const closeMenu = () => {
    document.body.addEventListener('click', event => {
      let isMobileMenu = event.target.closest('#shopify-section-menu-drawer') ? true : false;
      let isMobileMenuTrigger = event.target.closest('.js-toggle-menu-drawer') ? true : false;
      if ( !isMobileMenu && !isMobileMenuTrigger ) {
        removeClass( 'mobile-menu--active', elements );
        trigger.forEach( el => {
          el.classList.remove( 'is-active' );
        })
      }
    });
  };

  //////////////////////////////////////////////////////////
  ////  Init
  //////////////////////////////////////////////////////////

  const init = ( $options = false ) => {
    if ( debug ) console.log( `${info.name}.init() Started` );
    closeMenu();
    toggleMobileMenu();
    if ( debug ) console.log( `${info.name}.init() Finished` );
  };

  //////////////////////////////////////////////////////////
  ////  Returned
  //////////////////////////////////////////////////////////

  return {
    debug,
    info,
    init,
  };

});

let drawerMenu = new DrawerMenu();
drawerMenu.init();
