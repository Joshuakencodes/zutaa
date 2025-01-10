import { Card } from '@/components/ui/card'

const transactions = [
  {
    id: 1,
    transactionId: 'T4EPYQHGQZVN',
    amount: '-325,000.00 NGN',
    remarks: 'DEDUCTED BALANCE',
    time: '11 Jul 2024 12:18 AM',
    type: 'debit'
  },
  {
    id: 2,
    transactionId: '3XR49AKWJSEE',
    amount: '+329,200.00 NGN',
    remarks: '329000 NGN Withdraw Amount Has Been Refunded',
    time: '11 Jul 2024 12:17 AM',
    type: 'credit'
  },
  {
    id: 3,
    transactionId: '3XR49AKWJSEE',
    amount: '-329,000.00 NGN',
    remarks: 'Withdraw Via Bank Transfer',
    time: '03 Jul 2024 10:12 PM',
    type: 'debit'
  },
  {
    id: 4,
    transactionId: 'ZWMOQH5Y7HHG',
    amount: '+2,875.02 NGN',
    remarks: 'Level 1 Referral Bonus From Olamid5574',
    time: '22 Mar 2024 05:58 PM',
    type: 'credit'
  },
  {
    id: 5,
    transactionId: 'DRNBNPSZFZ4A',
    amount: '-10,000.00 NGN',
    remarks: 'Withdraw Via Bank Transfer',
    time: '19 Mar 2024 03:35 PM',
    type: 'debit'
  }
]

export function RecentActivity() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Recent Activity</h2>
      <div className="bg-[#12122a] rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-5 bg-[#00A859] p-4 text-sm font-medium">
          <div>SL No.</div>
          <div className="hidden md:block">Transaction ID</div>
          <div>Amount</div>
          <div className="hidden md:block">Remarks</div>
          <div>Time</div>
        </div>
        <div className="divide-y divide-gray-800">
          {transactions.map((transaction) => (
            <div
              key={`${transaction.id}-${transaction.transactionId}`}
              className="grid grid-cols-2 md:grid-cols-5 p-4 hover:bg-gray-800/50 transition-colors duration-200"
            >
              <div>{transaction.id}</div>
              <div className="hidden md:block font-mono">{transaction.transactionId}</div>
              <div className={`${transaction.type === 'credit' ? 'text-[#00A859]' : 'text-red-500'} font-medium`}>
                {transaction.amount}
              </div>
              <div className="hidden md:block truncate" title={transaction.remarks}>
                {transaction.remarks}
              </div>
              <div className="text-sm text-gray-400">{transaction.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

