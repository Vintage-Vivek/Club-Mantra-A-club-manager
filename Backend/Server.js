const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 4000;


U2FsdGVkX199d24lOjlpdb+JQbrM/qY84W6tADv0VS7PBbLQWAfvGl0ebMGHUKOqrIFoTHlN/Zl26CDbf8o2GlUYuJpk9DQN2VP+WDd5kUxK2e3xnrJff5+XsqHBvIDCNAuEgCE41nn7t+7t4g8sL6LUmi5EX5bSCct5AmTpjfa1nBTQaQdKW1pGcbxQaT5Vc7YyOHFIoVn2EfKe5gfyyju71D3hvVQPZploAGkeydBw+dVE1NIvIqWmP7uSPxQY5kmPHBb4XFCMDQui3PGnq8W0x1sVcsRR8v71u5uDOI1BWw/P1Pjm7shYrPZopELGA5QM4fIxH3VNPlPIrZ6sEg9p8yJyZNj4cwnEturVa5v12OrWgkrOClvvWVHkCvpsD5mjeD+t+FeJUcebxSRWX3/4lCO6vaf4YqchgykGJCVCuTATjOOjUK5TQf0qqeVnsDdAz+CiYxPDetn23BFhLjpd45FiUWwYqDtsX8SgNZnUWEzMHoybyg7iq53pj6xu

// database conncetion
const connectDB = require('./database/mongodb');
connectDB();

//cloudnary connection ..........................
const cloudinaryConfig = require('./database/cloudinary')
cloudinaryConfig()

app.listen(port, ()=>{
    console.log('server is connected sucessfully');
});