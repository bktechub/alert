"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Calendar, Download } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data - replace with actual API call
const ngos = [
  {
    id: "1",
    name: "Community Health Initiative",
    location: "Kigali",
    yearEstablished: "2018",
    mission: "Improving community health through education and preventive care",
    status: "approved",
  },
  {
    id: "2",
    name: "Youth Empowerment Network",
    location: "Butare",
    yearEstablished: "2019",
    mission: "Empowering youth through skills development and mentorship",
    status: "approved",
  },
  // Add more mock data as needed
]

export function NGODirectory() {
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")

  const filteredNGOs = ngos.filter(ngo => 
    ngo.name.toLowerCase().includes(search.toLowerCase()) &&
    (location === "" || ngo.location === location)
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search NGOs..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter by location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All locations</SelectItem>
            <SelectItem value="Kigali">Kigali</SelectItem>
            <SelectItem value="Butare">Butare</SelectItem>
            <SelectItem value="Gisenyi">Gisenyi</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="w-full md:w-auto">
          <Download className="mr-2 h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredNGOs.map((ngo) => (
          <Card key={ngo.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{ngo.name}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  ID: {ngo.id}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                {ngo.location}
                <span className="mx-2">•</span>
                <Calendar className="mr-2 h-4 w-4" />
                Est. {ngo.yearEstablished}
              </div>
              <p className="text-sm">{ngo.mission}</p>
              <Button variant="outline" className="w-full">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}