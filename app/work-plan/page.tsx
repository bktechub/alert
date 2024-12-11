import { WorkPlanForm } from "@/components/work-plan/work-plan-form"

export default function WorkPlanPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Annual Work Plan</h1>
        <p className="text-muted-foreground">
          Submit your organization&apos;s annual work plan detailing planned activities, budgets, and timelines.
        </p>
      </div>
      <WorkPlanForm />
    </div>
  )
}