import { CandidateAPIResponse } from "../pages/Home/types/Candidates";

export class CandidateAPI {
    static async listCandidates() {
        return fetch(import.meta.env.VITE_API_URL).then((res) => res.json()).then(data => data);
    }
    
    static async getCandidateById(id: string): Promise<CandidateAPIResponse> {
        return fetch(`${import.meta.env.VITE_API_URL_1}?id=${id}`).then((res) => res.json()).then(data => data);
    }
}