import { Box, Typography, TextField, Button, Stack } from "@mui/material"
import { colors, messages } from '../locales'
import { getToken } from "../auth/utils"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import path from "path"
import paths from "../routes/paths"

const ChooseAction = () => {

    const navigate = useNavigate()

    const handleClickUploadFile = () => {
        navigate(`/${paths.UPLOAD_FILE}`)
    }

    const handleCaseDetailsClick = () => {
        navigate(`/${paths.CASE_DETAILS}`)
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
                variant="h5"
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
                spacing={1}
                sx={{
                    width: '100%',
                    maxWidth: 400,
                }}
            >
                <div>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: colors.BLUE_COLOR,
                            flex: 1,
                            whiteSpace: 'nowrap',
                            width: 200,
                        }}
                        onClick={handleClickUploadFile}
                    >
                        {messages.actions.UPLOAD_DOCUMENTION}
                    </Button>
                </div>
                <Button
                    variant="contained"
                    onClick={handleCaseDetailsClick}
                    sx={{
                        backgroundColor: colors.BLUE_COLOR,
                        flex: 1,
                        width: 200,
                        whiteSpace: 'nowrap',
                    }}
                >
                    {messages.actions.DETAILS_OF_CASE}
                </Button>
            </Stack>
        </Box>
    )
}

export default ChooseAction;