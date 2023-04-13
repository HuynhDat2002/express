export const postCreate=(req,res,next) => {

    let errors=[];
    if(!req.body.name) errors.push('Name do not be empty');
    if(!req.body.phone) errors.push('Phone do not be empty');

    const phoneRegex=/^0[0-9]{9}$/
    const {phone:phoneNumber}=req.body;
    if(!phoneRegex.test(phoneNumber)) errors.push('Phone Invalid');
    if(errors.length){
        res.render('users/create',{errors:errors,values:req.body});
        return; 
    }
    next();
}
