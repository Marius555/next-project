import * as yup from "yup"

const RegisterSchema = yup.object({
    Username: yup.string().required("Name Is Required"),
    Email: yup.string().email().required("Email Is Required"),
    Password: yup.string().required("Password Is Required").min(8),
    ConfirmPassword: yup.string().required("Confirmation Is Required").oneOf([yup.ref('Password')], 'Your passwords do not match.')
})

export default RegisterSchema