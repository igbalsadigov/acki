const div = document.querySelector('.productContainer')
const count = document.querySelector('.alo')


let db

function getAllData() {
    axios.get('https://dummyjson.com/products').then(res => {
            db = res.data.products
            db.forEach(item => {
                let box = document.createElement("div");
                box.className = "cards";
                box.innerHTML = `
                <img src=${item.thumbnail} alt="">
                        <h3>${item.title}</h3>
                        <p${item.brand}</p>
                        <h3>${item.price}</h2>
                        <button onclick="addToCart(${item.id})">ADD TO CART</button>
                        </div>
                `
                div.appendChild(box)
            })
        })
}



function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

getAllData();
