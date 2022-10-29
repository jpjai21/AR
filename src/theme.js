 import { alpha, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
    fontSize: 14,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    h1: {
      fontSize: "48px",
      fontWeight: 500,
      textTransform: "uppercase",
      color:'#FFD369',
      filter:'none'
    },
    h2: {
      fontSize: "40px",
      lineHeight: "48px",
      fontWeight: "bold",
      letterSpacing: "0.5px",
      textTransform: "uppercase",
      color:'#FFD369',
      opacity:'1',
      filter:'none'
    },
    h3: {
      fontSize: "20px",
      lineHeight: "56px",
      fontWeight: 600,
      textTransform: "uppercase",
      color:'#EEEEEE',

     textTransform: "capitalize",
      color:'#121212',
    },
    h4: {
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: 600,
      textTransform: "uppercase",
      color:'red',
      display:"-ms-grid",

     textTransform: "capitalize",
      color:'red',
    },
    body2: {
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "22px",
      textTransform: "capitalize",
      color:'#121212'
    },
    subtitle1: {
      fontSize: "13px",
      lineHeight: "20px",
    },
    subtitle2: {
      fontSize: "10px",
      lineHeight: "20px",
    },
    button: {
      fontSize: "14px",
      lineHeight: "25px",
      fontWeight: 500,
      textTransform: "capitalize",
    },
  },
  palette: {
    primary: {
      main: "#000",
      contrastText:'#EEEEEE'
    },
    secondary: {
      main: "#121212",
      contrastText:'#EEEEEE'
    },
    success: {
      main: '#64748B',
      contrastText:'#EEEEEE'
    },
    info:{
      main:'#EEEEEE'
    }
    

  },
  shape: {
    borderRadius: 5,
  },
  mixins: {
    toolbar: {
      maxHeight: 60,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1548,
      xl: 1920,
    },
  },
  components: {
    MuiStepLabel: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.1,
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: alpha("#FFFFFF", 0.01),
          padding: "1.275rem",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: "auto",
        },
        body: {
          background: "#fffff",
          backgroundRepeat: "no-repeat",
          fontSize: "0.875rem",
          lineHeight: 1.43,
          letterSpacing: "0.01071em",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: alpha("#FFF", 0.02),
          backgroundImage: "none",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: "24px",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: "transparent",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#121212",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
        badge: {
          border: "2px solid #6cb970",
          fontWeight: 100,
          height: 20,
          width: 20,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: "0.125rem",
        },
      },
    },
    MuiAlertTitle: {
      styleOverrides: {
        root: {
          fontWeight: "normal",
          marginBottom: 0,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        action: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 0,
        },
        message: {
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "flex-start",
        },
        icon: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        filled: {
          minWidth: "500px",
          backdropFilter: "blur(16px)",
        },
        filledInfo: {
          backgroundColor: alpha("#43A5FF", 0.1),
          color: "#fff",
        },
        filledSuccess: {
          backgroundColor: alpha("#F2BC68", 0.1),
          color: "#fff",
        },
        filledError: {
          backgroundColor: alpha("#F55555", 0.1),
          color: "#fff",
        },
        filledWarning: {
          backgroundColor: alpha("#FF8A1E", 0.1),
          color: "#fff",
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: "4rem",
          height: "2rem",
          padding: 0,
          marginLeft: "0.25rem",
        },
        track: {
          borderRadius: "1.5rem",
          border: `2px solid ${alpha("#FFFFFF", 0.24)}`,
          background: "transparent",
        },
        switchBase: {
          color: "white",
          "&.Mui-checked": {
            color: "white",
            right: "0.625rem",
            left: "inherit",
            "& + .MuiSwitch-track": {
              background: "#F2BC68",
              opacity: 1,
            },
          },
        },
        thumb: {
          width: "1.5rem",
          height: "1.5rem",
          position: "relative",
          top: "-0.313rem",
          left: "-0.313rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          backgroundColor: "#1c2541",
          color: "#fff",
        },
        contained: {
          backgroundColor: "#1c2541",
          color: "#FFF",
          margin: "10px 0px",
          padding: "10px 0",
          "&:hover": {
            backgroundColor: "#d3c094",
            boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px'
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#121212",
          color: "#121212",
          background: "#fff",
          "&:hover": {
            borderColor: "#121212",
            color: "#123123",
          },
          "&:focused": {
            borderColor: "#42855B",
            color: "black",
          },
        },
      },
    },
  },
});

export default theme;