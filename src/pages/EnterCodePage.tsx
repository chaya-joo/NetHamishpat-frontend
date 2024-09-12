import { Box, Typography, TextField, Button } from "@mui/material"
import { colors, messages } from '../locales'

const EnterCode = () => {
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
                variant="h6"
                component="h1"
                sx={{
                    marginBottom: 2,
                    textAlign: 'center',
                    color: colors.ORANGE_COLOR
                }}
            >
                {messages.login.ENTER_CODE_TITLE}
            </Typography>
            <TextField
                label="קוד"
                variant="outlined"
                fullWidth
                sx={{
                    maxWidth: 400,
                    marginBottom: 2,
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: colors.BLUE_COLOR,
                        },
                        '&:hover fieldset': {
                            borderColor: colors.BLUE_COLOR,
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: colors.BLUE_COLOR,
                        },
                    },
                    '& .MuiInputLabel-root': {
                        color: colors.BLUE_COLOR,
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                        color: colors.BLUE_COLOR,
                    },
                    '& .MuiInputBase-input': {
                        color: colors.BLUE_COLOR,
                    }
                }}
            />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: colors.BLUE_COLOR,
                }}
            >
                {messages.login.ENTER_CODE_SEND}
            </Button>
        </Box>
    )
}

export default EnterCode;