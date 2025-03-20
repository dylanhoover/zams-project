"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Search,
    Plus,
    PlusCircle,
    MoreVertical,
    PanelLeft
} from "lucide-react";
import { useState } from "react";

export default function DatasourcesPage({ sidebarCollapsed, setSidebarCollapsed }) {
    const datasources = [
        { id: 1, name: "website - data", type: "PDF", status: "Uploaded", created: "Jan 6 2024", createdBy: "Olivia Ryhe" },
        { id: 2, name: "website - data", type: "PDF", status: "Uploaded", created: "Jan 28 2024", createdBy: "Natalie Craig" },
        { id: 3, name: "Products", type: "CSV", status: "Uploaded", created: "Feb 4 2024", createdBy: "Phoenix Baker" },
        { id: 4, name: "user - data", type: "CSV", status: "Connected", created: "Feb 8 2024", createdBy: "Natalie Craig" },
        { id: 5, name: "website - data", type: "DOCX", status: "Uploaded", created: "March 7 2024", createdBy: "Olivia Ryhe" },
        { id: 6, name: "website - data", type: "CSV", status: "Uploaded", created: "March 7 2024", createdBy: "Phoenix Baker" },
        { id: 7, name: "Server Files", type: "DOCX", status: "Uploaded", created: "March 21 2024", createdBy: "Natalie Craig" },
        { id: 8, name: "website - data", type: "CSV", status: "Uploaded", created: "March 28 2024", createdBy: "Olivia Ryhe" },
        { id: 9, name: "user - data", type: "PDF", status: "Connected", created: "June 9 2024", createdBy: "Natalie Craig" },
        { id: 10, name: "user - data", type: "DOCX", status: "Connected", created: "June 29 2024", createdBy: "Olivia Ryhe" },
        { id: 11, name: "user - data", type: "DOCX", status: "Connected", created: "July 2 2024", createdBy: "Phoenix Baker" },
        { id: 12, name: "user - data", type: "DOCX", status: "Uploaded", created: "Aug 1 2024", createdBy: "Natalie Craig" },
        { id: 13, name: "website - data", type: "PDF", status: "Uploaded", created: "Sept 21 2024", createdBy: "Olivia Ryhe" },
        { id: 14, name: "Server Files", type: "CSV", status: "Connected", created: "Sept 21 2024", createdBy: "Natalie Craig" },
        { id: 15, name: "website - data", type: "PDF", status: "Uploaded", created: "Sept 21 2024", createdBy: "Olivia Ryhe" },
        { id: 16, name: "Server Files", type: "CSV", status: "Connected", created: "Sept 21 2024", createdBy: "Natalie Craig" },
    ];

    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

    const filteredDatasources = datasources.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) &&
        (typeFilter === "" || item.type === typeFilter) &&
        (statusFilter === "" || item.status === statusFilter)
    );

    const uniqueTypes = [...new Set(datasources.map(item => item.type))];
    const uniqueStatuses = [...new Set(datasources.map(item => item.status))];

    return (
        <div className="flex-1 overflow-auto">
            <div className="p-6">
                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                        className="mr-2"
                    >
                        <PanelLeft className="h-5 w-5" />
                    </Button>
                    <h6 className="text-sm">Datasources</h6>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div>
                                <h1 className="text-2xl font-bold">Datasources</h1>
                                <p className="text-sm text-muted-foreground">Upload files, connect to databases, or integrate with apps.</p>
                            </div>
                        </div>

                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative flex-1 max-w-[384px] h-[36px]">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search"
                                className="pl-8"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="gap-2 h-[36px] w-min-[104px]">
                                    <PlusCircle className="h-4 w-4" />
                                    Type {typeFilter && `(${typeFilter})`}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => setTypeFilter("")}>
                                    All Types
                                </DropdownMenuItem>
                                {uniqueTypes.map((type) => (
                                    <DropdownMenuItem key={type} onClick={() => setTypeFilter(type)}>
                                        {type}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="gap-2 h-[36px] w-min-[104px]">
                                    <PlusCircle className="h-4 w-4" />
                                    Status {statusFilter && `(${statusFilter})`}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem onClick={() => setStatusFilter("")}>
                                    All Statuses
                                </DropdownMenuItem>
                                {uniqueStatuses.map((status) => (
                                    <DropdownMenuItem key={status} onClick={() => setStatusFilter(status)}>
                                        {status}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className="flex items-center gap-2 ml-auto">
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                                <Plus className="mr-2 h-4 w-4" />
                                Add Data
                            </Button>
                            <DropdownMenu>
                                <Button variant="ghost" size="icon">
                                    <MoreVertical className="h-4 w-4" />
                                </Button>
                            </DropdownMenu>
                        </div>
                    </div>

                    <div className="border rounded-md">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[40px]">
                                        <Checkbox />
                                    </TableHead>
                                    <TableHead>Datasource</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Created at</TableHead>
                                    <TableHead>Created by</TableHead>
                                    <TableHead className="w-[40px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredDatasources.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell className="font-medium">{item.name}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={
                                                item.type === "PDF" ? "bg-red-50 text-red-700 border-red-200" :
                                                    item.type === "CSV" ? "bg-green-50 text-green-700 border-green-200" :
                                                        "bg-blue-50 text-blue-700 border-blue-200"
                                            }>
                                                {item.type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className={
                                                item.status === "Uploaded" ? "bg-green-50 text-green-700 border-green-200" :
                                                    "bg-blue-50 text-blue-700 border-blue-200"
                                            }>
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{item.created}</TableCell>
                                        <TableCell>{item.createdBy}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
}