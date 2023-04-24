import Joi from "joi";

export const BookSchema = Joi.object({
    id:Joi.number(),
    title:Joi.string().required(),
    price:Joi.number().required(),
})