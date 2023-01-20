console.log("product page")

const query="ring"
async function renderdata(){
    try {
        let res=await fetch(`http://localhost:6060/usersrender/products?type=${query}`)
        let data=await res.json()
        console.log(data)
        console.log("welcome to home page")
    } catch (error) {
        
    }
}

// renderdata()
let sort=document.getElementById("sort")
sort.addEventListener("click",()=>{
    sorting()
})

function sorting(){
    console.log("sort")
    let value=document.querySelector("#sort").value;
    console.log(value)
    // if(value=="rec"){
    //  production()
    // }
    // if(value=="desc"){
    //  console.log("obj");
    //  sortHightoLow()
    // }
    // if(value=="asc"){
    //  sortLowtoHigh()
    // }
 }


 let price1=document.getElementById("price1")

  price1.addEventListener("click",()=>
 {
    price(price1)
 })

 let price2=document.getElementById("price2")

 price2.addEventListener("click",()=>
{
   price(price2)
})

let price3=document.getElementById("price3")

 price3.addEventListener("click",()=>
{
   price(price3)
})


 function price(el)
 {
    console.log(el.value)
 }