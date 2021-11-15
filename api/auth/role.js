exports.IsAdmin = async (req, res, next) => {
  if (req.user.role === "admin") {
    next();
  }else{
    return res.status(401).send("Kamu Bukan Admin");
  }
}
exports.IsAdminKasir = async (req, res, next) => {
  if (req.user.role === "admin" || req.user.role === "kasir") {
      next();
  }else{
    return res.status(401).send("Kamu Bukan Admin Kasir ");
  }
}