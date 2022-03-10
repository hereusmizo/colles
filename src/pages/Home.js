import { Container, Divider, Typography } from "@material-ui/core";
import React from "react";
import getColor from "../components/getColor";

const Home = () => {
  const CLIENTS = [
    {
      name: "Pachhunga University College",
      logo: "puc.png",
    },
    {
      name: "Govt. T. Romana College",
      logo: "trc.png",
    },
    {
      name: "Govt. Aizawl College",
      logo: "gac.png",
    },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          alt="Colles"
          src="/erp.png"
          style={{ width: "100%", marginTop: 0 }}
        />
        <Typography
          align="center"
          style={{
            color: getColor.primary,
            fontSize: 25,
            fontFamily: "Century Gothic",
            fontWeight: 600,
            marginTop: 70,
          }}
        >
          AND 30+ MORE FEATURES AVAILABLE
        </Typography>
        <Typography
          align="center"
          style={{
            color: getColor.primary,
            fontSize: 25,
            fontFamily: "Century Gothic",
            fontWeight: 600,
          }}
        >
          AT
        </Typography>
        <Typography
          align="center"
          style={{
            color: getColor.primary,
            fontSize: 50,
            fontFamily: "Century Gothic",
            fontWeight: 600,
          }}
        >
          COLLES
        </Typography>
        <Typography
          variant="h3"
          align="center"
          style={{
            marginTop: 10,
            color: getColor.primary,
            fontFamily: "Century Gothic",
            fontWeight: 600,
          }}
        >
          ENTERPRISE RESOURCE PLANNING SYSTEM
        </Typography>
      </div>
      <Divider style={{ marginTop: 80 }} />
      <Typography
        variant="h4"
        align="center"
        style={{
          marginTop: 80,
          color: getColor.primary,
          fontFamily: "Century Gothic",
          fontWeight: 600,
        }}
      >
        Our proudly clients
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: 30,
        }}
      >
        {CLIENTS.map((item) => {
          return (
            <div
              key={item.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: 20,
              }}
            >
              <img
                alt={item.name}
                title={item.name}
                src={item.logo}
                style={{
                  height: 120,
                  width: 120,
                  marginLeft: 50,
                  marginRight: 50,
                }}
              />
              <Typography style={{ fontWeight: 500 }}>{item.name}</Typography>
            </div>
          );
        })}
      </div>
      <Divider style={{ marginTop: 80 }} />
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
        maxWidth="md"
      >
        <Typography
          style={{
            fontFamily: "Century Gothic",
            fontSize: 20,
          }}
          align="center"
        >
          Colles is the best and most efficient cloud based College ERP system
          provider, designed and developed in India based company.
          <br />
          Make with love by Hereus
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
