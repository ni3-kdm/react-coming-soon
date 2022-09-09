import React, { Component } from "react";
import Logo from "./Logo";
import Title from "./Title";
import Description from "./Description";
import Links from "./Links";
import Countdown from "./Countdown";
import logo from "../images/gear-with-holes.svg";
import telegram from "../images/fbookicon.svg";
import "../styles/ComingSoon.css";

class ComingSoon extends Component {
  state = {
    countdown: {
      countdownDate:  "2022-10-15 18:00:00",
    },
    logo: {
      alt: "Spinning Gear",
      src: logo,
      spinSpeed: "slow"
    },
    title: {
      text: "लवकरच आपल्या सेवेत"
    },
    description: {
      text: "धनगर शुभ विवाह",
      slogan: "धनगर समाजासाठी महाराष्ट्रातील नंबर १ विवाह संस्था",
    },
    links: [
      {
        url: "https://t.me/dhangarshubhvivah",
        logo: telegram,
        text: ""
      },
    ],
  };

  render() {
    const {
      title,
      description,
      logo,
      links,
      countdown,
    } = this.state;

    return (
      <div className="background">
        <Countdown countdownDate={countdown.countdownDate} />
        <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} />
        <Title text={title.text} />
        <Description
          text={description.text}
          slogan={description.slogan}
        />
        <Links links={links} />
      </div>
    );
  }
}

export default ComingSoon;
