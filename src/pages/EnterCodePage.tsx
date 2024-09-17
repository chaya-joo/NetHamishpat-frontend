import { Box, Typography, TextField, Button } from "@mui/material"
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { colors, messages } from '../locales'
import axios from '../axios/axios';
import paths from "../routes/paths";
import { setToken } from "../auth/utils";
import { verifyCodeService } from "../services/loginService";

const EnterCode = () => {
    const location = useLocation();
    const { identifier, code } = location.state || {};
    const navigate = useNavigate()

    const handleVerifyCode = async () => {
        try {
            const response = await verifyCodeService(identifier, code)
            const token = response.data.token;
            setToken(token)
            navigate(`/${paths.CHOOSE_ACTION}`)
        }
        catch (error) {
            console.error(error)
        }
    }

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
                variant="h4"
                component="h1"
                sx={{
                    marginBottom: 2,
                    textAlign: 'center',
                    color: colors.ORANGE_COLOR
                }}
            >
                {messages.login.ENTER_CODE_TITLE}
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
                {messages.login.ENTER_CODE_TEXT}
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
                onClick={handleVerifyCode}
            >
                {messages.login.ENTER_CODE_SEND}
            </Button>
        </Box>
    )
}

export default EnterCode;