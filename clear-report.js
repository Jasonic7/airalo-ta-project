const fs = require('fs-extra')

fs.emptyDir('jsonlogs/',{recursive:true}).then(()=>{
    console.log('Results folder cleared!');
}).catch((error)=>{
    console.log(error)
})

