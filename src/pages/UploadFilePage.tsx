import { Box, Button, Stack, Typography } from "@mui/material"
import { colors, messages } from "../locales"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import paths from "../routes/paths";

const UploadFilePage = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setSelectedFile(file);
    }

    const handleClick = () => {
        const fileInput = document.getElementById('file-input') as HTMLInputElement | null;
        if (fileInput) { fileInput.click(); }
    }

    const handleCancelClick = () => {
        navigate(`/${paths.CHOOSE_ACTION}`)
    }

    const handleSendClick = () => {
        
      navigate(`/${paths.LOAD}`)
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
                {messages.actions.upLoadFile.UPLOAD_FILE_TITLE}
            </Typography>
            <div>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: colors.BLUE_COLOR,
                        flex: 1,
                        whiteSpace: 'nowrap',
                        width: 200,
                    }}
                    onClick={handleClick}
                >
                    {messages.actions.UPLOAD_DOCUMENTION}
                </Button>
                <input
                    type="file"
                    id="file-input"
                    style={{ display: 'none' }}
                    onChange={handleInputChange}
                />
            </div>
            {selectedFile && (<>
                <Typography
                    variant="body2"
                    component="h1"
                    sx={{
                        marginBottom: 2,
                        textAlign: 'center',
                        color: colors.BLUE_COLOR,
                        direction: 'rtl',
                        marginTop: 3
                    }}>
                    {messages.actions.upLoadFile.SELECTED_FILE}{selectedFile.name}
                </Typography>
                <Stack
                    direction="row"
                    spacing={2}>
                    <Button
                        variant="contained"
                        onClick={handleSendClick}
                        sx={{ backgroundColor: colors.BLUE_COLOR, color: colors.WHITE_COLOR }}>
                        {messages.actions.upLoadFile.CONFIRM}
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleCancelClick}
                        sx={{ backgroundColor: colors.WHITE_COLOR, color: colors.BLUE_COLOR }}>
                        {messages.actions.upLoadFile.CANCEL}
                    </Button>
                </Stack>
            </>
            )}
        </Box>
    )
}

export default UploadFilePage;