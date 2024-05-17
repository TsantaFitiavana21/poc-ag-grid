export class CandidateAPI {
    static async listCandidates() {
        return fetch(import.meta.env.VITE_API_URL).then((res) => res.json()).then(data => data);
    }
}