const cloudinary = require('cloudinary').v2

require('dotenv').config()

const cloudinaryConfig = ()=>{
 try{
    cloudinary.config({
      U2FsdGVkX19RB0+rccR8QURHw8Ipe79IOwzPAmYkbi4pN0ZFpIpN2taNGpILtkTOwrsJ9uDyqv95jj3b9Q/imEV5vsuZaECIjIFxO+9yV8abyE8g33pCH1XeTfttRaZsKslcnT6S7lDSCnMdAHcBll4xdvq3fBMe3vhOmx4/OgcKFGuD3lfhj7WEc7ZR6mHh
    });
 }catch(err){
    console.log(err)
 }
}

module.exports = cloudinaryConfig