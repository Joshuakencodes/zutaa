import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ActivityChart() {
  return (
    <Card className="bg-[#09071c] text-white border-0">
      <CardHeader>
        <CardTitle>Activity Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <div className="flex h-full items-end space-x-2">
            {[40, 60, 45, 75, 50, 65, 70].map((height, i) => (
              <div
                key={i}
                className="w-full bg-[#00a859] transition-all"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

