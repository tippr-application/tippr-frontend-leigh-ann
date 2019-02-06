import React from "react";
import PropTypes from 'prop-types';

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
  };

  render() {
    return (
      <div>
        <form onSubmit={e => this.submitPayment(e)}>
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
          <button type="submit">Send Tip</button>
          <button type="button" onClick={e => this.cancel(e)}>Cancel</button>
        </form>
      </div>
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

export default PaymentForm;
