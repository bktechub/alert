import { Check, Circle } from "lucide-react"

interface Step {
  id: number
  name: string
}

interface StepIndicatorProps {
  steps: Step[]
  currentStep: number
}

export function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, index) => (
          <li
            key={step.name}
            className={`relative ${
              index !== steps.length - 1 ? "flex-1" : ""
            }`}
          >
            <div className="group flex items-center">
              <span className="flex items-center">
                {step.id < currentStep ? (
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary-foreground" />
                  </div>
                ) : step.id === currentStep ? (
                  <div className="h-8 w-8 rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="text-primary font-medium">{step.id}</span>
                  </div>
                ) : (
                  <div className="h-8 w-8 rounded-full border-2 border-muted flex items-center justify-center">
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  </div>
                )}
              </span>
              <span className="ml-4 text-sm font-medium">
                {step.name}
              </span>
            </div>
            {index !== steps.length - 1 && (
              <div className="absolute top-4 left-0 -ml-px mt-0.5 h-0.5 w-full bg-muted" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}