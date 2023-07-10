console.log(JSON.parse(localStorage.getItem('cart')));
var itemBox= document.querySelector('.main');
var cartItems=JSON.parse(localStorage.getItem('cart'));
var costBox= document.querySelector('.cost');
function add(){
    var innerhtml='';
    var innerHtml='<div>ITEM</div><div>COST</div>';
    var total=0
    if(cartItems.length === 0){
        const b =`<div style= "color:white; position: relative ; top: 30% ; left: 100%" >EMPTY</div>`
        innerhtml+=b;
        itemBox.innerHTML=innerhtml;
        costBox.innerHTML=innerHtml;
    }else{
    cartItems.forEach((value,index) => {
        total+= (value.price) * (value.quantity);
        const b=`<div class="item">
        <div class="img"><img src="${value.image}"></div>
        <div>ITEM: ${value.title}</div>
        <div>Cost: $ ${value.price}</div>
        <div>Quantity: ${value.quantity}</div>
        <button class="cartb" onclick="console.log(cartItems[${index}].quantity);
        if(cartItems[${index}].quantity===1){
            cartItems.splice(${index},1);
        }else{
                cartItems[${index}].quantity -=1;
            };
            localStorage.setItem('cart',JSON.stringify(cartItems));
            add()">Remove</button></div>`;
        const c =`<div>${value.title}</div><div>${value.price * value.quantity}</div>`
        innerhtml+=b;
        innerHtml+=c;
        itemBox.innerHTML=innerhtml;
        costBox.innerHTML=innerHtml;
        })
    console.log(total)
    totalCost.innerHTML=innerHTml;
}}
add();
