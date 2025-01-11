import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { setUser, getUser } from '@/lib/kv'

interface LoginSignupPopupProps {
  onClose: () => void
  onLogin: (email: string) => void
}

export function LoginSignupPopup({ onClose, onLogin }: LoginSignupPopupProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (isLogin) {
      // Login
      const user = await getUser(email)
      if (user && user.password === password) {
        onLogin(email)
        onClose()
      } else {
        setError('Invalid email or password')
      }
    } else {
      // Sign up
      const existingUser = await getUser(email)
      if (existingUser) {
        setError('User already exists')
      } else {
        await setUser(email, { email, password })
        onLogin(email)
        onClose()
      }
    }
  }

  return (
    <Card className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <CardContent className="bg-white p-6 rounded-lg max-w-md w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-2">{isLogin ? 'Log In' : 'Sign Up'}</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            type="email" 
            placeholder="Email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            type="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && <Input type="password" placeholder="Confirm Password" required />}
          {error && <p className="text-red-500">{error}</p>}
          <Button type="submit" className="w-full">{isLogin ? 'Log In' : 'Sign Up'}</Button>
        </form>
        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <Button variant="link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Sign Up' : 'Log In'}
          </Button>
        </p>
        <Button variant="outline" onClick={onClose} className="mt-4 w-full">
          Close
        </Button>
      </CardContent>
    </Card>
  )
}

