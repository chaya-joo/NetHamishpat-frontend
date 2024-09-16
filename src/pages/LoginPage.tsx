import React, { useEffect, useState } from 'react';
import { Box, Tabs, Tab, TextField, Button, Typography } from '@mui/material';
import { colors, messages } from '../locales';
import axios from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import paths from '../routes/paths';
import { verifyUserService } from '../services/loginService';

const LOGIN_MODE_EMAIL = 'email';
const LOGIN_MODE_PHONE = 'phone';

const Login = () => {

  const [identifier_type, setIdentifier_type] = useState(LOGIN_MODE_EMAIL);
  const [identifier, setIdentifier] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await verifyUserService(identifier,identifier_type);
      const code = response.data.code || null;
      if (response.status === 200) {
        navigate(`/${paths.ENTER_CODE}`, {
          state: {
            identifier: identifier,
            code: code
          }
        });
      }
    } catch (error) {
      navigate(`/${paths.USER_NOT_FOUND}`)
    }
  };

  const handleChange = (event:any, newValue:any) => {
    setIdentifier_type(newValue);
  };

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setIdentifier(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: colors.WHITE_COLOR
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: colors.WHITE_COLOR
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 2, textAlign: 'center', color: colors.BLUE_COLOR }}>
          {messages.login.LOGIN_TITLE}
        </Typography>
        <Tabs
          value={identifier_type}
          onChange={handleChange}
          aria-label="login tabs"
          sx={{
            marginBottom: 2,
            flexDirection: 'row-reverse',
            '& .MuiTab-root': {
              color: colors.ORANGE_COLOR,
              '&.Mui-selected': {
                color: colors.ORANGE_COLOR,
              }
            },
            '& .MuiTabs-indicator': {
              backgroundColor: colors.ORANGE_COLOR,
            }
          }}
        >
          <Tab value={LOGIN_MODE_EMAIL} label="מייל" />
          <Tab value={LOGIN_MODE_PHONE} label="טלפון" />
        </Tabs>
        {identifier_type === LOGIN_MODE_EMAIL && (
          <Box>
            <TextField
              label="מייל"
              variant="outlined"
              fullWidth
              margin="normal"
              value={identifier}
              onChange={handleInputChange}
              sx={{
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
                marginTop: 2
              }}
              fullWidth
              onClick={handleLogin}
            >
              {messages.login.LOGIN_WITH_EMAIL}
            </Button>
          </Box>
        )}
        {identifier_type === LOGIN_MODE_PHONE && (
          <Box>
            <TextField
              label="מספר טלפון"
              variant="outlined"
              fullWidth
              margin="normal"
              value={identifier}
              onChange={handleInputChange}
              sx={{
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
              color="primary"
              fullWidth
              sx={{
                backgroundColor: colors.BLUE_COLOR,
                marginTop: 2
              }}
              onClick={handleLogin}
            >
              {messages.login.LOGIN_WITH_PHONE}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Login;
