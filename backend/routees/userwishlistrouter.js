const express=require("express")
const {Createproductmodel}=require("../models/product.model")
const{Creatwishlistmodel}=require("../models/wishlist.model")

userwishlistrouter=express.Router()

userwishlistrouter.get("/", async(req,res)=>
{
    res.send("wishlist page")
    // try {
    //      let cart=await Creatwishlistmodel.find()
    //      res.send(cart)
    // } catch (error) {
    //     res.send({message:"cannot get wishlist items"})
    // }

    
})


userwishlistrouter.post("/createcart", async(req,res)=>
 {
    let payload=req.body
    try {
        let newcart=new Creatwishlistmodel(payload)
        await newcart.save()
        res.send({message:"created new wishlist item"})
    } catch (error) {
        res.send({message:"cannot create new wishlist item"})
    }
    
 })



 userwishlistrouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    const wishlistitem=await Creatwishlistmodel.findOne({_id:ID})
    
    const wishlist_userID=wishlistitem.userID;
    const userID_jwt=req.body.userID
    try {
      if(userID_jwt===wishlist_userID){
          await Creatwishlistmodel.findByIdAndDelete({ _id: ID });
          res.send( {message: `deleted wishlist item of id ${ID}`});
      }
      else{
          res.send({"message":"you are not authorized to delete"})
      }
      
    } catch (error) {
      res.send({message:"cannot delete the wishlist item"});
    }
  });

// 63c8e295ab4bfc00332a5754
// userCartrouter.post("/createcart",async(req,res)=>
// {
//     const id=req.query.id

//     console.log(id)
//     let product=await Createproductmodel.find({_id:id})
//     console.log(product)
//   const  obj=product[0]
// obj.userID=req.body.userID
// console.log(obj)
//  const cartitem=await Createcartmodel.find({_id:id})
 
//  if(cartitem.length>0)
//  {
//     res.send("already in cart")
//  }
//  else{
//     try {
//         console.log("trycatch")
//         console.log(req.body.userID)
//         let newcart=await Createcartmodel.insertMany(req.body)
//         res.send(newcart)

//     } catch (error) {
//         console.log(error)
//         res.send("cannot create new cart item")
//     }
//  }
       
// })



module.exports={
    userwishlistrouter
}