import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { FIELD_VALIDATIONS, VALID_USER } from '../../common/utils';
import { setAuth } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values, { setSubmitting }) => {
    const { email: validEmail, password: validPassword } = VALID_USER;
    const { email, password } = values;
    if (email === validEmail && password === validPassword) {
      console.log('Login Successfull');
      setSubmitting(false);
      dispatch(setAuth({ email }));
      navigate('/dashboard');
    }

    console.log('Invalid Credentials');
    setSubmitting(false);
  };

  const validateFields = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!FIELD_VALIDATIONS.email.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (!FIELD_VALIDATIONS.password.test(values.password)) {
      errors.password =
        'Invalid password. It must contain 1 alphabet and 1 special character with min. length of 8';
    }
    return errors;
  };

  return (
    <section className="auth__container">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 ml-auto mr-auto">
            <div className="card card-register">
              <h3 className="title mx-auto">Welcome</h3>
              <Formik
                initialValues={{
                  email: 'test@test.com',
                  password: 'test@test',
                }}
                validate={validateFields}
                onSubmit={handleLogin}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit} className="register-form">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="form-control"
                      placeholder="Email"
                    />
                    {errors.email && touched.email && (
                      <p className="error__message">{errors.email}</p>
                    )}
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="form-control"
                      placeholder="Password"
                    />
                    {errors.password && touched.password && (
                      <p className="error__message">{errors.password}</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-block btn-round"
                    >
                      Login
                    </button>
                  </form>
                )}
              </Formik>
              {/* <div className="forgot">
                <a href="#" className="btn btn-link btn-primary">
                  Forgot password?
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
