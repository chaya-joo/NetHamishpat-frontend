import { Box, Typography, TextField, Button, Stack } from "@mui/material"
import { colors, messages } from '../locales'

const ChooseAction = () => {
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
                {messages.actions.CHOOSE_ACTION}
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    width: '100%',
                    maxWidth: 400,
                }}
            >
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: colors.BLUE_COLOR,
                        flex: 1,
                    }}
                >
                    {messages.actions.UPLOAD_DOCUMENTION}
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: colors.BLUE_COLOR,
                        flex: 1,
                    }}
                >
                    {messages.actions.DETAILS_OF_CASE}
                </Button>
            </Stack>
        </Box>
    )
}

export default ChooseAction;