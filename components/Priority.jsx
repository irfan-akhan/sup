import React, { Component } from "react";
import car from "../styles/Carform.module.css";
import Link from "next/link";
export default class Priority extends Component {
  state = {
    service: "",
    airport: "",
    firstName: "",
    lastName: "",
    passengers: "",
    flightNumber: "",
  };
  onChangeHandler(e) {
    e.persist();
    console.log(e.target);
    formType === "Airport-Pickup"
      ? setAirportPickupValues({
          ...airportPickupValues,
          [e.target.id]: e.target.value,
        })
      : setAirportDropoffValues({
          ...airportDropoffValues,
          [e.target.id]: e.target.value,
        });
    console.log("airportPickupValues:", airportPickupValues);
    console.log("airportDropoffValues:", airportDropoffValues);
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <form className={car.form} id="pass">
          <input
            required
            placeholder="First Name"
            type="text"
            name=""
            id=""
            value={this.state.firstName}
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <input
            required
            placeholder="Last Name"
            type="text"
            name=""
            id=""
            value={this.state.lastName}
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
          <select
            name=""
            id=""
            value={this.state.service}
            required
            onChange={(e) => this.setState({ service: e.target.value })}
          >
            <option value="" selected disabled value="null" id="null">
              Service Type{" "}
            </option>
            <option value="Pickup">Airport Pickup </option>
            <option value="dropoff">Airport Dropoff </option>
          </select>
          <select
            name="airport"
            id="dropoffAirport"
            value={this.state.airport}
            required
            onChange={(e) => this.setState({ airport: e.target.value })}
          >
            <option selected disabled value="null" id="null">
              Select Dropoff Airport
            </option>
            <option value="Murtala Muhammed International Airport">
              Murtala Muhammed International Airport
            </option>
            <option value="Murtala Muhammed Domestic Airport">
              Murtala Muhammed Domestic Airport
            </option>
            <option value="Port Harcourt International Airport">
              Port Harcourt International Airport
            </option>
            <option value="Nnamdi Azikwe International Airport">
              Nnamdi Azikwe International Airport
            </option>
            <option value="Kotoka International Airport">
              Kotoka International Airport
            </option>
            <option value="Kumasi Airport">Kumasi Airport</option>
            <option value="London Heathrow Airport">
              London Heathrow Airport
            </option>
            <option value="Gatwick Airport">Gatwick Airport</option>
            <option value="London City Airport">London City Airport</option>
          </select>

          <input
            required
            placeholder="Number of Passengers"
            type="number"
            name=""
            id=""
            value={this.state.passengers}
            onChange={(e) => this.setState({ passengers: e.target.value })}
          />
          <input
            type="text"
            name=""
            required
            placeholder="Enter Flight Number"
            id=""
            value={this.state.flightNumber.toUpperCase()}
            onChange={(e) => this.setState({ flightNumber: e.target.value })}
          />
          <Link href="/booking">
            <a className={car.btnGrad}>Procced</a>
          </Link>
        </form>
      </div>
    );
  }
}
