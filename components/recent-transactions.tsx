import { Card, CardContent } from '@/components/ui/card'

const transactions = [
  {
    type: 'Deposit',
    amount: '50,000 NGN',
    date: '2023-07-01',
    status: 'Completed'
  },
  {
    type: 'Withdrawal',
    amount: '25,000 NGN',
    date: '2023-07-02',
    status: 'Pending'
  },
  {
    type: 'Exchange',
    amount: '100 USD to NGN',
    date: '2023-07-03',
    status: 'Completed'
  }
]

export function RecentTransactions() {
  return (
    <Card className="bg-[#1A1E35] border-none rounded-lg">
      <CardContent className="p-4">
        <h2 className="text-lg font-semibold mb-3 text-white">Recent Transactions</h2>
        <div className="space-y-3">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex justify-between items-center text-sm">
              <div>
                <p className="font-medium text-white">{transaction.type}</p>
                <p className="text-gray-400">{transaction.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-white">{transaction.amount}</p>
                <p className={`${
                  transaction.status === 'Completed' ? 'text-green-500' : 'text-yellow-500'
                }`}>
                  {transaction.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

