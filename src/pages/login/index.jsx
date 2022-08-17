import { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import InputField from "../../components/inputField";
import ButtonField from "../../components/buttonField";
import LoginWrapper from "./styles";
import api from "../../api";
import { auth } from "../../state";

export default function Index() {
  const [guestMode, setGuestMode] = useState();
  const [header, setHeader] = useState(auth);
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      userName: yup.string().required("Please fill user name"),
      password: yup.string().required("Please enter your password"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(api.LOGIN, values);
        console.log(response);
        if (response.status === 204) {
          alert("User not found");
        } else {
          alert("Logged in successfully");
          setHeader({
            headers: {
              Authorization: `Bearer ${response.data.data.token}`,
              "Content-Type": "application/json",
            },
          });
          navigator("/categories");
        }
      } catch (error) {
        if (error.response?.status === 400) {
          alert("password does not match ");
        } else {
          alert("something went please check the connection");
        }
      }
      setGuestMode(true);
    },
  });
  return (
    <LoginWrapper
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        formik.handleSubmit(e);
      }}
    >
      <div className="child">
        <InputField
          error={formik.errors.userName}
          onChange={(e) => {
            formik.setFieldValue("userName", e);
          }}
          forText="User Name"
        />
        <InputField
          error={formik.errors.password}
          onChange={(e) => {
            formik.setFieldValue("password", e);
          }}
          forText="Password"
        />
        <ButtonField width="100%" />
        {!!guestMode && (
          <Link className="guest-mode" to="/categories">
            Want to login as guest
          </Link>
        )}
      </div>
    </LoginWrapper>
  );
}
