import { useMemo } from "react"

export const useJobColumns = () => {
    return useMemo(
        () => [
            { field: "title", headerName: "Title" },
            { field: "company", headerName: "Company" },
            { field: "offered_structure", headerName: "Offered Structure" },
            { field: "offered_missions", headerName: "Offered Missions" },
            { field: "fields", headerName: "Fields" },
            { field: "availability_months", headerName: "Availability Month" },
        ],
        []
    )
}