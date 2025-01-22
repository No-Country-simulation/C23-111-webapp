"use client";
import { AnimatePresence } from "framer-motion";
import * as motion from "motion/react-client";
import { Container, Typography, styled } from "@mui/material";
import { useState } from "react";

const PageContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  height: '100vh',
  width: '100vw',
  border: '1px solid red'
})

const AuthPage: React.FC = () => {
  const [selectedForm, setSelectedForm] = useState<"logIn" | "signUp">("logIn");
  return (
    <PageContainer>
      <nav style={nav}>
        <ul style={tabsContainer}>
          {["logIn", "signUp"].map((tab) => (
            <motion.li
              style={tabStyle}
              key={tab}
              initial={false}
              animate={{
                backgroundColor: tab === selectedForm ? "#eee" : "#eee0",
              }}
              onClick={() => setSelectedForm(tab as "logIn" | "signUp")}
            >
              {tab}
              {tab === selectedForm ? (
                <motion.div style={underline} layoutId="underline" />
              ) : null}
            </motion.li>
          ))}
        </ul>
      </nav>
      <main style={mainContainer}>
        <AnimatePresence mode="wait">
          {selectedForm === "logIn" && (
            <motion.div
              key="logIn"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={formContainer}
            >
              <Typography variant="h1">Iniciar Sesion</Typography>
            </motion.div>
          )}
          {selectedForm === "signUp" && (
            <motion.div
              key="signUp"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 200, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={formContainer}
            >
              <Typography variant="h1">Registrate</Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageContainer>
  );
};

const nav: React.CSSProperties = {
  marginBottom: "20px",
};

const tabsContainer: React.CSSProperties = {
  display: "flex",
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const tabStyle: React.CSSProperties = {
  padding: "10px 20px",
  cursor: "pointer",
  borderRadius: "5px",
  margin: "0 5px",
  userSelect: "none",
};

const underline: React.CSSProperties = {
  height: "2px",
  backgroundColor: "#000",
  marginTop: "5px",
  borderRadius: "2px",
};

const mainContainer: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  width: "100%",
  maxWidth: "500px",
};

const formContainer: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
};

export default AuthPage;
