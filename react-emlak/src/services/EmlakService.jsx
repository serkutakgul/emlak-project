import axios from "axios";
const EMLAK_URL = "http://localhost:8080/api/emlak/";
class EmlakService{

    getEmlak(){
        return axios.get(EMLAK_URL);
        debugger;
    }
    createEmlak(emlak){
        debugger;
        return axios.post(EMLAK_URL,emlak)
    }

}
export default new EmlakService()
