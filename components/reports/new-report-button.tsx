import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"

interface NewReportButtonProps {
  onClick: () => void
}

export function NewReportButton({ onClick }: NewReportButtonProps) {
  return (
    <Card className="border-dashed">
      <CardContent className="pt-6">
        <Button
          onClick={onClick}
          variant="outline"
          className="w-full border-dashed"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create New Report
        </Button>
      </CardContent>
    </Card>
  )
}