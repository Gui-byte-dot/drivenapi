import Joi from "joi";

export const BookSchema = Joi.object({
    title:Joi.string().required(),
    price:Joi.number().required(),
})