import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
