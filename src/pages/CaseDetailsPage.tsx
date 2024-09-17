import { Box, Stack, Typography } from "@mui/material"
import { colors, messages } from "../locales";
import { useEffect, useState } from "react";
import axios from '../axios/axios';
import { DecisionType, SittingType } from "../types/types";


const CaseDetailsPage = () => {
   const [decisions, setDecisions] = useState<DecisionType[]>()
   const [sittings, setSittings] = useState<SittingType[]>()
   useEffect(() => {
      const fetchDecisions = async () => {
         debugger
         const response = await axios.get('/getDecisions');
         console.log('result: ', response.data)
         setDecisions(response.data)
      }
      const fetchSittings = async () => {
         const response = await axios.get('/getSittings');
         console.log('result: ', response.data)
         setSittings(response.data)
      }
      fetchDecisions();
      fetchSittings();
   }, [])
   return (<>
      <Box
         sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100',
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
         <Stack
            direction="row" 
            spacing={2} 
            alignItems="center" 
            justifyContent="space-between"
            sx={{color:colors.BLUE_COLOR}}>
            {decisions?.map(decisions => (
               <div dir="rtl">
                  <p><strong>מזהה החלטה:</strong> {decisions?.DecisionId}</p>
                  <p><strong>האם החלטה מהותית או טכנית:</strong> {decisions?.DecisionAttributeID}</p>
                  <p><strong>תיאור החלטה:</strong> {decisions?.DecisionDesc}</p>
                  <p><strong>מזהה החלטה מבוטלת:</strong> {decisions?.DecisionLinkID}</p>
                  <p><strong>סוג החלטה מבוטלת:</strong> {decisions?.DecisionLinkTypeID}</p>
                  <p><strong>שם החלטה:</strong> {decisions?.DecisionName}</p>
                  <p><strong>מספר תהליך:</strong> {decisions?.DecisionNumber}</p>
                  <p><strong>תאריך חתימת ההחלטה:</strong> {decisions?.DecisionSignatureDate}</p>
                  <p><strong>גורם חותם ההחלטה:</strong> {decisions?.DecisionSignatureUserID}</p>
                  <p><strong>שם גורם חותם ההחלטה:</strong> {decisions?.DecisionSignatureUserName}</p>
                  <p><strong>סוג החלטה:</strong> {decisions?.DecisionTypeID}</p>
                  <p><strong>מזהה מסמך החלטה:</strong> {decisions?.DocumentID}</p>
                  <p><strong>החלטה מבטלת:</strong> {decisions?.IsCanceledDecision ? 'כן' : 'לא'}</p>
                  <p><strong>האם מוסב:</strong> {decisions?.IsDecisionConverted ? 'כן' : 'לא'}</p>
                  <p><strong>האם ההחלטה מפרוטוקול:</strong> {decisions?.IsDecisionInProtocol ? 'כן' : 'לא'}</p>
                  <p><strong>האם הוראה:</strong> {decisions?.IsInstruction ? 'כן' : 'לא'}</p>
                  <p><strong>רמת חיסיון:</strong> {decisions?.PrivillageID ? 'כן' : 'לא'}</p>
               </div>
            ))}
            {sittings?.map(sittings => (
               <div dir="rtl">
                  <p><strong>תאריך דיון:</strong> {sittings?.SittingDate}</p>
                  <p><strong>שעת התחלת דיון:</strong> {sittings?.SittingTime}</p>
                  <p><strong>קוד סוג דיון:</strong> {sittings?.SittingTypeID}</p>
                  <p><strong>קוד סטטוס דיון:</strong> {sittings?.SittingActivityStatusID}</p>
                  <p><strong>שופט בדיון:</strong> {sittings?.JudgeName}</p>
               </div>
            ))}
         </Stack>
      </Box>
   </>)
}

export default CaseDetailsPage;