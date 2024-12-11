"use client"

import { useRegistrationStore } from "@/lib/stores/registration-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function Review() {
  const { basicInfo, contactInfo, documents } = useRegistrationStore()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <span className="font-medium">Organization Name:</span>
            <p className="text-muted-foreground">{basicInfo.name}</p>
          </div>
          <div>
            <span className="font-medium">Registration Number:</span>
            <p className="text-muted-foreground">{basicInfo.registrationNumber}</p>
          </div>
          <div>
            <span className="font-medium">Year Established:</span>
            <p className="text-muted-foreground">{basicInfo.yearEstablished}</p>
          </div>
          <div>
            <span className="font-medium">Mission Statement:</span>
            <p className="text-muted-foreground">{basicInfo.mission}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <span className="font-medium">Email:</span>
            <p className="text-muted-foreground">{contactInfo.email}</p>
          </div>
          <div>
            <span className="font-medium">Phone:</span>
            <p className="text-muted-foreground">{contactInfo.phone}</p>
          </div>
          <div>
            <span className="font-medium">Address:</span>
            <p className="text-muted-foreground">{contactInfo.address}</p>
          </div>
          {contactInfo.website && (
            <div>
              <span className="font-medium">Website:</span>
              <p className="text-muted-foreground">{contactInfo.website}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Documents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <span className="font-medium">Registration Certificate:</span>
            <p className="text-muted-foreground">
              {documents.registrationCertificate?.name || "Not uploaded"}
            </p>
          </div>
          <div>
            <span className="font-medium">Tax Clearance:</span>
            <p className="text-muted-foreground">
              {documents.taxClearance?.name || "Not uploaded"}
            </p>
          </div>
          <div>
            <span className="font-medium">Annual Report:</span>
            <p className="text-muted-foreground">
              {documents.annualReport?.name || "Not uploaded"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}