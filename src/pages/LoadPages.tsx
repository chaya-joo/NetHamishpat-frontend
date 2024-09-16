import { Box, Typography } from "@mui/material"
import { colors, messages } from "../locales"

const LoadPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '75vh',
                padding: 2
            }}
        >
            <Typography
                variant="h5"
                component="h1"
                sx={{
                    marginBottom: 2,
                    textAlign: 'center',
                    color: colors.ORANGE_COLOR
                }}
            >
                {messages.actions.upLoadFile.LOAD_MESSAGE}
            </Typography>
        </Box>
    )
}

export default LoadPage;