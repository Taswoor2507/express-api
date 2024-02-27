import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

const validateToken = expressAsyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    // Extract token from the header
    token = authHeader.split(" ")[1];

    // Verify the token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      // If token is valid, you can access the decoded payload here
      console.log(decoded);
      req.user = decoded.user;
      next(); // Call next to pass control to the next middleware
    });
  } else {
    // If token is missing or invalid format
    res.status(401);
    throw new Error("User is not authorized");
  }
});

export default validateToken;
