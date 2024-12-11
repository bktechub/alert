import { NGODirectory } from "@/components/directory/ngo-directory"

export default function DirectoryPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">NGO Directory</h1>
        <p className="text-muted-foreground">
          Browse and search through registered NGOs working in community healing and social reintegration.
        </p>
      </div>
      <NGODirectory />
    </div>
  )
}