"use client";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/logo.svg";
import Link from "next/link";
import { MenuData } from "@/data/commonData";

import { DM_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

const Menubar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Image src={Logo} loading="lazy" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {MenuData.map((item, i) => (
                <Link className={dmSans.className} href={item.link} key={i}>
                  {item.title}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;
