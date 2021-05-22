const { foods } = require("./data.json");

export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(foods);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `METHOD ${req.method} is not allowed` });
  }
};
