import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import { Button } from "reactstrap";
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';


export default class App extends Component {
    state = {
      hide: true,
      error: false
    };

    componentDidCatch() {
      console.log('erroe');
      this.setState({
        error: true
      })
    }

    onHide = () => {
      this.setState(({ hide }) => {
        return { hide: !hide };
      });
    };

    onCharSelected = (id) => {
      this.setState({
        selectedChar: id
      })
    }

    render() {
      const {hide} = this.state;

      if (this.state.error) {
        return <ErrorMessage/>
      }

      return (
        <>
          <Container>
            <Header />
          </Container>
          <Container>
            <Row>
              <Col lg={{ size: 5, offset: 0 }}>
                <Button outline color="primary" onClick={this.onHide}>
                  Show Character
                </Button>
                {hide ? <RandomChar /> : null}
              </Col>
            </Row>
            <CharacterPage/>
          </Container>
        </>
      );
    }
  }