import axios from "../utils/axios";


export const verifyUserService=async(identifier:string,identifier_type:string)=>{
    const response = await axios.post('/verifyUser',
    { identifier: identifier, identifier_type: identifier_type },
  );
  return response
}


export const verifyCodeService=async(identifier:string,code:string)=>{
    const response = await axios.post('/verifyCode',
    { identifier: identifier, code: code }
);
  return response
}
