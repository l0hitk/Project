import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const handleValidationErrors = async(req: Request, res: Response, next: NextFunction) =>{
    const  errors = validationResult(req);
    if(errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    next();
};


export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Name must be a string"),
    body("institute").isString().notEmpty().withMessage("Institute name must be a string"),
    body("city").isString().notEmpty().withMessage("city must be a string"),
    body("branch").isString().notEmpty().withMessage("Branch must be a string"), 
    handleValidationErrors,
];

 