import { useQuery } from "@tanstack/react-query"
import { GET_CANDIDATE_BY_ID } from "../constants/queryKey"
import { CandidateAPI } from "../services/candidates"
import { EnumMode } from "../pages/Home/types/EnumMode"

export const useGetCandidateById = (id: string, mode: string) => {
    return useQuery({
        queryKey: [GET_CANDIDATE_BY_ID, id],
        queryFn: () => CandidateAPI.getCandidateById(id),
        enabled: !!id && mode !== EnumMode.CREATE,
    })
}