"use client"
import React from "react";
import { CommonButton } from "@/Components";
import { styled, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const StyledHeader = styled("header")({
  display: "flex",
  padding: "25px",
  height: "15%",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 9px 11px -6px rgba(0,0,0,0.75)",
});

const FrameBox = styled(Box)({
  display: "flex",
  height: "80px",
  width: "80px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#ffffff",
  borderRadius: "50%",
  border: "2px solid gray",
  transition:
    "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 10px rgba(0, 0, 0, 0.15)",
  },
});

export const Header: React.FC = () => {
  const router = useRouter();
  return (
    <StyledHeader>
      <div></div>
      <FrameBox>
        <Link href="/">
          <Image src="/logo.png" width="70" height="70" alt="logo" />
        </Link>
      </FrameBox>
      <CommonButton
        text="Iniciar sesión"
        buttonSize="small"
        variant="contained"
        clickHandler={() => router.push("/auth")}
      />
    </StyledHeader>
  );
};
