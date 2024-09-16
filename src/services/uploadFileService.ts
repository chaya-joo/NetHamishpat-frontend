import { useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../auth/utils";
import axios from "../utils/axios";
import paths from "../routes/paths";


const uploadFileService = async (file: File) => {
    const formData = new FormData();
    if (file) {
        formData.append('file', file);
    }
    const response = await axios.post('/uploadFile', formData);
    return response;
}

export default uploadFileService;