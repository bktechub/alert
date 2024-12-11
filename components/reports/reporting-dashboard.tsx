"use client"

import { useState } from "react"
import { ReportList } from "./report-list"
import { NewReportButton } from "./new-report-button"
import { ReportForm } from "./report-form"

export function ReportingDashboard() {
  const [isCreating, setIsCreating] = useState(false)

  return (
    <div className="space-y-6">
      {isCreating ? (
        <ReportForm onCancel={() => setIsCreating(false)} />
      ) : (
        <>
          <NewReportButton onClick={() => setIsCreating(true)} />
          <ReportList />
        </>
      )}
    </div>
  )
}