import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Content from "../components/Content";
import { setTitle } from "../store/actions/titleActions";

function Order(props) {
  const orders = props.orders;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitle("Order"));
  }, [dispatch]);

  return (
    <div>
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
    orders: state.firestore.ordered.orders, // .ordered to order order's data
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(["orders"])
)(Order);
