const {ClientModel} = require('../models/clientModel');


exports.test=(req,res)=>{
    res.json({message:'Greeting api'})
}

//add data
exports.addData = (req, res)=> {
    const newClientModel= new ClientModel({
        ArticleId :parseInt(req.body.ArticleId), 
        Title : req.body.Title, 
        Description : req.body.Descriptio, 
        AuthorFirstName : req.body.AuthorFirstName,
        AuthorLastName : req.body.AuthorLastName,
        AuthorEmailId : req.body.AuthorEmailId,
        ArticleCreatedDate : req.body.ArticleCreatedDate,
        ArticlePublishedDate : req.body.ArticlePublishedDate,
        AuthorPhoneNumber :parseInt(req.body.AuthorPhoneNumber)

    })
    console.log(newClientModel)

    newClientModel.save(err => {
        if (err) {
            console.error(err);
            res.sendStatus(400);
        }
        res.json({message: "Nem employee added."})
    })
    
};

//getData
exports.getData= (req, res) =>{
    console.log(req.params.ArticleId)
    ClientModel.findOne(
        { 
            ArticleId:req.params.ArticleId
        
        }, 
        (err, results) => {
            console.log(results)
            if (!err) {
                res.json(results); 
            }
        
        }
    )  
};

//updateData
exports.updateData = function (req, res) {
    
    ClientModel.updateOne(
        { 
            ArticleId:req.body.ArticleId
        },
        {
            ArticleId :parseInt(req.body.ArticleId), 
            Title : req.body.Title, 
            Description : req.body.Descriptio, 
            AuthorFirstName : req.body.AuthorFirstName,
            AuthorLastName : req.body.AuthorLastName,
            AuthorEmailId : req.body.AuthorEmailId,
            ArticleCreatedDate : req.body.ArticleCreatedDate,
            ArticlePublishedDate : req.body.ArticlePublishedDate,
            AuthorPhoneNumber :parseInt(req.body.AuthorPhoneNumber)
        },
        (err, result) => {
            if (result.modifiedCount) {
                res.status(200);
                res.json({message: "Record updated."}); 
            }
        }
    )    
     
};

//deleteData
exports.deleteData = function (req, res) {
    
    ClientModel.deleteOne(
        { 
            ArticleId:req.params.ArticleId
        
        }, 
        (err, results) => {
            if (!err) {
                res.json({message: "Record Deleted."});
            }
        
        }
    )  
     
};

// getImageFromClient

exports.getImage = (req, res) => {
    const image = req.image;
      res.json({message: 'File uploaded successfully.', image});
};