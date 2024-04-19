import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  phoneNumber: Yup.string().required("phoneNumber is required"),
});

export const shippingSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  email: Yup.string().email().required("Email is required"),
  postedCode: Yup.string().required("Zip code is required"),
});
