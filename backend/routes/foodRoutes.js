import express from "express";
import { addFood, listFood, removeFood,toggleAvailability,toggleFlashSale } from "../controllers/foodController.js";
import upload from "../middlewares/upload.js";



const foodRouter = express.Router();

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)
foodRouter.post("/toggle-availability", toggleAvailability);
foodRouter.post("/toggle-flashsale", toggleFlashSale);





export default foodRouter;
