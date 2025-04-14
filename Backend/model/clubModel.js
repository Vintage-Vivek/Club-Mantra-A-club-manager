const mongoose = require('mongoose');

const clubSchema = new mongoose.Schema({
    image :{
        type: String,
        // required: true
    },
    title:{
        type: String,
        required: true
    U2FsdGVkX19GwPFv70KJ262vR+XqI2HUxdfaEWdq+NKT6BcyVZGlONLGvTjNGHHX8/ZcqoD5b6UW17c9JlQwS/DGrCS5kvQxewoE46GPY3rGM3Pyhp+k3w3dpPCXSZhWQHElWSXNjShDdqev0I49kr+kdU/D5e88SP3x3pQoiZwUX8wZPH/GZidxmTglnKYP
    },
})

module.exports = mongoose.model('Club',clubSchema)