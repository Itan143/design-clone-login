import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="text-center mb-8">
            <h1 className="text-6xl font-bold text-ariba-green mb-2" style={{ fontFamily: 'serif' }}>
              Ariba
            </h1>
            <p className="text-lg text-foreground font-medium">
              Locate - Report - Connect
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/src/assets/ariba-illustration.png" 
              alt="Ariba illustration" 
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md p-8 shadow-xl rounded-lg border bg-card text-card-foreground">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-6">
              <h1 className="text-4xl font-bold text-ariba-green mb-1" style={{ fontFamily: 'serif' }}>
                Ariba
              </h1>
              <p className="text-sm text-foreground">
                Locate - Report - Connect
              </p>
            </div>

            <div className="text-center mb-6">
              <h2 className="text-xl font-semibold text-ariba-green mb-1">
                Greetings!
              </h2>
              <p className="text-lg text-ariba-green font-medium">
                Welcome Back
              </p>
            </div>

            {/* Social Login Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                className="flex-1 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-accent transition-colors"
                onClick={() => console.log("Google login")}
              >
                <div className="w-5 h-5 mr-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                G
              </button>
              <button
                className="flex-1 h-12 border border-gray-300 rounded-md flex items-center justify-center hover:bg-accent transition-colors"
                onClick={() => console.log("Facebook login")}
              >
                <div className="w-5 h-5 mr-2 bg-blue-600 rounded text-white flex items-center justify-center">
                  <span className="text-xs font-bold">f</span>
                </div>
                f
              </button>
            </div>

            {/* Login Form */}
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="h-12 pl-10 w-full border border-gray-300 rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 pl-10 pr-10 w-full border border-gray-300 rounded-md px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className="text-sm text-ariba-gray hover:text-ariba-green"
                  onClick={() => console.log("Forgot password")}
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-ariba-green hover:bg-ariba-green/90 text-white font-medium rounded-md inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Login clicked");
                }}
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-ariba-gray mb-3">
                ——————— Don't have an account? ———————
              </p>
              <button
                className="w-full h-12 bg-ariba-orange hover:bg-ariba-orange/90 text-white border-ariba-orange font-medium rounded-md inline-flex items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                onClick={() => console.log("Sign up clicked")}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;