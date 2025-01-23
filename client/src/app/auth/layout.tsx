"use client";
import { styled } from "@mui/material";

const StyledDiv = styled("div")({
  backgroundImage: `url('/food.jpg')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: 'hidden'
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledDiv>{children}</StyledDiv>;
}
