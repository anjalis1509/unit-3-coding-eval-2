// On clicking remove button the item should be removed from DOM as well as localstorage.

var cartData = JSON.parse(localStorage.getItem("coffee"))
console.log(cartData)

cartData.forEach(function(el, index){
    let box = document.createElement("div")
    box.id = "box"

    let img = document.createElement("img")
    img.src= el.image 

    let type = document.createElement("p")
    type.innerText = el.title
    type.id = "type"

    let price = document.createElement("h4")
    price.innerText = el.price
    price.id = "price"

    let remove = document.createElement("button")
    remove.innerText = "remove"
    remove.id = "remove_coffee"
    remove.addEventListener("click", function(){
        removeFromCart(el)
    })

    box.append(img, type, price, remove)
    document.getElementById("menu").append(box)
})


// for removing the element
function removeFromCart(el, index){
    console.log(el)
    cartData.splice(index, 1)
    window.location.reload()
    localStorage.setItem("coffee", JSON.stringify(cartData))
}
function checkout(){
    window.location.href = "checkout.html"
}

var total = cartData.reduce(function(sum, el, index, arr){
    return sum+el.price
},0)
console.log(total)
document.getElementById("total_amount").innerText = total