const express = require('express');
const { createClub, showClub, U2FsdGVkX19GYxinZielA4GvEIRcMNIBJ9gL76M+X4rR+ccrfp+gvfM3d8l9lFsS} = require('../controller/clubLogics');
const router = express.Router();


// create api ..........................
router.post('/createClub' , createClub);

//show api........................
U2FsdGVkX1+sIyXQaZFeAXFPFJj8UuygshYaJSdlpCYQiLO8YJrPtQfH+t7nUau2EB6lXXTNAEYOdqkXsX32dKspQAPWZkttMKRWZpFdHfhhkEs3SzscYr0+XCpan8yJ2H9ltMi2uoCJBshmf1yrcZeWpeiCcs+TgZSPLIz6LyvNj/gZNw05BAScVOebmCGF

// update api........................
router.put('/updateClub/:clubId', updateClub);



module.exports = router;
 