const mongoose = require('mongoose');
require('dotenv').config();



const connectDB = async()=>{
    try{
        U2FsdGVkX185C9mH4rgGNUeypBDLLvLRatcUpWhmUw+rJFMq2GEtxk1y5o27yxX8AJH5hy5X5q28Ol4INhkRHdBY1xSMmMEhLWeYyQYKbtSMMfBzrSbe5OO4CBLFuNxb800qeRIKHMZUfBBs/QK6Tug4USNI6e0oN62H/ylH+Bg=
    }catch(err){
        console.error('failed to connect', err);
        process.exit(1);
    }
}

module.exports = connectDB;