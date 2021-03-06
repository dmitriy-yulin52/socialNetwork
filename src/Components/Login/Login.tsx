import React, { ReactElement, useCallback, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import s from "./LoginStyle.module.css";
import { Redirect } from "react-router-dom";
import { Link } from "@material-ui/core";
import { Registration } from "../Registration/Registration";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .max(20, "Password should be of maximum 20 characters length")
    .required("Password is required"),
});

type LoginType = {
  setLogin: (
    email: string,
    password: string,
    rememberMe: boolean,
    captchaUrl: string | null
  ) => void;
  isAuth: boolean;
  captchaUrl: null | string;
};

export const Login = React.memo((props: LoginType):ReactElement => {
  const { setLogin, captchaUrl, isAuth } = props;

  const [editMode, setEditMode] = useState(false);

  const onEditMode = useCallback(():void => {
    setEditMode(true);
  }, [setEditMode, editMode]);
  const offEditMode = useCallback(() => {
    setEditMode(false);
  }, [setEditMode, editMode]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      captchaUrl: "",
      checked: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLogin(values.email, values.password, true, values.captchaUrl);
    },
  });

  if (isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div className={editMode ? "" : s.loginWrapper}>
      {editMode ? (
        <div className={s.registrationWrapper}>
          <Registration closeTab={offEditMode} />
        </div>
      ) : (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              className={s.password}
            />

            <div className={s.submitButton}>
              <Button
                className={s.button}
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                ????????
              </Button>
            </div>
          </form>
          <div className={s.link}>
            <Link href="#" underline="hover">
              {"???????????? ?????????????"}
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {captchaUrl && (
              <>
                <img src={captchaUrl} alt={""} />
                <TextField
                  fullWidth
                  id="captchaUrl"
                  name="captchaUrl"
                  label="Captcha"
                  type="text"
                  value={formik.values.captchaUrl}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  className={s.password}
                />
              </>
            )}
          </div>
          <hr />
          <div className={s.createButton}>
            <Button
              className={s.createAccount}
              color="primary"
              variant="contained"
              size="small"
              onClick={onEditMode}
            >
              ?????????????? ?????????? ??????????????
            </Button>
          </div>
        </div>
      )}
    </div>
  );
});
