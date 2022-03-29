import axios from "axios";
const SAHIP_URL = "http://localhost:8080/api/musteri/";
class SahipService{

    createMulkSahibi(mulksahibi){
        debugger;
        return axios.post(SAHIP_URL,mulksahibi)
    }
}

export default new SahipService;