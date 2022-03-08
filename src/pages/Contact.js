import React from "react";
import { Card, Grid, Typography } from "@material-ui/core";
import { Code, Email, LocationOn, Phone } from "@material-ui/icons";
import getColor from "../components/getColor";
import project from "../components/project";
const Contact = () => {
  return (
    <div>
      <Typography variant="h4" style={{ fontWeight: 600 }} align="center">
        Contact Us
      </Typography>
      <Grid container style={{ marginTop: 30 }} spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            padding: 12,
          }}
        >
          <Card style={{ padding: 20 }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              style={{ fontWeight: 600 }}
            >
              {project.name}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: getColor.primary,
              }}
            >
              <Code />
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize: 17, fontWeight: 500 }}>
                Developer & Owner
              </span>
            </div>
            <Typography style={{ fontSize: 17 }}>Hereus</Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: getColor.primary,
                marginTop: 20,
              }}
            >
              <LocationOn />
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize: 17, fontWeight: 500 }}>Address</span>
            </div>
            <Typography style={{ fontSize: 17 }}>
              {project.address1}, {project.address2}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: getColor.primary,
                marginTop: 20,
              }}
            >
              <Phone />
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize: 17, fontWeight: 500 }}>Phone</span>
            </div>
            <Typography style={{ fontSize: 17 }}>
              +91 {project.contact}
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: getColor.primary,
                marginTop: 20,
              }}
            >
              <Email />
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize: 17, fontWeight: 500 }}>
                College Email
              </span>
            </div>
            <Typography style={{ fontSize: 17 }}>{project.email}</Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: getColor.primary,
                marginTop: 20,
              }}
            >
              <Email />
              &nbsp;&nbsp;&nbsp;
              <span style={{ fontSize: 17, fontWeight: 500 }}>
                Email for Developers
              </span>
            </div>
            <Typography style={{ fontSize: 17 }}>devus@hereus.in</Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{
            padding: 12,
          }}
        >
          <Card style={{ height: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.211560943694!2d92.71299891522952!3d23.739833995096213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374deb9017cf903b%3A0xe9c4af857065b047!2sHereus!5e0!3m2!1sen!2sin!4v1646747696300!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              // style="border:0;"
              title="Hereus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
