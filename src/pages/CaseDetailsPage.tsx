import { Box, Typography } from "@mui/material"
import { colors, messages } from "../locales";
import { useEffect, useState } from "react";
import axios from '../axios/axios';


const CaseDetailsPage = () => {
   const [res, setRes] = useState(0)
   useEffect(() => {
      const fetchRes = async() => {
         const response = await axios.post('/checkWebService', { num1: 9, num2: 65 });
         console.log('result: ',response.data)
         setRes(response.data)
      }
      fetchRes();
   })
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
            {messages.actions.caseDetails.CASE_DETAILS_TITLE}
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
            {res}
         </Typography>
      </Box>
   </>)
}

export default CaseDetailsPage;