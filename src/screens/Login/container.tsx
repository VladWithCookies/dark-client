import * as React from 'react';
import { withFormik, FormikErrors, FormikBag } from 'formik';
import { connect } from 'react-redux';

import { login } from '../../concepts/auth/actions';
import { loginSchema } from '../../validationSchemas';
import LoginComponent from './component';

interface IProps {
  login: Function;
  values: IFormValues;
  errors: FormikErrors<IFormValues>;
  handleSubmit: VoidFunction;
  handleChange: VoidFunction;
}

export interface IFormValues {
  email: string;
  password: string;
}

class Login extends React.Component<IProps> {
  render() {
    return (
      <LoginComponent {...this.props} />
    );
  }
}

const mapDispatchToProps = {
  login
};

const mapPropsToValues = (): IFormValues => ({
  email: '',
  password: ''
});

const handleSubmit = (values: IFormValues, formikBag: FormikBag<IProps, IFormValues>): void => {
  formikBag.props.login({ email: values.email, password: values.password });
  formikBag.setSubmitting(false);
};

export default connect(
  null,
  mapDispatchToProps
)(withFormik<any, IFormValues>({
  validationSchema: loginSchema,
  mapPropsToValues,
  handleSubmit,
})(Login));
