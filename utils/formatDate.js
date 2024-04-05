const date = require ('../models/Thought')

const formatDate = (date) =>  {
    
    return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
}

module.exports = formatDate;