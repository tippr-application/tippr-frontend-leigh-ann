import React from "react";
import { PaymentForm } from "../../presentational/PaymentForm";
import PropTypes from 'prop-types';

const PaymentFormContainer = props => {
  const id = props.match.params.id;
  console.log(id);

  return (
    <div>
      <PaymentForm match={props.match} history={props.history} id={id} />
    </div>
  );
};

PaymentFormContainer.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}
export default PaymentFormContainer;
