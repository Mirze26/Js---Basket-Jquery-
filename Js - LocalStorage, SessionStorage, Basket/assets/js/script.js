"use strict"

// localStorage.setItem("Name", "Mirze");
// localStorage.setItem("Surname","Beshirzade");
// console.log(localStorage.getItem("Name"));


// let names = ["Pervin","Elekber","Aqshin"];
// localStorage.setItem("names",JSON.stringify(names));
// console.log(JSON.parse (localStorage.getItem("names")))

//document.querySelector("button").onclick = function(){
// localStorage.removeItem("Name");
//localStorage.clear();

//     let datas = JSON.parse (localStorage.getItem("names"));

//     for (const item of datas) {
//         console.log(item)
//     }

// } 

//------------------------------------------------------------------------

// sessionStorage.setItem("email", "test@gmail.com");
// console.log(sessionStorage.getItem("email"))

// document.querySelector("button").onclick = function(){
//     sessionStorage.removeItem("email")
// }

//------------------------------------------------------------------------------


let cardBtns = document.querySelectorAll("#shop a");

let products = [];

if (localStorage.getItem("basket") != null) {
    products = JSON.parse(localStorage.getItem("basket"));
}





cardBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        let productImg = this.parentNode.previousElementSibling.getAttribute("src");
        let productName = this.parentNode.firstElementChild.innerText;
        let producAbout = this.previousElementSibling.innerText;
        let productPrice = parseInt (this.parentNode.children[1].innerText);
        let productId = parseInt(this.parentNode.parentNode.getAttribute("data-id"));

        console.log(productPrice)

        let existProduct = products.find(m => m.id == productId);

        if (existProduct != undefined) {
            existProduct.count += 1;
            existProduct.price = productPrice * existProduct.count;

        }
        else {
            products.push({
                id: productId,
                name: productName,
                img: productImg,
                description: producAbout,
                price: productPrice,
                count: 1
            })
        }

        localStorage.setItem("basket", JSON.stringify(products));
        getBasketCount(products);



    })
});


function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count
    }

    document.querySelector("sup").innerText = sum;
}


getBasketCount(products);