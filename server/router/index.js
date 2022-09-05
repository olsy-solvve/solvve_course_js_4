const list = [
  {
    id: "1000",
    code: "f230fh0g3",
    status: { name: "Lost pet" },
    description: "Pets Description",
    img: "http://localhost:3000/img_car_01.jpg",
    gender: { name: "Female" },
    animal: { name: "Cat" },
    name: "Kitty",
    periodInfo: "5 days ago",
  },
  {
    id: "1001",
    code: "nvklal433",
    status: { name: "Lost pet" },
    description: "Pets Description",
    img: "http://localhost:3000/img_car_02.jpg",
    gender: { name: "Female" },
    animal: { name: "Cat" },
    name: "Swetty",
    periodInfo: "5 days ago",
  },
  {
    id: "1002",
    code: "zz21cz3c1",
    status: { name: "Found pet" },
    description: "Pets Description",
    img: "http://localhost:3000/img_car_03.jpg",
    gender: { name: "Male" },
    animal: { name: "Cat" },
    periodInfo: "5 days ago",
  },
  {
    id: "1003",
    code: "244wgerg2",
    status: { name: "Found pet" },
    description: "Pets Description",
    img: "http://localhost:3000/img_car_04.jpg",
    gender: { name: "Female" },
    animal: { name: "Cat" },
    periodInfo: "8 days ago",
  },
  {
    id: "1004",
    code: "h456wer53",
    status: { name: "Lost pet" },
    description: "Pets Description",
    img: "http://localhost:3000/img_car_05.jpg",
    gender: { name: "Male" },
    animal: { name: "Dog" },
    name: "Sem",
    periodInfo: "7 days ago",
  },
];

import cors from "cors";
import { Router } from "express";

const router = Router();

router.use(cors());

router.get("/api/list", (req, res) => {
  res.status(200).json(list);
});

router.post("/api/list", (req, res) => {
  list.push(req.body);
  res.status(201).json(list);
});

router.delete("/api/list", (req, res) => {
  list.splice(req.body);
  res.status(205).json(list);
});

export default router;
