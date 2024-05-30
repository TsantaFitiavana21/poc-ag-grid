import { CandidateAPIResponse } from "../pages/Home/types/Candidates";

export class CandidateAPI {
    static async listCandidates() {
        return fetch(import.meta.env.VITE_CANDIDATE_LIST_URL).then((res) => res.json()).then(data => data);
    }
    
    static async getCandidateById(id: string): Promise<CandidateAPIResponse> {
        return fetch(`${import.meta.env.VITE_CANDIDATE_DETAIL_URL}?id=${id}`).then((res) => res.json()).then(data => data);
    }
}