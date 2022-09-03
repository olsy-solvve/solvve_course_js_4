const list = [
        {"id": "1000","code": "f230fh0g3","status": "Lost pet","description": "Pets Description","img": "http://localhost:3000/img_car_01.jpg","gender": "Female","animal": "Cat","name":"Kitty","periodInfo": "5 days ago","rating": 5},
        {"id": "1001","code": "nvklal433","status": "Lost pet","description": "Pets Description","img": "http://localhost:3000/img_car_02.jpg","gender": "Female","animal": "Cat","name": "Swetty","periodInfo": "5 days ago","rating": 4},
        {"id": "1002","code": "zz21cz3c1","status": "Found pet","description": "Pets Description","img": "http://localhost:3000/img_car_03.jpg","gender": "Male","animal": "Cat","quantity": 2,"periodInfo": "5 days ago","rating": 3},
        {"id": "1003","code": "244wgerg2","status": "Found pet","description": "Pets Description","img": "http://localhost:3000/img_car_04.jpg","gender": "Female","animal": "Cat","quantity": 25,"periodInfo": "8 days ago","rating": 5},
        {"id": "1004","code": "h456wer53","status": "Lost pet","description": "Pets Description","img": "http://localhost:3000/img_car_05.jpg","gender": "Male","animal": "Dog","name": "Sem","periodInfo": "7 days ago","rating": 4},
]

import cors from 'cors';
import { Router } from "express";

const router =  Router();

router.use(cors());

router.get('/api/list', (req, res) => {
    res.status(201).json(list);
});


export default router;