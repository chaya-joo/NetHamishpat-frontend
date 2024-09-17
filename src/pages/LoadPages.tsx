import { Box, Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom";
import { colors, messages } from "../locales"
import { useEffect } from "react";
import axios from '../axios/axios';
import { getToken, removeToken } from "../auth/utils";
import uploadFileService from "../services/uploadFileService";
import paths from "../routes/paths";

const LoadPage = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const file = location.state?.file;

    useEffect(() => {
        const upload = async () => {
            try {
                const response = await uploadFileService(file);
                if (response.status == 200)
                    navigate(`/${paths.SENT_SUCCESSFULLY}`);
                if (response.status == 401) {
                    removeToken();
                    navigate(`/${paths.LOGIN}`)
                }
            }
            catch (error) {
                console.error(error)
            }
        }
        upload();
    })
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