import { RegistrationForm } from "@/components/registration/registration-form"

export default function RegistrationPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">NGO Registration</h1>
        <p className="text-muted-foreground">
          Complete the registration form to join our platform. All fields marked with * are required.
        </p>
      </div>
      <RegistrationForm />
    </div>
  )
}