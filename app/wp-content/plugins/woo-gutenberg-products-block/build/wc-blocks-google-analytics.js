(()=>{"use strict";const e=window.wp.i18n,t=window.wp.hooks,o="woocommerce-google-analytics",c="experimental__woocommerce_blocks",r=(e,t)=>{const o=e.sku?e.sku:"#"+e.id,c="categories"in e&&e.categories.length?e.categories[0].name:"";return{id:o,name:e.name,quantity:t,category:c,price:(parseInt(e.prices.price,10)/10**e.prices.currency_minor_unit).toString()}},n=(e,t)=>{const o=e.sku?e.sku:"#"+e.id,c=e.categories.length?e.categories[0].name:"";return{id:o,name:e.name,list_name:t,category:c,price:(parseInt(e.prices.price,10)/10**e.prices.currency_minor_unit).toString()}},i=(e,t)=>{if("function"!=typeof gtag)throw new Error("Function gtag not implemented.");console.log(`Tracking event ${e}`),window.gtag("event",e,t)};let a=-1;const s=e=>({storeCart:t})=>{var o;a!==e&&(i(0===e?"begin_checkout":"checkout_progress",{items:t.cartItems.map(r),coupon:(null===(o=t.cartCoupons[0])||void 0===o?void 0:o.code)||"",currency:t.cartTotals.currency_code,value:(parseInt(t.cartTotals.total_price,10)/10**t.cartTotals.currency_minor_unit).toString(),checkout_step:e}),a=e)},d=({step:e,option:t,value:o})=>()=>{i("set_checkout_option",{checkout_step:e,checkout_option:t,value:o}),a=e};(0,t.addAction)(`${c}-checkout-render-checkout-form`,o,s(0)),(0,t.addAction)(`${c}-checkout-set-email-address`,o,s(1)),(0,t.addAction)(`${c}-checkout-set-shipping-address`,o,s(2)),(0,t.addAction)(`${c}-checkout-set-billing-address`,o,s(3)),(0,t.addAction)(`${c}-checkout-set-selected-shipping-rate`,o,(({shippingRateId:t})=>{d({step:4,option:(0,e.__)("Shipping Method","woo-gutenberg-products-block"),value:t})()})),(0,t.addAction)(`${c}-checkout-set-active-payment-method`,o,(({paymentMethodSlug:t})=>{d({step:5,option:(0,e.__)("Payment Method","woo-gutenberg-products-block"),value:t})()})),(0,t.addAction)(`${c}-checkout-submit`,o,(()=>{i("add_payment_info")})),(0,t.addAction)(`${c}-cart-add-item`,o,(({product:t,quantity:o=1})=>{i("add_to_cart",{event_category:"ecommerce",event_label:(0,e.__)("Add to Cart","woo-gutenberg-products-block"),items:[r(t,o)]})})),(0,t.addAction)(`${c}-cart-remove-item`,o,(({product:t,quantity:o=1})=>{i("remove_from_cart",{event_category:"ecommerce",event_label:(0,e.__)("Remove Cart Item","woo-gutenberg-products-block"),items:[r(t,o)]})})),(0,t.addAction)(`${c}-cart-set-item-quantity`,o,(({product:t,quantity:o=1})=>{i("change_cart_quantity",{event_category:"ecommerce",event_label:(0,e.__)("Change Cart Item Quantity","woo-gutenberg-products-block"),items:[r(t,o)]})})),(0,t.addAction)(`${c}-product-list-render`,o,(({products:t,listName:o=(0,e.__)("Product List","woo-gutenberg-products-block")})=>{0!==t.length&&i("view_item_list",{event_category:"engagement",event_label:(0,e.__)("Viewing products","woo-gutenberg-products-block"),items:t.map(((e,t)=>({...n(e,o),list_position:t+1})))})})),(0,t.addAction)(`${c}-product-view-link`,o,(({product:e,listName:t})=>{i("select_content",{content_type:"product",items:[n(e,t)]})})),(0,t.addAction)(`${c}-product-search`,o,(({searchTerm:e})=>{i("search",{search_term:e})})),(0,t.addAction)(`${c}-product-render`,o,(({product:e,listName:t})=>{e&&i("view_item",{items:[n(e,t)]})})),(0,t.addAction)(`${c}-store-notice-create`,o,(({status:e,content:t})=>{"error"===e&&i("exception",{description:t,fatal:!1})}))})();