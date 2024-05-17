import { useEffect, useMemo } from "react"
import { AgGridReact } from "@ag-grid-community/react" // React Grid Logic
import "@ag-grid-community/styles/ag-grid.css" // Core CSS
import "@ag-grid-community/styles/ag-theme-quartz.css" // Theme

import { ColDef, ModuleRegistry } from "@ag-grid-community/core"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { useGetCandidate } from "../queries/useGetCandidate"
import { useGridColumns } from "../hooks/useGridColumns"
ModuleRegistry.registerModules([ClientSideRowModelModule])

// Create new GridExample component
export const Grid = () => {
    const { data } = useGetCandidate()
    const colDefs = useGridColumns()

    return (
        <div
            className={"ag-theme-quartz"}
            style={{ width: "100%", height: "100%" }}
        >
            <div className="mb-4 flex justify-between content-center">
                <h1 className="text-2xl font-bold">Car Inventory</h1>
                <input type="text" className="w-72 p-2" placeholder="Search" />
            </div>
            <AgGridReact rowData={data} columnDefs={colDefs as ColDef[]} />
        </div>
    )
}
