import { useDispatch } from "react-redux";
import { loginActions } from "../../Store/loginSlice";
import { productActions } from "../../Store/productsSlice";
import Modal from "../Modal/Modal";
import "./Checkout.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    alert("Order Placed");
    dispatch(productActions.reset());
    dispatch(loginActions.showHideModal());
  };
  return (
    <Modal>
      <div className="container">
        <div className="forms">
          <div className="form login">
            <span className="title">Order</span>
            <form onSubmit={submitHandler}>
              {/*Inputs*/}
              <div className="input-field">
                <input
                  name="fullname"
                  type="text"
                  placeholder="Enter your Address"
                  className="uil uil-user"
                  required
                />
                <i className="uil uil-user icon"></i>
              </div>
              <div className="input-field">
                <select className="select-opt-ch">
                  <option>Pay On Delivery</option>
                  <option>Credit/Debit Card</option>
                </select>
                <i className="uil uil-envelope icon"></i>
              </div>

              <button className="button">Place Order</button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Checkout;
