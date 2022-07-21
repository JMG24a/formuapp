import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
//components
import { Logo } from "../../components/Logo/Logo";
//styled
import {
  Container,
  ListStyle,
  ListStyleContainer,
  CloseButton,
  FollowUs,
  BottomNav,
  PosicionFlecha,
} from "./menuUser.js";
import {
  AiFillHome,
  AiFillFacebook,
  AiFillInstagram,
  AiFillStar,
} from "react-icons/ai";
import { FaWpforms, FaUserAlt } from "react-icons/Fa";
import { BsArrowBarLeft } from "react-icons/Bs";

function MenuUser({ setIsAuthMenu }) {
  // const router = useRouter();

  return (
    <Container>
      <div style={{ display: "flex", height: "100vh", margin: "0px" }}>
        <ListStyleContainer>
          <img
            src="image\logo-horizontal.png"
            alt=""
            width="300"
            style={{ marginBottom: "60%" }}
          />
          <ListStyle>
            <AiFillHome
              color="white"
              size="1.2em"
              style={{ marginRight: "20px" }}
            />
            Inicio
          </ListStyle>
          <ListStyle>
            <FaWpforms
              color="white"
              size="1.2em"
              style={{ marginRight: "20px" }}
            />
            Mis Formularios
          </ListStyle>
          <ListStyle>
            {" "}
            <FaUserAlt
              color="white"
              size="1.2em"
              style={{ marginRight: "20px" }}
            />
            Perfil
          </ListStyle>
          <ListStyle>
            {" "}
            <AiFillStar
              color="white"
              size="1.2em"
              style={{ marginRight: "20px" }}
            />
            Favoritos
          </ListStyle>
        </ListStyleContainer>
        <BottomNav>
          <CloseButton>Cerrar Sesión</CloseButton>

          <FollowUs>
            <p>Siguenos</p>
            <AiFillFacebook
              color="white"
              size="30px"
              style={{ marginLeft: "20px" }}
            />
            <AiFillInstagram
              color="white"
              size="30px"
              style={{ marginLeft: "10px" }}
            />
          </FollowUs>
          <hr style={{ width: "100%", color: "5px solid white" }} />
          <p style={{ color: "white", textAlign: "center", fontSize: "1.5em" }}>
            Todos los derechos reservados, 2022
          </p>
        </BottomNav>
        <PosicionFlecha onClick={() => setIsAuthMenu(false)}>
          <BsArrowBarLeft color="white" size="30px" />
        </PosicionFlecha>
      </div>
    </Container>
  );
}

export { MenuUser };
