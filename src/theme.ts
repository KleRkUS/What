import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        body: "Inter, sans-serif",
        heading: "Inter, sans-serif"
    },
    fontWeights: {
        semibold: 400,
        bold: 400
    },
    colors: {
        green: {
            500: '#95E17A'
        },
        blue: {
            500: '#203685',
            600: '#203685'
        }
    },
    styles: {
        global: {
            ".option__label:nth-of-type(11n)": {
                marginTop: '0!important'
            }
        }
    }
})

export default theme;
