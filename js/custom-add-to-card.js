function printCartItemsCount( $count = 0 ) {
  console.log('printCartItemsCount() fired!');
  ( document.querySelectorAll('.js-cart-items-total') || [] ).forEach( item => {
    item.innerHTML = $count;
    if ( $count > 0 ) {
      item.classList.add('has-items');
    } else {
      item.classList.remove('has-items');
    }
  });
};

function updateCartItemsCount() {
  console.log('updateCartItemsCount() fired!');
  let config = {
    method: 'get',
    url: window.Shopify.routes.root + 'cart.js'
  };
  axios( config ).then(function (response) {
    printCartItemsCount( response.data.item_count );
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {});
};

( document.querySelectorAll('.js-add-item-to-cart') || [] ).forEach( button => {
  button.addEventListener('click', event => {
    alert.log('add to cart clicked!');
    updateCartItemsCount();
  });
});
