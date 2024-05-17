import { useQuery } from "@tanstack/react-query"
import { LIST_CANDIDATES } from "../constants/queryKey"
import { CandidateAPI } from "../services/candidates"

export const useGetCandidate = () => {
    return useQuery({
        queryKey: [LIST_CANDIDATES],
        queryFn: () => CandidateAPI.listCandidates()
    })
}