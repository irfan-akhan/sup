import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";

import { Grid, Typography } from "@material-ui/core";
import {
  Money,
  Payment,
  Person,
  AirplanemodeActive,
  QueryBuilder,
  DateRange,
  People,
} from "@material-ui/icons";
import style from "../../styles/Drive.module.css";

const routes = {
  "Drive For Us": "/company/about",
  "Fleet Management": "/company/whoweare",
  "kyatham Management": "/company/partner",
};

export default class Drive extends Component {
  render() {
    return (
      <Grid container spacing={2} justify="center">
        <Grid xs={3} item>
          <Sidebar heading="Partnership" routes={routes} />
        </Grid>
        <Grid xs={8} item>
          <Typography variant="h5" gutterBottom>
            Drive with Shuttlelane
          </Typography>
          <Typography variant="body1">
            Welcome to shuttlelane! You're on the road to success
          </Typography>
          <Typography variant="body1">
            We are proud to be widely regarded as the best in the business and
            we’re always on the lookout for new driving talent to join our team.
          </Typography>
          <Typography variant="body1">
            We demand a very high standard of service from our drivers, but in
            return we offer flexibility and great rates.
          </Typography>

          {/* Why shuttle Lane */}

          <Typography variant="h5" gutterBottom>
            Why Shuttlelane?
          </Typography>
          <div className={style.cards}>
            <div className={style.card}>
              <Money fontSize="large" style={{ color: "#fff" }} />
              <Typography variant="body1" paragraph>
                {" "}
                Earn Good{" "}
              </Typography>
            </div>
            <div className={style.card}>
              <Person fontSize="large" style={{ color: "#fff" }} />
              <Typography variant="body1" paragraph>
                {" "}
                Be your own boss
              </Typography>
            </div>
            <div className={style.card}>
              <People fontSize="large" style={{ color: "#fff" }} />
              <Typography variant="body1" paragraph>
                Meet interesting people
              </Typography>
            </div>
            <div className={style.card}>
              <Payment fontSize="large" style={{ color: "#fff" }} />
              <Typography variant="body1" paragraph>
                Weekly Payment
              </Typography>
            </div>
            <div className={style.card}>
              <QueryBuilder fontSize="large" style={{ color: "#fff" }} />
              <Typography variant="body1" paragraph>
                Flexible working hours{" "}
              </Typography>
            </div>
            <div className={style.card}>
              <AirplanemodeActive fontSize="large" style={{ color: "#fff" }} />
              <Typography variant="body1" paragraph>
                Airport Business
              </Typography>
            </div>
          </div>

          <Typography variant="h5" gutterBottom>
            Shuttlelane Selection Process
          </Typography>
          <Typography variant="body1">
            Every driver is carefully handpicked and assessed by the Shuttlelane
            team.
          </Typography>
          <Typography variant="body1">
            Apply- You can fill out the application <button>here</button>
          </Typography>
        </Grid>
      </Grid>
    );
  }
}
