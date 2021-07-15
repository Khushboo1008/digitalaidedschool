import * as yup from 'yup';

export const ADMISSION_FORM_SCHEMA = yup.object().shape({
    name: yup.string().min(4).max(14).required("Field cannot be empty"),
    email: yup.string().email().required("Field cannot be empty"),
    parent_name: yup.string().min(4).max(14).required("Field cannot be empty"),
    parent_email: yup.string().email().required("Field cannot be empty"),
    parent_relation: yup.string().min(3).max(14).required("Field cannot be empty"),
    password: yup
    .string()
    .required("Field cannot be empty")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
})