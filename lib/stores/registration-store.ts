import { create } from 'zustand'

interface BasicInfo {
  name: string
  registrationNumber: string
  mission: string
  yearEstablished: string
}

interface ContactInfo {
  email: string
  phone: string
  address: string
  website: string
}

interface Documents {
  registrationCertificate: File | null
  taxClearance: File | null
  annualReport: File | null
}

interface RegistrationStore {
  basicInfo: BasicInfo
  contactInfo: ContactInfo
  documents: Documents
  setBasicInfo: (info: BasicInfo) => void
  setContactInfo: (info: ContactInfo) => void
  setDocuments: (docs: Documents) => void
}

export const useRegistrationStore = create<RegistrationStore>((set) => ({
  basicInfo: {
    name: "",
    registrationNumber: "",
    mission: "",
    yearEstablished: "",
  },
  contactInfo: {
    email: "",
    phone: "",
    address: "",
    website: "",
  },
  documents: {
    registrationCertificate: null,
    taxClearance: null,
    annualReport: null,
  },
  setBasicInfo: (info) => set({ basicInfo: info }),
  setContactInfo: (info) => set({ contactInfo: info }),
  setDocuments: (docs) => set({ documents: docs }),
}))