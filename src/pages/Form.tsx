import { Box, Button, TextField } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import MainHeader from "../components/MainHeader"

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

interface Values {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  address1: string;
  address2: string;
}


const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

const Myform = () => {

  const isNonMobile = useMediaQuery("(min-width: 600px");

  const handleFormSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  }

    return (
      <Box m="20px">
        <MainHeader title="Create User" subtitle="Create a New user Profile" />
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
           { ({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => 
                  ( <Form onSubmit={handleSubmit}>
                      <Box display="grid" gap="30px" 
                          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                          sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4"} }}>
                            <TextField fullWidth variant="filled" type="text" label="First Name"
                                       onBlur={handleBlur}
                                       onChange={handleChange}
                                       value={values.firstName}
                                       name="firstName"
                                       error={!!touched.firstName && !!errors.firstName}
                                       helperText={touched.firstName && errors.firstName}
                                       sx={{gridColumn: "span 2"}} 
                            />
                            <TextField fullWidth variant="filled" type="text" label="Last Name"
                                       onBlur={handleBlur}
                                       onChange={handleChange}
                                       value={values.firstName}
                                       name="lastName"
                                       error={!!touched.lastName && !!errors.lastName}
                                       helperText={touched.lastName && errors.lastName}
                                       sx={{gridColumn: "span 2"}} 
                            />
                            <TextField fullWidth variant="filled" type="text" label="Email"
                                       onBlur={handleBlur}
                                       onChange={handleChange}
                                       value={values.email}
                                       name="email"
                                       error={!!touched.email && !!errors.email}
                                       helperText={touched.email && errors.email}
                                       sx={{gridColumn: "span 4"}} 
                            />
                            <TextField fullWidth variant="filled" type="text" label="Contact Number"
                                       onBlur={handleBlur}
                                       onChange={handleChange}
                                       value={values.contact}
                                       name="contact"
                                       error={!!touched.contact && !!errors.contact}
                                       helperText={touched.contact && errors.contact}
                                       sx={{gridColumn: "span 4"}} 
                            />
                            <TextField fullWidth variant="filled" type="text" label="Address 1"
                                       onBlur={handleBlur}
                                       onChange={handleChange}
                                       value={values.contact}
                                       name="address1"
                                       error={!!touched.address1 && !!errors.address1}
                                       helperText={touched.address1 && errors.address1}
                                       sx={{gridColumn: "span 4"}} 
                            />
                            <TextField fullWidth variant="filled" type="text" label="Address 2"
                                       onBlur={handleBlur}
                                       onChange={handleChange}
                                       value={values.contact}
                                       name="address2"
                                       error={!!touched.address2 && !!errors.address2}
                                       helperText={touched.address2 && errors.address2}
                                       sx={{gridColumn: "span 4"}} 
                            />
                          </Box>
                          <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Create New User
                            </Button>
                          </Box>
                    </Form>
                  )
                }
          </Formik>
      </Box>
    );
  };
  
  export default Myform;
  
