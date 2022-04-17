const {readFile, writeFile} = require('fs');

readFile("./content/first.txt","utf-8",(err,result) =>{
    if(err){
        console.log(err);
        return;
    }
    // console.log(result);
    const first = result;
    readFile("./content/second.txt","utf-8", (err,result) =>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile("./content/result-async.txt",`Hello world. This is new file.
        Content of first file: ${first}.
        Content of second file: ${second}`, (err,result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log(result);
        })
    })
})