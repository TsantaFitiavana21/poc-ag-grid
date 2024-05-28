import { AgGridReact } from "@ag-grid-community/react" // React Grid Logic
import "@ag-grid-community/styles/ag-grid.css" // Core CSS
import "@ag-grid-community/styles/ag-theme-quartz.css" // Theme

import { ColDef, ModuleRegistry, RowClickedEvent } from "@ag-grid-community/core"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { useNavigate } from "react-router"
import { useJobColumns } from "../hooks/useJobColumns"
import { useGetJobs } from "../../../queries/useGetJobs"
ModuleRegistry.registerModules([ClientSideRowModelModule])

// Create new GridExample component
export const JobGrid = () => {
    const { data } = useGetJobs()
    const colDefs = useJobColumns()
    const navigate = useNavigate()

    const handleRowClick = (e: RowClickedEvent) => {
        navigate(`/candidate/${e.data.id}`)
    }

    return (
        <div
            className={"ag-theme-quartz"}
            style={{ width: "100%", height: "100%" }}
        >
            <div className="mb-4 flex justify-between content-center">
                <h1 className="text-2xl font-bold">Jobs</h1>
                <input type="text" className="w-72 p-2" placeholder="Search" />
            </div>
            <AgGridReact onRowClicked={handleRowClick} rowData={data} columnDefs={colDefs as ColDef[]} />
        </div>
    )
}
