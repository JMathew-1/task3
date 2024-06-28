'use client'; // Indicates that the following code should be executed on the client side

import { useState } from 'react'; // Importing the useState hook from React for state management
import { useRouter } from 'next/navigation'; // Importing the useRouter hook from Next.js for navigation
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'; // Importing Card-related components from a UI library
import { Label } from '@/components/ui/label'; // Importing the Label component from a UI library
import { Input } from '@/components/ui/input'; // Importing the Input component from a UI library
import { Button } from '@/components/ui/button'; // Importing the Button component from a UI library

// Mock authentication function
const authenticateUser = (email, password) => {
  // Replace with actual authentication logic
  return email === 'user@example.com' && password === 'password'; // Example hardcoded authentication check
};

export default function Login() {
  const [email, setEmail] = useState(''); // Declaring a state variable 'email' with an initial value of an empty string and a function 'setEmail' to update it
  const [password, setPassword] = useState(''); // Declaring a state variable 'password' with an initial value of an empty string and a function 'setPassword' to update it
  const router = useRouter(); // Initializing the useRouter hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    if (authenticateUser(email, password)) { // Checking if the email and password are valid
      router.push('/dashboard'); // Redirecting to the dashboard if authentication is successful
    } else {
      alert('Invalid email or password'); // Displaying an alert if authentication fails
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-gray-950">
      {/* Main container with flexbox layout, full height and width, centered items, and background color */}
      <Card className="w-full max-w-md">
        {/* Card component with full width and a maximum width */}
        <CardHeader>
          {/* Card header section */}
          <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
          {/* Card title with text styling */}
          <CardDescription>Enter your email and password to access your account.</CardDescription>
          {/* Card description */}
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Card content section with spacing between elements */}
          <form onSubmit={handleSubmit}>
            {/* Form with an onSubmit handler */}
            <div className="space-y-2">
              {/* Container for email input with spacing */}
              <Label htmlFor="email">Email</Label>
              {/* Label for the email input */}
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                className="border-blue-500 focus:border-blue-500 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* Email input with various props and an onChange handler */}
            </div>
            <div className="space-y-2">
              {/* Container for password input with spacing */}
              <Label htmlFor="password">Password</Label>
              {/* Label for the password input */}
              <Input
                id="password"
                type="password"
                className="border-blue-500 focus:border-blue-500 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* Password input with various props and an onChange handler */}
            </div>
            <CardFooter>
              {/* Card footer section */}
              <Button type="submit" className="w-full mt-8 bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600">
                Sign in
              </Button>
              {/* Submit button with styling */}
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
