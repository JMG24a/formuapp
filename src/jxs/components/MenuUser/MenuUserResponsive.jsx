import React from "react";
import {
  Container,
  PosicionFlecha,
  IconosAlign,
  ExitIcon,
} from "./menuUserResponsive.js";
import { AiFillStar } from "react-icons/ai";
import { FaWpforms, FaUserAlt, FaPowerOff } from "react-icons/Fa";
import { BsArrowBarRight } from "react-icons/Bs";
import { GiHouse } from "react-icons/Gi";

const MenuUserResponsive = ({ setIsAuthMenu }) => {
  return (
    <div>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            margin: "0px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="\image\logo2.jpg"
            alt=""
            width="80"
            style={{ position: "absolute", top: "0", marginTop: "20px" }}
          />
          <IconosAlign>
            <GiHouse color="white" size="4em" />
            <FaWpforms color="white" size="4em" />
            <FaUserAlt color="white" size="4em" />
            <AiFillStar color="white" size="4em" />
          </IconosAlign>
          <ExitIcon>
            <FaPowerOff color="red" size="4em" />
          </ExitIcon>
        </div>
        <PosicionFlecha onClick={() => setIsAuthMenu(true)}>
          <BsArrowBarRight color="white" size="30px" />
        </PosicionFlecha>
      </Container>
    </div>
  );
};

export default MenuUserResponsive;
