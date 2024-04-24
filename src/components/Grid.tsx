import { useMemo } from "react"
import { AgGridReact } from "@ag-grid-community/react" // React Grid Logic
import "@ag-grid-community/styles/ag-grid.css" // Core CSS
import "@ag-grid-community/styles/ag-theme-quartz.css" // Theme

import { ColDef, ModuleRegistry } from "@ag-grid-community/core"
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model"
ModuleRegistry.registerModules([ClientSideRowModelModule])

// Create new GridExample component
export const Grid = () => {
    // Row Data: The data to be displayed.
    const rowData = useMemo(() => [
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
        { make: "Mercedes", model: "EQA", price: 48890, electric: true },
        { make: "Fiat", model: "500", price: 15774, electric: false },
        { make: "Nissan", model: "Juke", price: 20675, electric: false },
    ], [])

    // Column Definitions: Defines & controls grid columns.
    const colDefs = useMemo(() => [
        { field: "make", valueGetter: "data.make.toUpperCase()"},
        { field: "model" },
        { field: "price" },
        { field: "electric" },
    ], [])

    // Container: Defines the grid's theme & dimensions.
    return (
        <div
            className={"ag-theme-quartz"}
            style={{ width: "100%", height: "100%" }}
        >
            <div className="mb-4 flex justify-between content-center">
                <h1 className="text-2xl font-bold">Car Inventory</h1>
                <input type="text" className="w-72 p-2" placeholder="Search"/>
            </div>
            <AgGridReact rowData={rowData} columnDefs={colDefs as ColDef[]} />
        </div>
    )
}
