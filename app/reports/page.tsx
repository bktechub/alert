import { ReportingDashboard } from "@/components/reports/reporting-dashboard"

export default function ReportsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Biannual Reports</h1>
        <p className="text-muted-foreground">
          Submit and manage your organization&apos;s biannual progress reports.
        </p>
      </div>
      <ReportingDashboard />
    </div>
  )
}