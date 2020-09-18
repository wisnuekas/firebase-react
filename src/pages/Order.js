import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Navbar from "../components/Navbar";
import Content from "../components/Content";

function Order(props) {
  const orders = props.orders;

  return (
    <div style={{ display: "flex" }}>
      <Navbar title="Order" />
      <Content>
        <ul>
          {orders &&
            orders.map((order) => (
              <li key={order.id}>
                <strong>{order.name}</strong> oleh{" "}
                <strong>{order.customer}</strong>
              </li>
            ))}
        </ul>
      </Content>
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
)(Order);
