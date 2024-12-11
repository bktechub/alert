import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/dashboard/overview"
import { RecentRegistrations } from "@/components/dashboard/recent-registrations"
import { StatsCards } from "@/components/dashboard/stats-cards"

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to the NGO Management Platform. Monitor and manage NGO activities across the platform.
        </p>
      </div>
      
      <StatsCards />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              NGO registration and reporting trends over time
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        
        <Card className="col-span-4 md:col-span-3">
          <CardHeader>
            <CardTitle>Recent Registrations</CardTitle>
            <CardDescription>
              Latest NGO registration requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentRegistrations />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}