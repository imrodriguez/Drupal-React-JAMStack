import {
    ThemeProvider,
    createGlobalStyle
} from "styled-components"

const theme = {
    colors: {
        primary: "#9b003dff",
        secondary: "#ffcd00ff",
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }

    a:hover {
        cursor: pointer; 
    }
`

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
    </ThemeProvider>
)

export default Theme