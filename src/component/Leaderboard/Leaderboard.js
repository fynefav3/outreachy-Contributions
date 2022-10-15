import * as React from "react";
import { DataGrid, GridColDef} from "@mui/x-data-grid";

const Leaderboard = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "SN", width: 100, backgroundColor: "#00000"},
    { field: "user", headerName: "User", width: 1000},
    { field: "edit", headerName: "Edits", width: 120 },
  ];

  const rows = [
    { id: 1, user: "Tabby578", edit: 34 },
    { id: 2, user: "Ellenello", edit: 33 },
    { id: 3, user: "Poppa shark", edit: 22 },
    { id: 4, user: "EScollector", edit: 14 },
    { id: 5, user: "JemmaJazz", edit: 13 },
    { id: 6, user: "Tom94022", edit: 11 },
    { id: 7, user: "Apollo468", edit: 10 },
    { id: 8, user: "Affern ", edit: 9 },
    { id: 9, user: "Viegrel", edit: 7 },
];

  return (
    <div
      style={{
        alignItems: "center",
        height: "80vh",
        marginTop: 100,
        marginLeft: 30,
        marginRight: 30,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Leaderboard;
