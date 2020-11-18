exports.myMiddleware = (req, res, next) => {
  req.name = "akash";
  next();
};

exports.homePage = (req, res) => {
  res.render("index");
};
