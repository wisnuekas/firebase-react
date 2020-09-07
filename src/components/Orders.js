import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

function Orders(props) {
  const orders = props.orders;

  return (
    <div>
      <ul>
        {orders &&
          orders.map((order) => (
            <li key={order.id}>
              <strong>{order.name}</strong> oleh{" "}
              <strong>{order.customer}</strong>
            </li>
          ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    orders: state.firestore.ordered.orders,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(["orders"])
)(Orders);
