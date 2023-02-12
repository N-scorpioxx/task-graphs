//importing models
const humanData = require("../models/humanData");

exports.get_all_humans = (req, res, next) => {
  humanData.find({})
    .then((data)=>{
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(data);
      },
      (err) => next(err))
    .catch((err) => next(err));
};

   