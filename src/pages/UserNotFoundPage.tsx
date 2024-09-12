import { colors, messages } from '../locales';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import paths from '../routes/paths';

const NotFoundPage = () => {
  const navigate = useNavigate(); 

  const handleGoHome = () => {
    navigate('/'+paths.LOGIN); 
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        padding: 2
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          marginBottom: 1,
          textAlign: 'center',
          color:colors.ORANGE_COLOR
        }}
      >
        {messages.login.USER_NOT_FOUND_TITLE}
      </Typography>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          marginBottom: 3, 
          color:colors.BLUE_COLOR
        }}
      >
        {messages.login.USER_NOT_FOUND_TEXT}
      </Typography>
      <Button
        variant="contained"
        onClick={handleGoHome}
        sx={{
          marginTop: 2, 
          backgroundColor:colors.BLUE_COLOR
        }}
      >
        {messages.login.BACK_LOGIN}
      </Button>
    </Box>
  );
};

export default NotFoundPage;
