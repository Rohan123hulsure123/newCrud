const express=require('express')
const router=express.Router()
const cs=require('../services/clientServices')

const multer = require('multer'); // package to get files as input

//store files to uploads folder
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null,  'uploads/');
    },
    filename: function (req, file, cb) {
       cb(null, Date.now() + '-' + file.originalname);
    }
});
var upload = multer({ storage: storage });

//Get image route
router.post('/image-upload', upload.single('image'),cs.getImage)


//test route
router.get('/test',cs.test)

//list client
router.get('/list/:ArticleId',cs.getData)

//add data
router.post('/add',cs.addData)

//update data
router.post('/update',cs.updateData)

//delete data
router.post('/delete/:ArticleId',cs.deleteData)
module.exports=router