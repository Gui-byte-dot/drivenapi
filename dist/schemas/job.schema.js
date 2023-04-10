import Joi from "joi";
export var JobSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required(),
});
