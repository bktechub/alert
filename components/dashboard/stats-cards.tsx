import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, FileText, Users2, Activity } from "lucide-react"

const stats = [
  {
    title: "Total NGOs",
    value: "2,853",
    icon: Building2,
    description: "Registered organizations",
  },
  {
    title: "Active Projects",
    value: "1,245",
    icon: Activity,
    description: "Ongoing initiatives",
  },
  {
    title: "Beneficiaries",
    value: "45.2K",
    icon: Users2,
    description: "People impacted",
  },
  {
    title: "Reports Submitted",
    value: "852",
    icon: FileText,
    description: "This year",
  },
]

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}