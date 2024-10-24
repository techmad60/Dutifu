// /app/login/layout.tsx
export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="Login-container min-h-screen flex flex-col  bg-white">
        {children}
      </div>
    );
  }
  