import React, { useState } from "react";
import { useTable, Column } from "react-table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; // Adjust the import according to your UI library
import { FiDatabase, FiCode, FiCloud } from "react-icons/fi";

interface SnowflakeData {
  id: number;
  table: string;
  schema: string;
  records: number;
}

interface TerraformData {
  id: number;
  resource: string;
  name: string;
  status: string;
}

interface AzureData {
  id: number;
  name: string;
  region: string;
}

const snowflakeColumns: Column<SnowflakeData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Table", accessor: "table" },
  { Header: "Schema", accessor: "schema" },
  { Header: "Records", accessor: "records" },
];

const terraformColumns: Column<TerraformData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Resource", accessor: "resource" },
  { Header: "Name", accessor: "name" },
  { Header: "Status", accessor: "status" },
];

const azureColumns: Column<AzureData>[] = [
  { Header: "ID", accessor: "id" },
  { Header: "Name", accessor: "name" },
  { Header: "Region", accessor: "region" },
];

const dummyData = {
  snowflake: [
    { id: 1, table: "Users", schema: "public", records: 1500 },
    { id: 2, table: "Orders", schema: "sales", records: 4500 },
    { id: 3, table: "Products", schema: "inventory", records: 200 },
  ],
  terraform: [
    { id: 1, resource: "aws_instance", name: "web_server", status: "running" },
    { id: 2, resource: "aws_s3_bucket", name: "my_bucket", status: "available" },
    { id: 3, resource: "aws_lambda_function", name: "process_data", status: "active" },
  ],
  azure: [
    { id: 1, name: "VM1", region: "East US" },
    { id: 2, name: "VM2", region: "West Europe" },
  ],
};

interface DataTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
}

const DataTable = <T extends object>({ columns, data }: DataTableProps<T>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} style={{ borderBottom: "solid 3px red", background: "aliceblue", color: "black", fontWeight: "bold", padding: "10px" }}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} style={{ padding: "10px", border: "solid 1px gray" }}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const DataCleanRoom: React.FC = () => {
  const [selectedData, setSelectedData] = useState<any[]>([]);
  const [columns, setColumns] = useState<Column<any>[]>([]);

  const handleCardClick = (type: "snowflake" | "terraform" | "azure") => {
    switch (type) {
      case "snowflake":
        setSelectedData(dummyData.snowflake);
        setColumns(snowflakeColumns);
        break;
      case "terraform":
        setSelectedData(dummyData.terraform);
        setColumns(terraformColumns);
        break;
      case "azure":
        setSelectedData(dummyData.azure);
        setColumns(azureColumns);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      <style>
        {`
          .cards-container {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
          }
          .table-container {
            margin-top: 20px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
          }
          th {
            background-color: #f4f4f4;
            font-weight: bold;
          }
        `}
      </style>
      <h1></h1>
      <div className="cards-container">
        <Card onClick={() => handleCardClick("snowflake")}>
          <CardHeader>
            <FiDatabase size={30} />
            <CardTitle>Snowflake</CardTitle>
          </CardHeader>
          <CardContent>View Snowflake Data</CardContent>
        </Card>
        <Card onClick={() => handleCardClick("terraform")}>
          <CardHeader>
            <FiCode size={30} />
            <CardTitle>Terraform</CardTitle>
          </CardHeader>
          <CardContent>View Terraform Data</CardContent>
        </Card>
        <Card onClick={() => handleCardClick("azure")}>
          <CardHeader>
            <FiCloud size={30} />
            <CardTitle>Azure</CardTitle>
          </CardHeader>
          <CardContent>View Azure Data</CardContent>
        </Card>
      </div>
      <div className="table-container">
        {selectedData.length > 0 && <DataTable columns={columns} data={selectedData} />}
      </div>
    </div>
  );
};

export default DataCleanRoom;
