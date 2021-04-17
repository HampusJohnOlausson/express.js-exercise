import express from 'express';
import ResponseError from '../responseError.js';
const router = express.Router();

//crud endpoints

const houses = [
    
        {
    "id": 1,
    "area": 112,
    "rok": 4,
    "address": "Stenvägen 21",
    "price": 2300000
    }
];

router.get((req, res) => {
    res.send(' a list of houses');
})

router.post((req, res) => {
  res.send(" house created");
});

//async error
router.put("/:id", async (req, res) => {
    throw new ResponseError(500, 'not implemeneted');
//   res.send(" house  updated" + req.params.id);
});

//normal error
router.delete("/:id", (req, res, next) => {
  const houseIndex = houses.findIndex(h => h.id == req.params.id);

  if(houseIndex === -1){
       return next(new ResponseError(404, "404 house not found"));
    

  }

  next(new Error('couldn not delete'));
  return;
  res.send(" house deleted" + req.params.id);
});

export default router;
