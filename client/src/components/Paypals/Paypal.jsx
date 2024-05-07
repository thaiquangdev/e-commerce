import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useEffect } from "react";
import { apiCreateOrder } from "../../api/orderApi";
import { toast } from "react-toastify";
import { apiDeleteAllCart, apiDeleteCart } from "../../api/userApi";

const style = { layout: "vertical" };

const ButtonWrapper = ({ currency, showSpinner, amount, payload }) => {
  const [{ isPending, options }, dispatch] = usePayPalScriptReducer();
  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  const handleSaveOrder = async () => {
    const response = await apiCreateOrder(payload);
    if (response.success) {
      apiDeleteAllCart();
      toast.success("checkout is successfully!");
    }
  };

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[style, currency, amount]}
        fundingSource={undefined}
        createOrder={(data, actions) =>
          actions.order
            .create({
              purchase_units: [
                { amount: { currency_code: currency, value: amount } },
              ],
            })
            .then((orderId) => orderId)
        }
        onApprove={(data, actions) =>
          actions.order
            .capture()
            .then(async (response) => {
              if (response.status === "COMPLETED") {
                handleSaveOrder();
              }
            })
            .catch((error) => {
              console.error("Error during PayPal capture:", error);
            })
        }
      />
    </>
  );
};

export default function Paypal({ amount, payload }) {
  return (
    <div style={{ maxWidth: "750px", minHeight: "200px" }}>
      <PayPalScriptProvider
        options={{
          clientId: "test",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper
          currency={"USD"}
          payload={payload}
          amount={amount}
          showSpinner={false}
        />
      </PayPalScriptProvider>
    </div>
  );
}
