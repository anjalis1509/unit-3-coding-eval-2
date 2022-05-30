var arr =[]
function confirmOrder(){
    event.preventDefault()
    setTimeout(() => {
        const obj ={
         name : document.getElementById("name").value,
         num : document.getElementById("number").value,
         add : document.getElementById("address").value ,
        }
        document.getElementById("name").value = ""
        document.getElementById("number").value= ""
        document.getElementById("address").value= ""
         arr.push(obj)

        alert("Your order is sucessfully placed")
    }, 3000);
}