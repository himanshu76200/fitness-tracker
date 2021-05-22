const { foods } = require("./data.json");

export default (req, res) => {
  const food = foods.filter((fd) => fd.id === req.query.id);
  if (req.method === "GET") {
    res.status(200).json(food);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `METHOD ${req.method} is not allowed` });
  }
};

// to get a particular event
// cannot be used for static webpages
