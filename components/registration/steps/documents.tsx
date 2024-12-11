"use client"

import { useState } from "react"
import { FileUploader } from "../file-uploader"
import { useRegistrationStore } from "@/lib/stores/registration-store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Documents() {
  const { documents, setDocuments } = useRegistrationStore()
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (type: keyof typeof documents) => async (file: File | null) => {
    setDocuments({
      ...documents,
      [type]: file,
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Registration Certificate *</CardTitle>
          <CardDescription>
            Upload your official NGO registration certificate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileUploader
            accept=".pdf,.jpg,.jpeg,.png"
            maxSize={5 * 1024 * 1024} // 5MB
            onFileSelect={handleFileChange("registrationCertificate")}
            currentFile={documents.registrationCertificate}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tax Clearance Certificate *</CardTitle>
          <CardDescription>
            Upload your latest tax clearance certificate
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileUploader
            accept=".pdf,.jpg,.jpeg,.png"
            maxSize={5 * 1024 * 1024}
            onFileSelect={handleFileChange("taxClearance")}
            currentFile={documents.taxClearance}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Annual Report</CardTitle>
          <CardDescription>
            Upload your most recent annual report (if available)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FileUploader
            accept=".pdf"
            maxSize={10 * 1024 * 1024} // 10MB
            onFileSelect={handleFileChange("annualReport")}
            currentFile={documents.annualReport}
          />
        </CardContent>
      </Card>
    </div>
  )
}