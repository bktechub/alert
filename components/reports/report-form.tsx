"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const formSchema = z.object({
  period: z.string().min(1, "Reporting period is required"),
  achievements: z.string().min(10, "Please provide detailed achievements"),
  challenges: z.string().min(10, "Please describe the challenges faced"),
  beneficiariesMale: z.string().min(1, "Required"),
  beneficiariesFemale: z.string().min(1, "Required"),
  beneficiariesYouth: z.string().min(1, "Required"),
  budget: z.string().min(1, "Budget information is required"),
  nextSteps: z.string().min(10, "Please outline the next steps"),
})

interface ReportFormProps {
  onCancel: () => void
}

export function ReportForm({ onCancel }: ReportFormProps) {
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      period: "",
      achievements: "",
      challenges: "",
      beneficiariesMale: "",
      beneficiariesFemale: "",
      beneficiariesYouth: "",
      budget: "",
      nextSteps: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, this would send the data to an API
    toast({
      title: "Report Submitted",
      description: "Your biannual report has been submitted successfully.",
    })
    onCancel()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>New Biannual Report</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="period"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reporting Period *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="jan-jun-2024">January - June 2024</SelectItem>
                      <SelectItem value="jul-dec-2024">July - December 2024</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Tabs defaultValue="achievements" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="beneficiaries">Beneficiaries</TabsTrigger>
                <TabsTrigger value="planning">Planning</TabsTrigger>
              </TabsList>

              <TabsContent value="achievements" className="space-y-6">
                <FormField
                  control={form.control}
                  name="achievements"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Key Achievements *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Describe the major achievements during this period"
                          className="min-h-[150px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="challenges"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Challenges Faced *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Describe any challenges or obstacles encountered"
                          className="min-h-[150px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="beneficiaries" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <FormField
                    control={form.control}
                    name="beneficiariesMale"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Male Beneficiaries *</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="beneficiariesFemale"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Female Beneficiaries *</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="beneficiariesYouth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Youth Beneficiaries *</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Utilization (USD) *</FormLabel>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>

              <TabsContent value="planning" className="space-y-6">
                <FormField
                  control={form.control}
                  name="nextSteps"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Next Steps and Planning *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Outline the planned activities and next steps"
                          className="min-h-[150px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TabsContent>
            </Tabs>

            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="submit">Submit Report</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}