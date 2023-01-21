console.log("cart page")



async function Cart()
{
    try {
        let res=await fetch(`http://localhost:6060/cart`)
        let data=await res.json()
        console.log(data)
        renderdata(data)
    } catch (error) {
        console.log(error)
    }
}

Cart()




function renderdata(data)
{
   let display=data.map((element)=>
   {
      return`
      <div id="card">
                    <div id="cardtop">
                        <div>
                            <p id="seller">${element.seller}</p>
                        </div>
                        <div >
                            
                            </div>
                    </div>
                    <div id="midcard">
                    <img id="image" src=${element.image} alt="">
                    <p  id="price">₹${element.price}/-</p>
                    <p id="name">${element.name}</p>
                    </div>
                    <div id="trial">
                        <div>
                           <button id="tryhome" ><i class="fa fa-home" aria-hidden="true"></i> Book Try at Home</button> 
                        </div>
                    <div>
                       <button id="livevedio"><i class="fa fa-video-camera" aria-hidden="true"></i>live vedio call</button> 
                    </div>
                    
                    </div id=cart>
                    
                    <button id="addtowishlist" data-id=${element._id}>Add to wishlist</button>
                </div>`
   })

    document.getElementById("renderdata").innerHTML=display.join(" ")

    // let btn=document.querySelectorAll("#addtocart");
    // for(let addCardBtn of btn){
    //     addCardBtn.addEventListener("click",function(e){
    //         // alert("Added On cart Page")
    //         card_data(e.target.dataset.id);
    // })
    // };


    // let wishlist=document.querySelectorAll("#wishlist");
    // for(let wishlistBtn of wishlist){
    //   wishlistBtn.addEventListener("click",function(e){
    //         // alert("Added On cart Page")
    //         card_data(e.target.dataset.id);
    // })
    // };
}