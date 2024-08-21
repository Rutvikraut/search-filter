const fruits=[{
    id:1,
    image:'./images/orange.jpg',
    name:'Orange',
    price:'10'
},
{
    id:2,
    image:'./images/cherry.jpg',
    name:'Cherry',
    price:'30'
},
{
    id:3,
    image:'./images/apple.jpg',
    name:'Apple',
    price:'20'
},
{
    id:4,
    image:'./images/pineapple.jfif',
    name:'Pineapple',
    price:'40'
},{
    id:5,
    image:'./images/watermelon.jfif',
    name:'Watermelon',
    price:'60'
}]

let producthtml=document.querySelector('.products-container')
let searchproductname=document.querySelector('.js-search-box')
let summaryhtml=''
fruits.forEach((fruit)=>{
    summaryhtml+=`<div class="product">
                    <img src="${fruit.image}" alt="">
                    <div class="product-info">
                        <h3>${fruit.name}</h3>
                        <p>Price : $${fruit.price}</p>
                    </div>
                </div>`
})

producthtml.innerHTML=summaryhtml

searchproductname.addEventListener("input",()=>{
    let query=searchproductname.value.toLowerCase()
    let filteredfruits=fruits.filter((fruit)=>fruit.name.toLowerCase().includes(query))
    displayfruits(filteredfruits)
})

function displayfruits(fruitlist){
    let searchedfruit=''
    if(fruitlist.length>0)
    {
        fruitlist.forEach((fruit)=>{
            searchedfruit+=`<div class="product">
                    <img src="${fruit.image}" alt="">
                    <div class="product-info">
                        <h3>${fruit.name}</h3>
                        <p>Price : $${fruit.price}</p>
                    </div>
                </div>`
        })
    }
    else{
        searchedfruit+=`<h2>Fruit Not Found</h2>`
    }

    producthtml.innerHTML=searchedfruit
}