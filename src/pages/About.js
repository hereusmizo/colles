import React from "react";
import { Typography } from "@material-ui/core";

const About = () => {
  return (
    <div>
      <Typography variant="h4" style={{ fontWeight: "600" }} align="center">
        About Us
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <img
          src="/logo512.png"
          style={{ width: 120, height: 120, marginRight: 20 }}
          alt="Colles"
          title="Colles"
        />
        <img
          src="/hereus.png"
          style={{ width: 120, height: 120 }}
          alt="Hereus"
          title="Hereus"
        />
      </div>
      <Typography style={{ textAlign: "justify", fontSize: 16 }}>
        Colles is an <b>Enterprise Resource Planning System (ERP)</b> made for
        Educational Colleges to deal with paperless administration for the
        institutions. The main aim is to provide an efficient system for all
        colleges who need to manage all the data of their institution with an
        easy and secure software from anywhere around the world.
      </Typography>

      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 20 }}>
        Colles offers all the ability to perform various task of their daily
        works with a paperless managing system with a good ecosystem where one
        can access it from any platform including mobile and desktop systems.
        Institution can easily maintain their student's records, academic data
        and many other useful feature inside the application.
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 20 }}>
        Colles is a Software-as-a-Service (SaaS) system which is a cloud-based
        method of providing software to users. In SaaS users can subscribe to an
        application rather than purchasing it once and installing it. Service
        fee for this software is free of cost. Users can log into and use a SaaS
        application from any compatible device over the Internet. The actual
        application runs in cloud servers that may be far removed from a user's
        location.
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 20 }}>
        Colles application can be accessed through a browser or through an app.
        Android application is provided to the students of the college where Web
        Application system is provided to the Institutions. Hereus will provide
        all necessary services and consultation to their clients.
      </Typography>
      <Typography style={{ textAlign: "justify", fontSize: 16, marginTop: 20 }}>
        Colles is developed by <b>Hereus</b>. <b>Hereus</b> is a software
        development firm from Aizawl, Mizoram. Hereus will provide all necessary
        services, support and consultation to their clients.
      </Typography>
    </div>
  );
};

export default About;
