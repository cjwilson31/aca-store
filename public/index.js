document.getElementById("products").innerHTML =products;
document.getElementById("products").innerHTML = products.map(function(products) {
    return `<div> ${products.name}  
             <div><img src = ${products.imgUrl} alt = ${products.description} /></div>
              </div>`

})
const myFunc = ()=> {
    alert("onClick is working");
}

