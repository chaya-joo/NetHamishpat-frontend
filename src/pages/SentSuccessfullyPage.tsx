import { Box, Button, Stack, Typography } from "@mui/material"
import { colors, messages } from "../locales"
import { useNavigate } from "react-router-dom"
import paths from "../routes/paths";

const SentSuccessfullyPage = () => {
    const navigate = useNavigate();

    const handleCancelClick = () => {
        navigate(`/${paths.CASE_DETAILS}`)
    }
    const handleMoreActionClick = () => {
        navigate(`/${paths.CHOOSE_ACTION}`)
    }
    return (<>
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
                {messages.actions.upLoadFile.SENT_SECCESSFULLY_TITLE}
            </Typography>
            <Typography
                variant="h6"
                component="h1"
                sx={{
                    marginBottom: 2,
                    textAlign: 'center',
                    color: colors.BLUE_COLOR
                }}
            >
                {messages.actions.MORE_ACTION}
            </Typography>
            <Stack
                direction="row"
                spacing={2}>
                <Button
                    variant="contained"
                    onClick={handleCancelClick}
                    sx={{ backgroundColor: colors.BLUE_COLOR, color: colors.WHITE_COLOR }}>
                    {messages.actions.MORE_ACTION_REFUSE}
                </Button>
                <Button
                    variant="contained"
                    onClick={handleMoreActionClick}
                    sx={{ backgroundColor: colors.WHITE_COLOR, color: colors.BLUE_COLOR }}>
                    {messages.actions.MORE_ACTION_CONFIRM}
                </Button>
            </Stack>
        </Box>
    </>
    )
}

export default SentSuccessfullyPage;