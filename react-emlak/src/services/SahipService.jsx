import axios from "axios";
const SAHIP_URL = "http://localhost:8080/api/musteri/create";

class SahipService{

    createMulkSahibi(mulksahibi){
        debugger;
        return axios.post(SAHIP_URL, null,{params: mulksahibi})
    }
}

export default new SahipService;