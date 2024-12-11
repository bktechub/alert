import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const recentRegistrations = [
  {
    name: "Community Health Initiative",
    status: "Pending",
    date: "2024-03-20",
  },
  {
    name: "Youth Empowerment Network",
    status: "Approved",
    date: "2024-03-19",
  },
  {
    name: "Rural Development Trust",
    status: "Pending",
    date: "2024-03-18",
  },
  {
    name: "Education For All",
    status: "Approved",
    date: "2024-03-17",
  },
]

export function RecentRegistrations() {
  return (
    <div className="space-y-8">
      {recentRegistrations.map((registration) => (
        <div key={registration.name} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {registration.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{registration.name}</p>
            <p className="text-sm text-muted-foreground">
              {registration.date}
            </p>
          </div>
          <div className={`ml-auto text-sm ${
            registration.status === "Approved" 
              ? "text-green-500" 
              : "text-yellow-500"
          }`}>
            {registration.status}
          </div>
        </div>
      ))}
    </div>
  )
}