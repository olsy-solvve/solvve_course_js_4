export const list = [
  {
    id: "1000",
    name: "Kitty",
    status: "Lost",
    date: "5 days ago",
    gender: "Female",
    info: "Pets Description",
    petType: "Cat",
    image: ["img_car_01.jpg"],
  },
  {
    id: "1001",
    name: "Swetty",
    status: "Lost",
    date: "5 days ago",
    gender: "Female",
    info: "Pets Description",
    petType: "Cat",
    image: ["img_car_02.jpg"],
  },
  {
    id: "1002",
    name: "Liza",
    status: "Found",
    date: "5 days ago",
    gender: "Female",
    info: "Pets Description",
    petType: "Cat",
    image: ["img_car_03.jpg"],
  },
  {
    id: "1003",
    name: "Funtik",
    status: "Found",
    date: "8 days ago",
    gender: "Male",
    info: "Pets Description",
    petType: "Cat",
    image: ["img_car_04.jpg"],
  },
  {
    id: "1004",
    name: "Sem",
    status: "Lost",
    date: "7 days ago",
    gender: "Male",
    info: "Pets Description",
    petType: "Dog",
    image: ["img_car_05.jpg"],
  },
];

import cors from "cors";
import { Router } from "express";

const router = Router();

const picPath = "http://localhost:3000/"

router.use(cors());

router.get("/api/list", (req, res) => {
  const body = list.map(item => {
    return {...item, image: item.image?.map(img => picPath + img)}
  })

  res.status(200).json(body);
});

router.delete("/api/:id", (req, res) => {
  const index = list.findIndex((item) => item.id === req.params.id);
  list.splice(index, 1);
  res.status(205).json(list);
});

export default router;
