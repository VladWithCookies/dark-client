import * as React from 'react';
import { Field, FormikErrors } from 'formik';
import { Card, FormGroup, Button, H5, Intent } from '@blueprintjs/core';
import { Container, Row, Col } from 'react-grid-system';

import { IFormValues } from './container';
import PasswordInput from '../../components/PasswordInput';
import TextInput from '../../components/TextInput';

interface IProps {
  values: IFormValues;
  errors: FormikErrors<IFormValues>;
  handleChange: VoidFunction;
  handleSubmit: VoidFunction;
};

const Login = ({ handleSubmit, values, handleChange, errors }: IProps) => (
  <Container className="login__container">
    <Row className="login__row--middle-aligned">
      <Col md={5} offset={{ md: 3 }}>
        <Card>
          <H5>Login</H5>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Field
                large
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                component={TextInput}
                placeholder="Email"
                error={errors.email}
              />
            </FormGroup>
            <FormGroup>
              <Field
                large
                name="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                component={PasswordInput}
                error={errors.password}
              />
            </FormGroup>
            <Button type="submit" large fill intent={Intent.PRIMARY}>
              Login
            </Button>
          </form>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Login;
