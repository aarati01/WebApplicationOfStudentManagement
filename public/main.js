app.get("/:file",function(req,res){
    const filePath = path.join(__dirname,req.params.file);
    return res.sendFile(filePath,function(error){
        if(error){
            return res.status(404).send("File Not Found!");
        }
    });
});