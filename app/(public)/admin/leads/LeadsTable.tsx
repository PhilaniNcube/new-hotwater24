"use client"

import * as React from "react";
import {
 type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, CircleDashed, Link2, MoreHorizontal } from "lucide-react";
import { CSVLink } from "react-csv";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { format } from "date-fns";
import { createBrowserClient } from "@supabase/ssr";

type LeadsTableProps = {
  leads: Database["public"]["Tables"]["quotes"]["Row"][];
  isTherePreviousPage: boolean;
  isThereNextPage: boolean;
  page: number;
};

export const columns: ColumnDef<Database["public"]["Tables"]["quotes"]["Row"]>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => {
        const cellDate = new Date(row.getValue("created_at"));


        const day = format(cellDate, "PP")

        return  (<div className="uppercase">{day}</div>)
    }

  },
  {
    accessorKey: "houseType",
    header: "House Type",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("houseType")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          First Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("firstName")}</div>
    ),
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Last Name
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("lastName")}</div>
    ),
  },
  {
    accessorKey: "telephoneNumber",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Phone Number
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("telephoneNumber")}</div>
    ),
  },
  {
    accessorKey: "contactTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Contact Method
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("contactTime")}</div>
    ),
  },
  {
    accessorKey: "source",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Source
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-sm text-lead-600">{row.getValue("source")}</div>
    ),
  },
  {
    accessorKey: "suburb",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Suburb
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("suburb")}</div>
    ),
  },
  {
    accessorKey: "city",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          City
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("city")}</div>,
  },
  {
    accessorKey: "flowRate",
    header: () => <div className="text-right">Flow Rate</div>,
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("flowRate"));

      // Format the amount as a dollar amount
      // const formatted = new Intl.NumberFormat("en-ZA", {
      //   style: "number",
      // }).format(amount);

      return <div className="font-medium text-right">{amount}</div>;
    },
  },
  {
    accessorKey: "actions",
    enableHiding: true,
    header: () => <div className="text-right">Actions</div>,
    cell: ({ row }) => {
      const id = row.original.id;
      return (
        <Link href={`/admin/leads/${id}`}>
          <Button type="button">
            <Link2 className="w-4 h-4" />
          </Button>
        </Link>
      );
    },
  },
];

const LeadsTable = ({
  leads,
  isTherePreviousPage,
  isThereNextPage,
  page,
}: LeadsTableProps) => {

  const [loading, setLoading] = React.useState(false);

  const [downloadData, setDownloadData] = React.useState<null | string>(null);

     const supabase = createBrowserClient<Database>(
       process.env.NEXT_PUBLIC_SUPABASE_URL || '',
       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
     );

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: leads,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  const filteredData = table.getFilteredSelectedRowModel().rows;

  const filteredIDs = filteredData.map((row) => {
    return row.original.id;
  });

  console.log({ filteredIDs })


  return (
    <div className="w-full">
      <div className="flex items-center justify-between py-4 space-x-5">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        {filteredIDs.length > 0 && (
          <>
            <Button
              type="button"
              onClick={async () => {
                setLoading(true);
                const { data, error } = await supabase
                  .from("quotes")
                  .select("*")
                  .in("id", filteredIDs)
                  .csv();
                if (error) {
                  console.log(error);
                  setLoading(false);
                } else {
                  setLoading(false);
                  setDownloadData(data);
                  return data;
                }
              }}
              disabled={filteredIDs.length === 0}
            >
              {loading ? (
                <CircleDashed className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                "Download"
              )}
            </Button>
            {downloadData !== null && (
              <>
              <CSVLink
                className="downloadbtn"
                filename="leads.csv"
                data={downloadData}
              >
                <Button type="button" className="text-white bg-green-600">
                  Export to CSV
                </Button>
              </CSVLink>
              <Button type="button" className="" onClick={() => {
                setDownloadData(null);
              }}>Reset</Button>
              </>
            )}
          </>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end py-4 space-x-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          {isTherePreviousPage && !table.getCanPreviousPage() ? (
            <Link
              href={{
                pathname: "/admin/leads",
                query: { page: page - 1, per_page: 50 },
              }}
            >
              <Button variant="outline" size="sm">
                Load Pervious
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
          )}

          {isThereNextPage && !table.getCanNextPage() ? (
            <Link
              href={{
                pathname: "/admin/leads",
                query: { page: page + 1, per_page: 50 },
              }}
            >
              <Button variant="outline" size="sm">
                Load More
              </Button>
            </Link>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default LeadsTable;
