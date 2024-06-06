import { AgGridReact } from "@ag-grid-community/react" // React Grid Logic
import "@ag-grid-community/styles/ag-grid.css" // Core CSS
import "@ag-grid-community/styles/ag-theme-quartz.css" // Theme

import {
    ColDef,
    ModuleRegistry,
    RowClickedEvent,
} from "@ag-grid-community/core"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
import { useGetCandidate } from "../../../queries/useGetCandidate"
import { useGridColumns } from "../hooks/useGridColumns"
import { useNavigate } from "react-router"
import { PopoverButton } from "./PopoverButton"
import { useRef } from "react"
ModuleRegistry.registerModules([ClientSideRowModelModule])

// Create new GridExample component
export const CandidateGrid = () => {
    const { data } = useGetCandidate()
    const colDefs = useGridColumns()
    const navigate = useNavigate()
    const gridRef = useRef<AgGridReact>(null)

    const handleRowClick = (e: RowClickedEvent) => {
        navigate(`/candidate/${e.data.id}`)
    }

    const handleAddClick = () => {
        navigate("/candidate/add")
    }

    const selectAllRows = () => {
        gridRef.current!.api.selectAll()
    }

    return (
        <div
            className={"ag-theme-quartz"}
            style={{ width: "100%", height: "100%" }}
        >
            <div className="mb-4 flex justify-between content-center">
                <h1 className="text-2xl font-bold">Candidates</h1>
                <div className="flex space-x-4">
                    <button
                        onClick={handleAddClick}
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Add Candidate
                    </button>
                    <PopoverButton selectAllRows={selectAllRows} />
                    <input
                        type="text"
                        className="w-72 p-2"
                        placeholder="Search"
                    />
                </div>
            </div>
            <AgGridReact
                ref={gridRef}
                rowSelection="multiple"
                onRowDoubleClicked={handleRowClick}
                rowData={data}
                columnDefs={colDefs as ColDef[]}
            />
        </div>
    )
}
