import { Typography } from "@material-ui/core";
import React from "react";

const RefundPolicy = () => {
  return (
    <div>
      <Typography variant="h4" style={{ fontWeight: "600" }} align="center">
        REFUNDS POLICY
      </Typography>

      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}>
        Our focus is complete customer satisfaction. Please read the fine prints
        of each deal before buying it, it provides all the details about the
        services or the product you purchase.
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}>
        In case of dissatisfaction from our services, clients have the liberty
        to cancel their projects and request a refund from us. Our Policy for
        the cancellation and refund will be as follows:
      </Typography>
      <Typography
        style={{
          textAlign: "justify",
          fontSize: 16,
          marginTop: 20,
          fontWeight: 500,
        }}
      >
        Cancellation Policy
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}>
        For Cancellations please contact the us via contact us link.
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}>
        All the customers who are willing to cancel the service of COLLES should
        contact the support team before 7 business days. Cancel request received
        later than 7 business days from payment date will not be accepted as
        cancellable.
      </Typography>

      <Typography
        style={{
          textAlign: "justify",
          fontSize: 16,
          marginTop: 20,
          fontWeight: 500,
        }}
      >
        Refund Policy
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}>
        In case any client is not completely satisfied with Colles’s service, we
        can provide a refund within 7 days of payment.
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}>
        In case any client who are facing problems regarding payment on Monthly
        Recharge Plan such as accidental double payments and payment success but
        payment not success, please contact us from our contact page as soon as
        possible. We will review and investigate your problems and try our best
        to solve and refund you as soon as possible.
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}>
        The refund will be directly paid by Hereus to customer as per their
        refund.
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}>
        Refund payment method will be upto the customer's will.
      </Typography>
      <Typography
        style={{
          textAlign: "justify",
          fontSize: 16,
          marginTop: 20,
          fontWeight: 500,
        }}
      >
        Contact Us
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}>
        If you have any questions about this Refunds and Cancellations Policy,
        You can contact us:
      </Typography>
      <ul>
        <li>
          <Typography
            style={{ textAlign: "justify", fontSize: 16, marginTop: 10 }}
          >
            By email: devus@hereus.in
          </Typography>
        </li>
      </ul>
    </div>
  );
};

export default RefundPolicy;
