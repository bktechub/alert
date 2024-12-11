"use client"

import { useState } from "react"
import { BasicInfo } from "./steps/basic-info"
import { ContactDetails } from "./steps/contact-details"
import { Documents } from "./steps/documents"
import { Review } from "./steps/review"
import { StepIndicator } from "./step-indicator"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useRegistrationStore } from "@/lib/stores/registration-store"

const steps = [
  { id: 1, name: "Basic Information" },
  { id: 2, name: "Contact Details" },
  { id: 3, name: "Documents" },
  { id: 4, name: "Review" },
]

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const { toast } = useToast()
  const formData = useRegistrationStore()

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    // In a real application, this would send the data to an API
    toast({
      title: "Registration Submitted",
      description: "Your registration has been submitted for review.",
    })
  }

  return (
    <div className="space-y-8">
      <StepIndicator steps={steps} currentStep={currentStep} />
      
      <div className="rounded-lg border bg-card p-8">
        {currentStep === 1 && <BasicInfo />}
        {currentStep === 2 && <ContactDetails />}
        {currentStep === 3 && <Documents />}
        {currentStep === 4 && <Review />}

        <div className="mt-8 flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          
          {currentStep === steps.length ? (
            <Button onClick={handleSubmit}>Submit Registration</Button>
          ) : (
            <Button onClick={handleNext}>Next Step</Button>
          )}
        </div>
      </div>
    </div>
  )
}