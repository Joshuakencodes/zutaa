import { Wifi, Battery, Signal } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function StatusCards() {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      <Card className="bg-[#09071c] text-white border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Network Status</CardTitle>
          <Wifi className="h-4 w-4 text-[#00a859]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#00a859]">Connected</div>
        </CardContent>
      </Card>
      <Card className="bg-[#09071c] text-white border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Battery Level</CardTitle>
          <Battery className="h-4 w-4 text-[#00a859]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#00a859]">85%</div>
        </CardContent>
      </Card>
      <Card className="bg-[#09071c] text-white border-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Signal Strength</CardTitle>
          <Signal className="h-4 w-4 text-[#00a859]" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-[#00a859]">Excellent</div>
        </CardContent>
      </Card>
    </div>
  )
}

