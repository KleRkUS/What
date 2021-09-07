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
            },
            ".slider__range": {
                width: "100%",
                height: "8px",
                background: "linear-gradient(270deg, #3B9CE2 0%, #7A6759 103.11%)",
                borderRadius: "20px",
                WebkitAppearance: "none",
                appearance: "none",

                "&::-webkit-slider-thumb": {
                    background: "#3B9CE2",
                    borderRadius: "1px",
                    height: "60px",
                    width: "8px",
                    WwebkitAppearance: "none",
                    appearance: "none",
                    cursor: "pointer"
                }
            },
            ".slider__label": {
                position: 'relative'
            }
        }
    }
})

export default theme;
