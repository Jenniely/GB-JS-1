let cartItems = [];
let products = [{
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest",
        category: "men clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        category: "men clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        category: "men clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    }, {
        id: 4,
        "title": "Mens Casual Slim Fit",
        price: 15.99,
        description: "The color could be slightly different between on the screen and in practice.",
        category: "men clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    },
    {
        id: 5,
        title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. ",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    },
    {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
    }
];


function createCatalog() {

    let list = document.getElementById('catalog-list');

    for (i = 0; i < products.length; i++) {

        let li = document.createElement('li');

        li.classList.add('catalog-item');

        let name = document.createElement('h3');
        name.classList.add('catalog-item-name');
        name.innerHTML = products[i].title;

        let image = document.createElement('img');
        image.classList.add('catalog-item-image');
        image.src = products[i].image;

        let desc = document.createElement('p');
        desc.classList.add('catalog-item-description');
        desc.innerHTML = products[i].description;

        let price = document.createElement('p');
        price.classList.add('catalog-item-price');
        price.innerHTML = products[i].price;

        let button = document.createElement('button');
        button.classList.add('catalog-item-add');
        button.value = products[i].id;
        button.innerHTML = 'Add to Cart';
        button.addEventListener('click', function () {
            addToCart(event.target.value);
        });

        li.appendChild(name);
        li.appendChild(image);
        li.appendChild(desc);
        li.appendChild(price);
        li.appendChild(button);
        list.appendChild(li);
    }

}

function updateCart() {

    let list = document.getElementById('cart-items-list');
    let empty = document.getElementById('empty');
    let quantitySpan = document.getElementById('cart-count');
    let totalSpan = document.getElementById('cart-total');

    list.innerHTML = '';
    let total = 0;
    let quantity = 0;

    if (cartItems.length == 0) {
        empty.classList.remove('hidden');
    } else empty.classList.add('hidden');

    cartItems.forEach(cartItem => {
        let product = products.find(product => product.id == cartItem.id);

        total += product.price*cartItem.count;
        quantity += cartItem.count;

        let row = document.createElement('li');
        row.classList.add('cart-items-item');
        list.appendChild(row);

        let rowName = document.createElement('p');
        rowName.classList.add('cart-items-item-name');
        row.appendChild(rowName);

        let itemQuantity = document.createElement('p');
        itemQuantity.classList.add('cart-items-item-quantity');
        row.appendChild(itemQuantity);

        let btnGroup = document.createElement('div');
        row.appendChild(btnGroup);

        let inc = document.createElement('button');
        inc.classList.add('cart-items-increment');
        inc.value = product.id;
        inc.innerHTML = '+';
       

        let dec = document.createElement('button');
        dec.classList.add('cart-items-decrement');
        dec.value = product.id;
        dec.innerHTML = '-';

        btnGroup.appendChild(inc);
        btnGroup.appendChild(dec);

   inc.addEventListener('click', function () {
    addToCart(event.target.value);
});
        dec.addEventListener('click', function () {
            delFromCart(event.target.value);
        });

        rowName.innerHTML = product.title;
        itemQuantity.innerHTML = cartItem.count;
    })
    totalSpan.innerHTML = total;
    quantitySpan.innerHTML = quantity;
}


function addToCart(id) {
    let ind = cartItems.findIndex(el => el.id === id);
    if (ind == -1) {
        cartItems.push({id: id, count: 1});
    } else {
        cartItems[ind].count += 1;
    }
    updateCart();
}

function delFromCart(id) {
    let ind = cartItems.findIndex(el => el.id == id);
    if (cartItems[ind].count == 1) {
        cartItems.splice(ind, 1);
    } else {
        cartItems[ind].count -= 1;
    }
    updateCart();
}

createCatalog();
updateCart();