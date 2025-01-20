import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center">
      <div className="space-y-4 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold drop-shadow-lg text-white">
          🔐 Authentication
        </h1>
        <p>A simple authentication service!</p>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
