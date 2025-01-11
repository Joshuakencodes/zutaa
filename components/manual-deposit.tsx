import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface ManualDepositProps {
  isOpen: boolean
  onClose: () => void
}

export function ManualDeposit({ isOpen, onClose }: ManualDepositProps) {
  const [amount, setAmount] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [showAccountDetails, setShowAccountDetails] = useState(false)

  const handleDeposit = async () => {
    setIsProcessing(true)
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setShowAccountDetails(true)
    setIsProcessing(false)
  }

  const accountNumber = "1234567890" // Replace with actual Zutaa account number

  if (!isOpen) return null

  return (
    <Card isOpen={isOpen}>
      <CardContent isOpen={isOpen}>
        <h2 className="text-lg font-semibold mb-4">Manual Deposit</h2>
        <Alert className="mb-4">
          <AlertDescription>
            Deposit account name must match your Zutaa account name.
          </AlertDescription>
        </Alert>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full"
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full"
          />
          <Input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full"
          />
          <Button 
            onClick={handleDeposit} 
            disabled={!amount || !firstName || !lastName || isProcessing}
            className="w-full"
          >
            {isProcessing ? 'Processing...' : 'Proceed'}
          </Button>
        </div>
        {showAccountDetails && (
          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <h3 className="font-semibold mb-2">Deposit Instructions</h3>
            <p>Please deposit {amount} to the following account:</p>
            <p className="font-bold mt-2">Account Number: {accountNumber}</p>
            <p className="text-sm mt-2">
              Remember: The deposit must be made from an account matching the name {firstName} {lastName}.
            </p>
          </div>
        )}
        <Button onClick={onClose} className="mt-4">Close</Button>
      </CardContent>
    </Card>
  )
}

