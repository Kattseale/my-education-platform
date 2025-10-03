"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type TableName = "teacher_applications" | "contact_submissions" | "admission_applications"

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [selectedTable, setSelectedTable] = useState<TableName>("teacher_applications")
  const [rows, setRows] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const SECRET_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD as string

  const handleLogin = () => {
    if (password === SECRET_PASSWORD) {
      setIsAuthorized(true)
      fetchRows(selectedTable)
    } else {
      alert("Incorrect password!")
    }
  }

  const fetchRows = async (table: TableName) => {
    setLoading(true)
    const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false })
    if (error) console.error("Error fetching table data:", error)
    else setRows(data || [])
    setLoading(false)
  }

  useEffect(() => {
    if (isAuthorized) fetchRows(selectedTable)
  }, [selectedTable])

  if (!isAuthorized) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-background px-4">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <div className="flex flex-col gap-4">
          <Input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="max-w-sm"
          />
          <Button onClick={handleLogin} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Login
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Table Selection Tabs */}
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {(["teacher_applications", "contact_submissions", "admission_applications"] as TableName[]).map((table) => (
          <Button
            key={table}
            variant={selectedTable === table ? "default" : "outline"}
            onClick={() => setSelectedTable(table)}
          >
            {table.replace(/_/g, " ").toUpperCase()}
          </Button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-muted-foreground">Loading data...</p>
      ) : rows.length === 0 ? (
        <p className="text-center text-muted-foreground">No data in this table yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <Table className="min-w-full border">
            <TableHeader>
              <TableRow>
                {Object.keys(rows[0]).map((key) => (
                  <TableHead key={key}>{key.replace(/_/g, " ").toUpperCase()}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow key={idx}>
                  {Object.values(row).map((val, i) => (
                    <TableCell key={i}>
                      {typeof val === "string" && val.startsWith("http") ? (
                        <a href={val} target="_blank" className="text-primary underline">
                          View
                        </a>
                      ) : typeof val === "boolean" ? (
                        val ? "Yes" : "No"
                      ) : val instanceof Date ? (
                        val.toLocaleString()
                      ) : (
                        val?.toString()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
