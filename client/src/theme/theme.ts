'use client'
import { createTheme } from "@mui/material";
import montserrat from '@/fonts/montserrat'

const pxToRem = (value: number) => {
    return `${value / 16}rem`
}

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#F48E28'
        },
        secondary: {
            main: '#F5DDC4'
        },
        error: {
            main: '#FE645E'
        }
    },

    typography: {
        fontFamily: montserrat.style.fontFamily,
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1400,
        },
    },

    components: {
        MuiTypography: {},
    }
})

const customTypography = {
    h1: {
        fontSize: pxToRem(35),
        color: theme.palette.primary.main,
        fontWeight: 500,
        [theme.breakpoints.up('md')]: {
            fontSize: pxToRem(48)
        },
    },
    h2: {
        fontSize: pxToRem(30),
        color: '#000',
        fontWeight: 500,
        [theme.breakpoints.up('md')]: {
            fontSize: pxToRem(40)
        },
    },
    h3: {
        fontSize: pxToRem(24),
        color: '#000',
        fontWeight: 500,
        [theme.breakpoints.up('md')]:{
            fontSize: pxToRem(34),
        },
    },
    body1: {
        fontSize: pxToRem(14),
        color: '#000',
        fontWeight: 400,
        [theme.breakpoints.up('md')]: {
            fontSize: pxToRem(20)
        },
    },
    body2: {
        fontSize: pxToRem(15),
        color: '#000',
        fontWeight: 500,
        [theme.breakpoints.up('md')]: {
            fontSize: pxToRem(20),
        },
    },
};

if (theme?.components?.MuiTypography) {
    theme.components.MuiTypography.styleOverrides = customTypography;
}

export default theme;

