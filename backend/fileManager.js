fs = require('fs');

let saveToFile = (text)=>{
    fs.appendFile('kuku.txt', '\n'+text, function (err) {        
        if(err){
            return console.log(err);
        }
        console.log('Save data:' + text);
        
      });
}


exports.saveToFile = saveToFile;

