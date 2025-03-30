/* eslint-disable @next/next/no-img-element */
import React from 'react';
import formatter from '../../lib/format';
import roundUp from '../../lib/roundUp';
import { Check, X, User } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type LeadCardProps = {
   quote: Database['public']['Tables']['quotes']['Row']
}

function LeadCard({ quote }: LeadCardProps) {
  // Helper function to convert string to boolean
  const toBool = (value: string | boolean | null): boolean | null => {
    if (value === null) return null;
    if (typeof value === 'boolean') return value;
    return value === 'true' || value === '1' || value === 'yes';
  };

  const StatusIndicator = ({ value, label }: { value: boolean | null, label: string }) => (
    <div className="flex flex-col items-center">
      <span className="text-sm font-medium mb-1">{label}</span>
      <span className={`rounded-full p-1 ${value ? 'bg-green-100' : 'bg-red-100'}`}>
        {value ? 
          <Check className="h-4 w-4 text-green-600" /> : 
          <X className="h-4 w-4 text-red-600" />
        }
      </span>
    </div>
  );

  return (
    <Card className="w-full max-w-7xl mx-auto border bg-white shadow-md">
      <CardHeader className="pb-2 border-b">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/images/avatar.svg" alt="User avatar" />
              <AvatarFallback><User className="h-6 w-6" /></AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl font-medium text-gray-800">
                {quote.firstName} {quote.lastName}
              </CardTitle>
              <p className="text-xs text-gray-600">{quote.email} • {new Date(quote.created_at).toDateString()}</p>
            </div>
          </div>
          <div className="text-right">
            {quote.flowRate <= 30 && quote.geyserPrice && (
              <div className="flex flex-col">
                <Badge variant="outline" className="mb-1 whitespace-nowrap">Flow Rate: {quote.flowRate} L/Min</Badge>
                <Badge variant="outline" className="mb-1 whitespace-nowrap">Geyser Size: {quote.geyserSize} L/Min</Badge>
                <Badge className="bg-sky-700 text-white whitespace-nowrap">
                  Cost: {formatter.format(roundUp(quote.geyserPrice))}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid grid-cols-4 gap-2 mb-4 ">
            <TabsTrigger 
              value="details" 
              className="data-[state=active]:bg-brand bg-gray-200 hover:cursor-pointer hover:bg-slate-100 data-[state=active]:text-white"
            >
              Customer Details
            </TabsTrigger>
            <TabsTrigger 
              value="household" 
              className="data-[state=active]:bg-brand bg-gray-200 hover:cursor-pointer hover:bg-slate-100 data-[state=active]:text-white"
            >
              Household & Usage
            </TabsTrigger>
            <TabsTrigger 
              value="property" 
              className="data-[state=active]:bg-brand bg-gray-200 hover:cursor-pointer hover:bg-slate-100 data-[state=active]:text-white"
            >
              Property Info
            </TabsTrigger>
            <TabsTrigger 
              value="system" 
              className="data-[state=active]:bg-brand bg-gray-200 hover:cursor-pointer hover:bg-slate-100 data-[state=active]:text-white"
            >
              System Preferences
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold mb-2">Contact Information</h3>
                <div className="grid grid-cols-[120px_1fr] gap-y-1 text-sm">
                  <span className="text-gray-500">Phone:</span>
                  <span className="font-medium">{quote.telephoneNumber}</span>
                  <span className="text-gray-500">Email:</span>
                  <span className="font-medium">{quote.email}</span>
                  <span className="text-gray-500">Contact Method:</span>
                  <span className="font-medium">{quote.contactTime || "N/A"}</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-2">Address</h3>
                <div className="grid grid-cols-[120px_1fr] gap-y-1 text-sm">
                  <span className="text-gray-500">Street:</span>
                  <span className="font-medium">{quote.streetAddress}</span>
                  <span className="text-gray-500">Suburb:</span>
                  <span className="font-medium">{quote.suburb}</span>
                  <span className="text-gray-500">City:</span>
                  <span className="font-medium">{quote.city}</span>
                  <span className="text-gray-500">Postal Code:</span>
                  <span className="font-medium">{quote.postalCode}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Additional Notes</h3>
              <div className="p-2 bg-gray-50 rounded-md border text-xs">
                {quote.comments || "No additional comments provided."}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="household" className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold mb-2">Household Composition</h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                    <span className="text-xs text-gray-500">Adults</span>
                    <span className="text-2xl font-bold">{quote.adults}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                    <span className="text-xs text-gray-500">Teenagers</span>
                    <span className="text-2xl font-bold">{quote.teenagers}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                    <span className="text-xs text-gray-500">Children</span>
                    <span className="text-2xl font-bold">{quote.children}</span>
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold mb-2">Fixtures</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Bathtubs:</span>
                    <span className="font-medium">{quote.bathtub}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Rain Showers:</span>
                    <span className="font-medium">{quote.rainShower}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Standard Showers:</span>
                    <span className="font-medium">{quote.standardShower}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Kitchen Sinks:</span>
                    <span className="font-medium">{quote.kitchenSink}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Bathroom Sinks:</span>
                    <span className="font-medium">{quote.bathroomSink}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold mb-2">Intended Gas Use</h3>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <StatusIndicator value={toBool(quote.gasStove)} label="Cooking" />
                  <StatusIndicator value={toBool(quote.gasWaterHeating)} label="Water Heating" />
                  <StatusIndicator value={toBool(quote.gasHeating)} label="Space Heating" />
                </div>
                
                <h3 className="text-sm font-semibold mb-2">Current Geyser Type</h3>
                <div className="grid grid-cols-4 gap-2">
                  <StatusIndicator value={toBool(quote.electricGeyser)} label="Electric" />
                  <StatusIndicator value={toBool(quote.solarGeyser)} label="Solar" />
                  <StatusIndicator value={toBool(quote.gasGeyser)} label="Gas" />
                  <StatusIndicator value={toBool(quote.otherGeyser)} label="Other" />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="property" className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold mb-2">Property Details</h3>
                <div className="grid grid-cols-[150px_1fr] gap-y-2 text-sm">
                  <span className="text-gray-500">Home Ownership:</span>
                  <Badge variant="outline">{quote.ownership ? "Owner" : "Renter"}</Badge>
                  
                  <span className="text-gray-500">Property Type:</span>
                  <Badge variant="outline">{quote.houseType}</Badge>
                  

                  <span className="text-gray-500">Gas Supply:</span>
                  <Badge variant="outline">{quote.gasSupply}</Badge>
                  

                  <span className="text-gray-500">Borehole Water:</span>
                  <Badge variant={toBool(quote.borehole_water) ? "default" : "outline"} className={toBool(quote.borehole_water) ? "bg-green-600" : ""}>
                    {toBool(quote.borehole_water) ? "Yes" : "No"}
                  </Badge>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 mb-1">Flow Rate</div>
                    <div className="text-3xl font-bold text-sky-700">{quote.flowRate} L/Min</div>
                    {quote.flowRate <= 30 && (
                      <div className="mt-2 text-sm text-gray-500">
                        Geyser Size: <span className="font-medium">{quote.geyserSize} L/Min</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="system" className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold mb-2">System Preferences</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Financing Option:</span>
                    <Badge className="ml-2">
                      {quote.financing === "" || quote.financing === "false"
                        ? "No Financing"
                        : quote.financing === "true"
                          ? "Full Financing"
                          : quote.financing}
                    </Badge>
                  </div>
                  
                  <div>
                    <span className="text-sm text-gray-500">Off-Grid Solution:</span>
                    <Badge className="ml-2" variant={toBool(quote.completeSolution) ? "default" : "outline"}>
                      {toBool(quote.completeSolution) ? "Yes" : "No"}
                    </Badge>
                  </div>
                </div>
              </div>
              
              {quote.flowRate <= 30 && quote.geyserPrice && (
                <div className="p-4 border rounded-md bg-gray-50">
                  <h3 className="text-sm font-semibold mb-2">Estimated Cost</h3>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-700">
                      {formatter.format(roundUp(quote.geyserPrice))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default LeadCard;
