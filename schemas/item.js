var joi=require('joi');

module.exports=joi.object().required().keys({
    label:joi.string().required()
});