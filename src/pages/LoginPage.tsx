import React, { useState } from 'react';
import { Box, Tabs, Tab, TextField, Button, Typography, ThemeProvider, createTheme } from '@mui/material';
import { colors, messages } from '../locales'

const LOGIN_MODE_EMAIL = 'M';
const LOGIN_MODE_PHONE = 'T';

const Login = () => {

  const [value, setValue] = useState(LOGIN_MODE_EMAIL);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          value={value}
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
        {value === LOGIN_MODE_EMAIL && (
          <Box>
            <TextField
              label="מייל"
              variant="outlined"
              fullWidth
              margin="normal"
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
            >
              {messages.login.LOGIN_WITH_EMAIL}
            </Button>
          </Box>
        )}
        {value === LOGIN_MODE_PHONE && (
          <Box>
            <TextField
              label="מספר טלפון"
              variant="outlined"
              fullWidth
              margin="normal"
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

