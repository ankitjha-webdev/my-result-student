import axios from 'axios';

const RESULT_API_BASE_URL = "http://localhost:8085/api/students/results";

class ResultService {

    getResults(){
        return axios.get(RESULT_API_BASE_URL);
    }

    createResult(result){
        return axios.post(RESULT_API_BASE_URL, result);
    }

    getResultById(resultId){
        return axios.get(RESULT_API_BASE_URL + '/' + resultId);
    }

    updateResult(result, resultId){
        return axios.put(RESULT_API_BASE_URL + '/' + resultId, result);
    }

    deleteResult(resultId){
        return axios.delete(RESULT_API_BASE_URL + '/' + resultId);
    }
}

export default new ResultService()