import express from 'express';
const router = express.Router();

//crud endpoints

const houses = [];

router.get((req, res) => {
    res.send(' a list of houses');
})

router.post((req, res) => {
  res.send(" house created");
});

router.put("/:id", (req, res) => {
  res.send(" house  updated" + req.params.id);
});

router.delete("/:id", (req, res) => {
  if(err){
    throw new Error('could not delete')
  }
  res.send(" house deleted" + req.params.id);
});

export default router;
