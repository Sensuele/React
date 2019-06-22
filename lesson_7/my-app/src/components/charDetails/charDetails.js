import React, {Component} from 'react';
import styled from 'styled-components';
import {ListGroup, ListGroupItem} from 'reactstrap';
import gotService from '../../services/gotService';
import Spinner from "../spinner/spinner";
import ErrorMessage from "../errorMessage/errorMessage";
import "./charDetails.css";


const CharDetailsWrap = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  h4 {
    margin-bottom: 20px;
    text-align: center;
  }
`;

const SelectedError = styled.span`
  color: #000;
  text-align: center;
  font-size: 26px;
`;
const Term = styled.span`
  font-weight: bold;
`;

export default class CharDetails extends Component {
  gotService = new gotService();
  state = {
    char: null,
    loaded: false,
    error: false
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: "critical error",
      loaded: false
    })
  }

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.setState({
        loaded: true
      });
      this.updateChar();
    }
  }

  updateChar = () => {
    const {charId} = this.props;
    if (!charId) {
      return;
    }

    this.gotService.getCharacter(charId)
      .then((char) => {
        this.setState({
          char,
          loaded: false
        })
      })
      .catch((err) => {
        this.setState({
          error: err,
          loaded: false
        })
      });
    // this.foo.bar = 0;
  }

  render() {
    const {loaded, char, error} = this.state;

    const selectedError = !(char || error) ? <SelectedError>Please select a character</SelectedError> : null;
    const spinner = loaded ? <Spinner/> : null;
    const errorMessage = error ? <ErrorMessage err={error}/> : null;
    const content = !(loaded || error) && char ? <View char={char}/> : null;

    return (
    <CharDetailsWrap className="rounded">
      {selectedError}
      {errorMessage}
      {spinner}
      {content}
    </CharDetailsWrap>
  )
    ;
  }
}

const View = (char) => {
  const {char: {name, gender, born, died, culture}} = char;
  return (
    <>
      <h4>{name}</h4>
      <ListGroup className="list-group-flush">
        <ListGroupItem className="d-flex justify-content-between">
          <Term>Gender</Term>
          <span>{gender}</span>
        </ListGroupItem>
        <ListGroupItem className="list-group-item d-flex justify-content-between">
          <Term>Born</Term>
          <span>{born}</span>
        </ListGroupItem>
        <ListGroupItem className="list-group-item d-flex justify-content-between">
          <Term>Died</Term>
          <span>{died}</span>
        </ListGroupItem>
        <ListGroupItem className="list-group-item d-flex justify-content-between">
          <Term>Culture</Term>
          <span>{culture}</span>
        </ListGroupItem>
      </ListGroup>
    </>
  )
}