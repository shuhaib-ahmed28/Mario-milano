const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active')
})
btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active')
})

//to remove items from the cart

document.addEventListener('DOMContentLoaded', loadfood())
function loadfood(){
    removeItemFromCart();
}

function removeItemFromCart(){
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click', removeItem() )
    });


}   
function removeItem(){
    this.parentElement.remove();
}


// function AddToCart (){
//     let btnAddToCart= document.querySelectorAll('.btn');
//     btnAddToCart.forEach((btnn)=>{
//         btnn.addEventListener('click' , cartItems())
//     });
//     function cartItems(){
//         this.parentElement.add();
//     }
// }