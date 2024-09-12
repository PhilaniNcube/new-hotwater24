import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

type LeadDetails = Database["public"]["Tables"]["quotes"]["Row"];



export default function LeadDetailsPage({ leadDetails }: { leadDetails: LeadDetails }) {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Lead Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-semibold">Name:</dt>
                <dd>
                  {leadDetails.firstName} {leadDetails.lastName}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Email:</dt>
                <dd>{leadDetails.email}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Phone:</dt>
                <dd>{leadDetails.telephoneNumber}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Address:</dt>
                <dd>
                  {leadDetails.streetAddress}, {leadDetails.suburb},{" "}
                  {leadDetails.city}, {leadDetails.postalCode}
                </dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Household Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-semibold">Adults:</dt>
                <dd>{leadDetails.adults}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Children:</dt>
                <dd>{leadDetails.children}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Teenagers:</dt>
                <dd>{leadDetails.teenagers}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">House Type:</dt>
                <dd>{leadDetails.houseType}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Ownership:</dt>
                <dd>{leadDetails.ownership ? "Owner" : "Renter"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Geyser Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-semibold">Geyser Type:</dt>
                <dd>
                  {leadDetails.electricGeyser && <Badge>Electric</Badge>}
                  {leadDetails.gasGeyser && <Badge>Gas</Badge>}
                  {leadDetails.solarGeyser && <Badge>Solar</Badge>}
                  {leadDetails.otherGeyser && (
                    <Badge>{leadDetails.otherGeyser}</Badge>
                  )}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Geyser Size:</dt>
                <dd>{leadDetails.geyserSize} L</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Flow Rate:</dt>
                <dd>{leadDetails.flowRate} L/min</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Located Outside:</dt>
                <dd>{leadDetails.locateOutside ? "Yes" : "No"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Water Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-semibold">Bathroom Sinks:</dt>
                <dd>{leadDetails.bathroomSink}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Kitchen Sinks:</dt>
                <dd>{leadDetails.kitchenSink}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Bathtubs:</dt>
                <dd>{leadDetails.bathtub}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Standard Showers:</dt>
                <dd>{leadDetails.standardShower}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Rain Showers:</dt>
                <dd>{leadDetails.rainShower}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Dishwashers:</dt>
                <dd>{leadDetails.dishwasher}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Washing Machines:</dt>
                <dd>{leadDetails.washingmachine}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gas Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-semibold">Gas Supply:</dt>
                <dd>{leadDetails.gasSupply}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Gas Stove:</dt>
                <dd>{leadDetails.gasStove ? "Yes" : "No"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Gas Heating:</dt>
                <dd>{leadDetails.gasHeating ? "Yes" : "No"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Gas Water Heating:</dt>
                <dd>{leadDetails.gasWaterHeating ? "Yes" : "No"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Other Gas Use:</dt>
                <dd>{leadDetails.otherGasUse || "N/A"}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-semibold">Geyser Price:</dt>
                <dd>R {leadDetails.geyserPrice?.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Installation Cost:</dt>
                <dd>R {leadDetails.installationCost?.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Plumbing Cost:</dt>
                <dd>R {leadDetails.plumbingCost?.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Monthly Savings:</dt>
                <dd>R {leadDetails.monthlySavings.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Yearly Savings:</dt>
                <dd>R {leadDetails.yearlySavings.toLocaleString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Financing:</dt>
                <dd>{leadDetails.financing}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="font-semibold">Complete Solution:</dt>
                <dd>{leadDetails.completeSolution ? "Yes" : "No"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Off Grid:</dt>
                <dd>{leadDetails.offGrid ? "Yes" : "No"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Installation Type:</dt>
                <dd>{leadDetails.installation}</dd>
              </div>

              <div className="flex justify-between">
                <dt className="font-semibold">Preferred Contact Method:</dt>
                <dd>{leadDetails.contactTime}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Lead Source:</dt>
                <dd>{leadDetails.source || "Unknown"}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="font-semibold">Created At:</dt>
                <dd>{format(new Date(leadDetails.created_at), "PPP")}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{leadDetails.comments || "No comments provided."}</p>
        </CardContent>
      </Card>
    </div>
  );
}
