import { useMemo } from "react"

export const useGridColumns = () => {
    return useMemo(
        () => [
            { field: "first_name", headerName: "First Name" },
            { field: "last_name", headerName: "Last Name" },
            { field: "email", headerName: "Email" },
            { field: "current_position", headerName: "Current Position" },
            { field: "availability_months", headerName: "Availability Months" },
            { field: "benefits", headerName: "Benefits" },
            { field: "desired_missions", headerName: "Desired Missions" },
            { field: "desired_structure", headerName: "Desired Structure" },
            {
                field: "freelance",
                headerName: "Freelance",
                valueFormatter: (params: any) => `${params.value.tjm} €`,
            },
            { field: "introduction", headerName: "Introduction" },
            {
                field: "salary_expectations",
                headerName: "Salary Expectations",
                valueFormatter: (params: any) =>
                    `fixed: ${params.value.fixed} €, variable: ${params.value.variable} €`,
            },
            { field: "phone", headerName: "Phone" },
            { field: "experience_years", headerName: "Experience Years" },
            { field: "field", headerName: "Field" },
        ],
        []
    )
}
