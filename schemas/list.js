var joi=require('joi');

module.exports=joi.object().required().keys({
    name:joi.string().required(),
    description:joi.string(),
    priority:joi.number().integer().default(0)
});