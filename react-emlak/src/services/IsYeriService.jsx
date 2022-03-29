import axios from "axios";
const ISYERI_URL = "http://localhost:8080/api/isyeri/";

class IsYeriService{
  
    createIsYeri(isYeri){
        debugger;
        return axios.post(ISYERI_URL,isYeri)
    }
    
}

export default new IsYeriService;