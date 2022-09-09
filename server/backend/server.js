import express from 'express';
import multer from 'multer'
import router from '../router/index.js';
import { list } from '../router/index.js'
import { v4 as uuidv4 } from 'uuid';


const PORT = process.env.PORT || 5000;

const storage = multer.diskStorage({
  destination: (_, b, cb) => {
    cb(null, 'uploads')
  }, 
  filename: (_, file, cb) => {
    cb(null, file.originalname)
  }
}) 

 const upload = multer({storage})

const app = express();
app.use(express.json())
app.use(router);
app.use('/api/uploads', express.static('uploads'));


app.get('/', (req, res) => {
        res.send('<i>test</i>')

})

app.post('/api/createPet', upload.array('photos', 3), (req, res) => {
  try {
    if(!req.files) {
      return res.status(501).json({msg: "Wrong image!"});
    }
    const respone = {}
    req.files.forEach((item, index) => {
      respone[index] = `/uploads/${item.originalname}`;
    })

    const fields = {
        id: uuidv4(),
        name: req.body.name,
        type: req.body.type,
        date: req.body.date,
        gender: req.body.gender,
        info: req.body.info,
        petType: req.body.petType,
        image: req.body.image
      }
      list.push(fields)

    console.log(req.files);
    console.log(req.body);
    res.status(201).json(respone);
  } catch(e) {
    res.status(400).json(e);
    console.log(e);
  }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

export default app;

