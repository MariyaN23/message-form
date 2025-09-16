import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";

const phoneRegex = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/

export const messageBodyValidation = [
    body('username')
        .notEmpty().withMessage('Username is required')
        .isLength({min: 2}).withMessage('Min 2 symbols length'),
    body('phone')
        .notEmpty().withMessage('Phone is required')
        .matches(phoneRegex).withMessage('Phone is invalid'),
    body('message')
        .notEmpty().withMessage('Message is required')
        .isLength({min: 2}).withMessage('Min 2 symbols length')
]

export const messageValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({codeResult: 1, messages: errors.array()})
    } else {
        next()
    }
}