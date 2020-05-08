import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

class Typography extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
                    <Card>
              <CardHeader>
                Receive Bitcoins
              </CardHeader>
              <CardBody>
                <Form action="" method="post">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="username1" name="username1" placeholder="18zn7ZQCzH74Bb4wKqTaNoorsKKsCvDsMa" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                  
                  </FormGroup>
                  <FormGroup className="form-actions" align="right">
                    <Button type="submit" size="sm" color="primary" href="../../Dasboard">Done</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
      </div>
    );
  }
}

export default Typography;
