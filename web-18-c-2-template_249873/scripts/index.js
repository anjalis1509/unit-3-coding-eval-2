// Add the coffee to local storage with key "coffee"

let url = " https://masai-mock-api.herokuapp.com/coffee/menu"
let cartData = JSON.parse(localStorage.getItem("coffee")) || []
 async function getData(){
    let res = await fetch(url)
    let data = await res.json()
    let results = data.menu
    let finalResult = results.data
    console.log(finalResult)
    appendData(finalResult)
 }

 getData()

 function appendData(data){
    data.forEach(function(el){
     let box =  document.createElement("div")
     box.id = "box"

     let img = document.createElement("img")
     img.src= el.image 

     let type = document.createElement("p")
     type.innerText = el.title
     type.id = "type"

     let price = document.createElement("h4")
     price.innerText = el.price
     price.id = "price"

     let add = document.createElement("button")
     add.innerText = "Add to Bucket"
     add.id = "add_to_bucket"
     add.addEventListener("click", function(){
         count()
     })
     add.addEventListener("click", function(){
         addToBucket(el)
     })

     box.append(img, type, price, add)
     document.getElementById("menu").append(box)
    })
 }


 //adding to bucket

 function addToBucket(el){
    cartData.push(el)
     localStorage.setItem("coffee", JSON.stringify(cartData))

 }

 function count(){
    let count = 0
     count++
     console.log(count)
     document.getElementById("coffee_count").innerText = count
    
 }