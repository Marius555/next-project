import * as yup from "yup"

const LoginSchema = yup.object({
    Email: yup.string().email().required("Email required"),
    Password: yup.string().required("Password required")
})

export default LoginSchema