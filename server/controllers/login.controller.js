const asyncHandler = require("../utils/asyncHandler");
const loginService = require("../services/login.service");
const jwt = require("jsonwebtoken");

//login

exports.login = asyncHandler(async (req, res, next) => {
  const userData = req.body;
    const result = await loginService.login(userData);
    if (result.data) { 
        // Generate JWT token
        const token = jwt.sign(
            { id: result.data._id, role: userData.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        result.data.token = token; // Attach token to the response data
    }
    
  res.status(200).json({data:{token:result.data.token}, message: result.message });
});