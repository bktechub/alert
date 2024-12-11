"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data - replace with API call
const reports = [
  {
    id: "1",
    period: "January - June 2024",
    submissionDate: "2024-03-15",
    status: "submitted",
  },
  {
    id: "2",
    period: "July - December 2023",
    submissionDate: "2023-12-20",
    status: "approved",
  },
]

export function ReportList() {
  return (
    <div className="grid gap-4">
      {reports.map((report) => (
        <Card key={report.id}>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span>Biannual Report: {report.period}</span>
              </div>
              <Badge
                variant={report.status === "approved" ? "default" : "secondary"}
              >
                {report.status}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                Submitted on {report.submissionDate}
              </div>
              <Button variant="outline" size="sm">
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}