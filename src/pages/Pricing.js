import { Button, Grid, Typography } from "@material-ui/core";
import { Cancel, CheckCircle } from "@material-ui/icons";
import axios from "axios";
import React from "react";
import getColor from "../components/getColor";

const Pricing = () => {
  const PLANS = [
    "ERP System",
    "Online Admission System",
    "Online Fee Management System",
    "Student Academic Data Management",
    "Routine Management",
    "Result Analysis",
    "Grievances",
    "College Notice",
    "College Activities",
    "College Calendar",
    "Mobile App",
    "Student Activity Report",
    "Online Class Management System",
    "Research and Academic Contributions",
    "IQAC Portal",
    "RUSA Portal",
    "Departmental Report",
    "Cell/Committee Report",
    "Extensions/Clubs Report",
    "Optimized Server",
  ];

  const onPaymentRazorpay = async (amount) => {
    try {
      const response = await axios.post(
        `https://gacapi.colles.in/api/payment/create-order`,
        {
          amount: amount,
          payable_amount: amount,
        }
      );
      const options = {
        key: "rzp_live_DXN6oocJaiJeGA",
        name: "Colles ERP",
        currency: "INR",
        description: "Colles ERP Price for 1 Semester",
        image: "/logo512.png",
        order_id: response.data.id,
        handler: async (successResponse) => {},

        method: {
          emi: false,
        },
        theme: {
          color: getColor.primary,
        },
        modal: {
          ondismiss: () => {},
        },
      };

      const Razorpay = new window.Razorpay(options);
      Razorpay.on("payment.failed", function (response) {});

      return Razorpay.open();
    } catch (error) {
      alert("Something went wrong on the server! Please try again later.");
    }
  };
  const onPaymentCashfree = async (amount) => {
    try {
      const orderResponse = await axios.post(
        "http://localhost:4000/api/order",
        {
          amount: amount,
        }
      );
      const orderData = await orderResponse.data;
      const cashfree = new window.Cashfree();
      await cashfree
        .checkout({
          mode: "sandbox",
          paymentSessionId: orderData.payment_session_id,
          returnUrl: "https://colles.in/pricing",
        })
        .then((result) => {
          console.log(result);
          if (result.error) {
            console.log(result.error);
          }
        });
    } catch (error) {
      console.log(error);
      alert("Something went wrong on the server! Please try again later.");
    }
  };
  return (
    <div>
      <Typography variant="h4" style={{ fontWeight: "600" }} align="center">
        PRICING
      </Typography>

      <Grid
        container
        spacing={2}
        style={{
          marginTop: 20,
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div
            style={{
              border: "1px solid #967444",
              borderRadius: 20,
              padding: 10,
              height: "100%",
            }}
          >
            <Typography
              align="center"
              style={{ color: "#967444", fontWeight: 800, fontSize: 16 }}
            >
              BRONZE PLAN
              <br />
              (Rs. 100 each Semester per Student)
            </Typography>
            {PLANS.map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                {index > 10 ? (
                  <Cancel
                    htmlColor="red"
                    fontSize="small"
                    style={{ marginRight: 10 }}
                  />
                ) : (
                  <CheckCircle
                    htmlColor="green"
                    fontSize="small"
                    style={{ marginRight: 10 }}
                  />
                )}

                <Typography>{item}</Typography>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: 5,
              }}
            >
              <CheckCircle
                htmlColor="green"
                fontSize="small"
                style={{ marginRight: 10 }}
              />
              <Typography>8 GB Database Free</Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => onPaymentCashfree(100)}
                color="primary"
                fullWidth
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#967444",
                  color: "white",
                  borderRadius: 20,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                Buy
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div
            style={{
              border: "1px solid grey",
              borderRadius: 20,
              padding: 10,
              height: "100%",
            }}
          >
            <Typography
              align="center"
              style={{ color: "grey", fontWeight: 800, fontSize: 16 }}
            >
              SILVER PLAN
              <br />
              (Rs. 20 per Month per Student)
            </Typography>
            {PLANS.map((item, index) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                {index > 13 ? (
                  <Cancel
                    htmlColor="red"
                    fontSize="small"
                    style={{ marginRight: 10 }}
                  />
                ) : (
                  <CheckCircle
                    htmlColor="green"
                    fontSize="small"
                    style={{ marginRight: 10 }}
                  />
                )}
                <Typography>{item}</Typography>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: 5,
              }}
            >
              <CheckCircle
                htmlColor="green"
                fontSize="small"
                style={{ marginRight: 10 }}
              />
              <Typography>16 GB Database Free</Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => onPaymentCashfree(240)}
                color="primary"
                fullWidth
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "grey",
                  color: "white",
                  borderRadius: 20,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                Buy
              </Button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <div
            style={{
              border: "1px solid #FF8801",
              borderRadius: 20,
              padding: 10,
              height: "100%",
            }}
          >
            <Typography
              align="center"
              style={{ color: "#FF8801", fontWeight: 800, fontSize: 16 }}
            >
              GOLD PLAN
              <br />
              (Rs. 30 per Month per Student)
            </Typography>
            {PLANS.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  margin: 5,
                }}
              >
                <CheckCircle
                  htmlColor="green"
                  fontSize="small"
                  style={{ marginRight: 10 }}
                />
                <Typography>{item}</Typography>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: 5,
              }}
            >
              <CheckCircle
                htmlColor="green"
                fontSize="small"
                style={{ marginRight: 10 }}
              />
              <Typography>24 GB Database Free</Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => onPaymentCashfree(360)}
                color="primary"
                fullWidth
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#FF8801",
                  color: "white",
                  borderRadius: 20,
                  marginTop: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                Buy
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Pricing;
