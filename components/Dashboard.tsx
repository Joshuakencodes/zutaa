import Sidebar from './Sidebar'
import Header from './Header'
import StatusCards from './StatusCards'
import ActivityChart from './ActivityChart'

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <Header />
        <StatusCards />
        <ActivityChart />
      </div>
    </div>
  )
}

