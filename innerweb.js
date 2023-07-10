var itemBox= document.querySelector('.main');
var innerhtml= ''
var cart=JSON.parse(localStorage.getItem('cart'));
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data=> data.products.forEach((value,index) => {
    const b=`<div class="item">
    <div class="img"><img src=${value.images[0]}></div>
    <div>ITEM: ${value.title}</div>
    <div>Cost: $ ${value.price}</div>
    <div class="addtocart"></div>
    <button class="cartb" onclick="if(cart.find(prod => prod.title=== '${value.title}')){
        cart[cart.findIndex(prod => prod.title=== '${value.title}')].quantity +=1;
    }else{
        cart.push({title:'${value.title}',price:'${value.price}',image:'${value.images[0]}',quantity:1});
    };
    console.log(cart);
    localStorage.setItem('cart',JSON.stringify(cart));
    document.querySelectorAll('.addtocart')[${index}].innerHTML='Added to cart';
    setTimeout(()=>{
        document.querySelectorAll('.addtocart')[${index}].innerHTML=''
    },500);">Add to cart</button>
    </div>`;
    innerhtml+=b;
    itemBox.innerHTML=innerhtml;
}))

var a='';
document.querySelector('.icon').addEventListener('click',()=>{
    var innerHtml=''
    a= document.querySelector('.search').value;
    fetch(`https://dummyjson.com/products/search?q=${a}`)
    .then(res => res.json())
    .then(data=> data.products.forEach((value)=> {
        const b=`<div class="item">
        <div class="img"><img src=${value.images[0]}></div>
        <div>ITEM: ${value.title}</div>
        <div>Cost: $ ${value.price}</div>
        <div class="addtocart"></div>
        <button class="cartb" onclick="if(cart.find(prod => prod.title=== '${value.title}')){
            cart[cart.findIndex(prod => prod.title=== '${value.title}')].quantity +=1;
        }else{
            cart.push({title:'${value.title}',price:'${value.price}',image:'${value.images[0]}',quantity:1});
        };
        console.log(cart);
        localStorage.setItem('cart',JSON.stringify(cart));
        document.querySelector('.addtocart').innerHTML='Added';
        setTimeout(()=>{
            document.querySelector('.addtocart').innerHTML=''
        },500);">Add to cart</button>
        </div>`;
        innerHtml+=b;
        itemBox.innerHTML=innerHtml;
        
    }))
})


