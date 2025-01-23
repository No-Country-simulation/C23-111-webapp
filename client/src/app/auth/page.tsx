"use client";
import { AnimatePresence } from "framer-motion";
import * as motion from "motion/react-client";
import { Container, styled } from "@mui/material";
import { useState } from "react";
import { LogInForm } from "./_components/LogInForm";
import { SignUpForm } from "./_components/SignUpForm";
import theme from "@/theme/theme";

const PageContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: "100vh",
});

const StyledNav = styled("nav")({
  margin: "7%",
});

const TabsContainer = styled("ul")({
  display: "flex",
  backgroundColor: "whitesmoke",
  borderRadius: "5px",
  boxShadow: '9px 9px 20px -9px rgba(0,0,0,0.39)'
});

const tabStyle: React.CSSProperties = {
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "5px",
};

const underline: React.CSSProperties = {
  height: "2px",
  backgroundColor: "#f5f5f5",
  marginTop: "5px",
};

const formContainer: React.CSSProperties = {
  display: "flex",
};

const AuthPage: React.FC = () => {
  const [selectedForm, setSelectedForm] = useState<"Iniciar sesión" | "Crear cuenta">("Iniciar sesión");

  return (
    <PageContainer>
      <StyledNav>
        <TabsContainer>
          {["Iniciar sesión", "Crear cuenta"].map((tab) => (
            <motion.li
              style={tabStyle}
              key={tab}
              initial={false}
              animate={{
                backgroundColor: tab === selectedForm ? [theme.palette.primary.main] : "#eee0",
              }}
              transition={{duration: 0.4}}
              onClick={() => setSelectedForm(tab as "Iniciar sesión" | "Crear cuenta")}
            >
              {tab}
              {tab === selectedForm ? (
                <motion.div style={underline} layoutId="underline" />
              ) : null}
            </motion.li>
          ))}
        </TabsContainer>
      </StyledNav>
      <main>
        <AnimatePresence mode="wait">
          {selectedForm === "Iniciar sesión" && (
            <motion.div
              key="logIn"
              initial={{ x: 600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -600, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={formContainer}
            >
              <LogInForm />
            </motion.div>
          )}
          {selectedForm === "Crear cuenta" && (
            <motion.div
              key="signUp"
              initial={{ x: -600, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 600, opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={formContainer}
            >
              <SignUpForm />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageContainer>
  );
};

export default AuthPage;
