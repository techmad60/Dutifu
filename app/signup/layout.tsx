// /app/signup/layout.tsx
export default function SignupLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col bg-white">
        {children}
      </div>
    );
  }
  