import * as React from 'react';
import { Card, FormGroup, InputGroup, Button, H5, Intent } from '@blueprintjs/core';
import { Container, Row, Col } from 'react-grid-system';

import PasswordInput from '../../components/PasswordInput';

const Login = () => (
  <Container>
    <Row>
      <Col md={5} offset={{ md: 3 }}>
        <Card className="mt-100">
          <H5>Login</H5>
          <FormGroup>
            <InputGroup
              large
              type="text"
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <PasswordInput
              large
              placeholder="Password"
            />
          </FormGroup>
          <Button large fill intent={Intent.PRIMARY}>
            Login
          </Button>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Login;
