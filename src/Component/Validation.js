
const validation = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = "Name is required"
    }
    if (!values.age) {
        errors.age = "Age is required"
    } else if ( values.age > 65 ) {
        errors.age = " age must be less 65 "
    }
    if (!values.gender) {
        errors.gender = "gender is required"
    }
    if (!values.phone) {
        errors.phone = "Phone Number is required"
    } else if (values.phone.length < 10) {

        errors.phone = "Phone Number must be of length 10 required"
    }
    if (!values.email) {
        errors.email = "Email is required"
    }
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is Invalid"
    }

    if (!values.password) {
        errors.password = "password is required"
    }
    else if (values.password.length < 5) {
        errors.password = "Password must be more than 5 characters"
    }
    else if(values.password !== values.conform_password){
        errors.conform_password = "Password doesn't match"
    }
    return errors;
};

const validateField =(fieldName, value, values) =>{
    let errors =  {};
    switch(fieldName) {
        case 'name':
            if (!value) {
                errors.name = "Name is required"
            }
            break;
        case 'email':
            if (!value) {
                errors.email = "Email is required"
            }
            else if (!/\S+@\S+\.\S+/.test(value)) {
                errors.email = "Email is Invalid"
            }
            break;
        case 'age':
            if (!value) {
                errors.age = "Age is required"
            } else if ( value > 65 ) {
                errors.age = " age must be less 65 "
            }
            break;
        case 'gender':
            if (!value) {
                errors.gender = "gender is required"
            }
            break;
        case 'phone':
            if (!value) {
                errors.phone = "Phone Number is required"
            } else if (value.length < 10) {

                errors.phone = "Phone Number must be of length 10 required"
            }
            break;
        case 'password':
            if (!value) {
                errors.password = "password is required"
            }
            else if (value.length < 5) {
                errors.password = "Password must be more than 5 characters"
            }
            break;
            case 'conform_password':
            if (!value) {
                errors.conform_password = "password is required"
            }
            else if (values.password && value !== values.password) {
                errors.conform_password = "Password doesn't match"
            }
            break;
            
        default:
            break;
    }
    return errors;
};

export {
    validateField,
    validation
};

