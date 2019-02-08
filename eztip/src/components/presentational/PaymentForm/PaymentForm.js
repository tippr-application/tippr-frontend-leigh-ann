import React from "react";
import PropTypes from 'prop-types';
import { submitPayment } from '../../../store/actions';
import { connect } from 'react-redux';
import styled from "styled-components";

const PaymentFormContainer = styled.div`
border: 1px solid #b5b5b5;
margin: 0 auto;
margin-top: 20vh;
max-width: 600px;
width: 100%;
display: flex;
flex-direction: column
justify-content: center;
align-items: center;
padding: 40px;
background: white;

@media (max-width: 700px) {
  width: 85%;
}

h1 {
  margin-bottom: 40px;
}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 80%;

  input {
    margin-bottom: 20px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-top: 20px;
    margin-bottom: 10px;
    width: 45%;
  }
`;

class PaymentForm extends React.Component {
  state = {
    payment: "",
    match: null,
    history: null,
    id: null
  };

  componentDidMount() {
      this.setState({
          match: this.props.match,
          history: this.props.history,
          id: this.props.id
      })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  cancel = e => {
      e.preventDefault();
      this.state.history.push(`/employee/${this.state.id}`);
  }

  submitPayment = e => {
    e.preventDefault();
    this.props.submitPayment({
      worker_id: this.state.id,
      tip_amount: this.state.payment
    })
    this.state.history.push(`/employee/${this.state.id}`)
  };

  render() {
    return (
      <PaymentFormContainer>
      <h1>Send A Tip</h1>
        <Form onSubmit={e => this.submitPayment(e)}>
          <input
            required
            autoComplete="off"
            type="number"
            onChange={this.handleChange}
            name="payment"
            placeholder="Amount to tip"
            value={this.state.payment}
          />
          <input
            required
            autoComplete="off"
            type="number"
            name="cc-number"
            placeholder="CC number"
          />
          <input
            required
            autoComplete="off"
            type="number"
            name="expiration"
            placeholder="Expiration date"
          />
          <input
            required
            autoComplete="off"
            type="number"
            name="verification"
            placeholder="Verification"
          />
          <ButtonDiv>
            <button type="submit">Send Tip</button>
            <button type="button" onClick={e => this.cancel(e)}>Cancel</button>
          </ButtonDiv>
        </Form>
      </PaymentFormContainer>
    );
  }
}

PaymentForm.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  cancel: PropTypes.func,
  submitPayment: PropTypes.func
}

export default connect(null, { submitPayment })(PaymentForm);
