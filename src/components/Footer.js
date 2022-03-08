import { Container, Link as ALink, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import project from "./project";
const Footer = () => {
  const links = [
    {
      title: "About Us",
      url: "/about",
    },
    {
      title: "Contact Us",
      url: "/contact",
    },
    {
      title: "Pricing",
      url: "/pricing",
    },
    {
      title: "Privacy Policy",
      url: "/privacy",
    },
    {
      title: "Refund Policy",
      url: "/refund-policy",
    },
    {
      title: "Terms and Conditions",
      url: "/terms-and-conditions",
    },
  ];
  return (
    <div
      style={{
        background: "#01162d",
        paddingTop: 30,
        paddingBottom: 50,
        marginTop: 60,
      }}
    >
      <Container>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img alt="Logo" src="/logo512.png" style={{ height: 60 }} />{" "}
              <Typography
                style={{
                  color: "#efffff",
                  fontWeight: 600,
                  fontSize: 20,
                  marginLeft: 12,
                }}
              >
                {project.name}
              </Typography>
            </div>
          </Link>
        </div>
        <Typography
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: 500,
            marginTop: 20,
          }}
        >
          Quick Links:
        </Typography>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {links.map((item, index) => {
            return (
              <div key={index} style={{ marginTop: 12, marginRight: 15 }}>
                <ALink
                  to={item.url}
                  component={Link}
                  underline="hover"
                  style={{ width: 95, height: 95, textDecorationColor: "#fff" }}
                >
                  <Typography
                    style={{ fontSize: 14, fontWeight: 400, color: "#FFF" }}
                  >
                    {item.title}
                  </Typography>
                </ALink>
              </div>
            );
          })}
        </div>
        <Typography
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: 400,
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Copyright © {project.name} {new Date().getFullYear()} | All rights
          reserved.
        </Typography>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 20 }}
        >
          <img
            alt="Hereus"
            src="/hereus.png"
            style={{ height: 50, widht: 50 }}
          />
        </div>
        <Typography
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: 400,
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Developed by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://hereus.in"
            style={{ color: "white" }}
          >
            Hereus
          </a>
        </Typography>
      </Container>
    </div>
  );
};

export default Footer;
