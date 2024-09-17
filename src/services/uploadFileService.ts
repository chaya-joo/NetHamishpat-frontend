import axios from "../axios/axios";



const uploadFileService = async (file: File) => {

    const formData = new FormData();
    if (file) {
        formData.append('file', file);
    }
        const response = await axios.post('/uploadFile', formData);
        return response;

}

export default uploadFileService;