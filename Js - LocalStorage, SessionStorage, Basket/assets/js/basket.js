"use strict"




let tableBody = document.querySelector("tbody");
let products = JSON.parse(localStorage.getItem("basket"));




getBasketDatas();
function getBasketDatas() {
    if (products != null) {
        for (const product of products) {
            tableBody.innerHTML += `<tr data-id="${product.id}">
            <td><img src = "${product.img}" alt="">
            </td>
            <td>
              ${product.name}
            </td>
            <td>
            ${product.description}
            </td>
            <td>
            ${product.price}
            </td>
            <td>
            ${product.count}
            </td>
            <td>
            <i class="fa-regular fa-circle-xmark delete"></i>
            </td>
            </tr>`
        }
    }

    else {

        showAlert();
    }
}


function showAlert() {
    document.querySelector("table").classList.add("d-none");
    document.querySelector(".alert-dark").classList.remove("d-none");
}



function getBasketCount(arr) {
    let sum = 0;
    for (const item of arr) {
        sum += item.count
    }

    document.querySelector("sup").innerText = sum;
}

getBasketCount(products)



function deleteProduct(id) {
    products = products.filter(m => m.id != id);
    localStorage.setItem("basket", JSON.stringify(products));
    showTotalPrice()
    
}


let deleteIcons = document.querySelectorAll(".delete");

deleteIcons.forEach(icon => {
    icon.addEventListener("click", function () {
        let id = parseInt(this.parentNode.parentNode.getAttribute("data-id"))
        deleteProduct(id)
        this.parentNode.parentNode.remove();

        if (products.length == 0) {
            showAlert();
        }
        getBasketCount(products)


    })
})



if (products.length == 0) {
    localStorage.removeItem("basket");
    showAlert();
}



function showTotalPrice(){
    if (JSON.parse(localStorage.getItem("basket")) !=null) {
        let title = document.querySelector(".total-title");
        title.classList.remove("d-none");
        title.nextElementSibling.classList.remove("d-none");

        let sum = 0;
        for (const item of products) {
            sum +=parseInt(item.price) ;
        }

        title.nextElementSibling.innerText = sum + "$";
    }
}

showTotalPrice();


