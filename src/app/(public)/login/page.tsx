'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../../../contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login } = useAuth();
  
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Email validation
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form handlers
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(''); // Clear error when user types
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError(''); // Clear error when user types
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!password.trim()) {
      setError('Password is required');
      return;
    }

    setIsLoading(true);

    try {
      const success = await login(email, password);

      if (success) {
        // Get redirect URL from search params or default to feed
        const redirectTo = searchParams.get('redirect') || '/feed';
        router.push(redirectTo);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Login failed. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Top-Right Geometric Shape */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[420px] md:h-[420px] -mr-24 -mt-24">
        <Image
          src="https://res.cloudinary.com/dxri4npkx/image/upload/v1757005637/geometric_iufkpm.png"
          alt=""
          fill
          className="object-contain opacity-30"
          priority
        />
      </div>

      {/* Bottom-Left Geometric Shape - Complete SVG Pattern */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[330px] md:w-[450px] md:h-[497px] -ml-24 -mb-24 md:-ml-32 md:-mb-32 rotate-180 opacity-90">
        <svg width="451" height="497" viewBox="0 0 451 497" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <g clipPath="url(#clip0_831_1957)">
            <path d="M323.365 287.384V211.953C323.363 206.075 321.815 200.3 318.877 195.209C315.938 190.119 311.711 185.89 306.622 182.949L241.294 145.234C236.204 142.293 230.429 140.745 224.551 140.745C218.672 140.745 212.898 142.293 207.808 145.234L142.48 182.949C137.39 185.89 133.164 190.119 130.225 195.209C127.286 200.3 125.738 206.075 125.737 211.953V287.384C125.738 293.262 127.286 299.036 130.225 304.127C133.164 309.218 137.39 313.447 142.48 316.388L207.808 354.103C212.898 357.044 218.672 358.592 224.551 358.592C230.429 358.592 236.204 357.044 241.294 354.103L306.622 316.388C311.711 313.447 315.938 309.218 318.877 304.127C321.815 299.036 323.363 293.262 323.365 287.384Z" stroke="#919191" strokeWidth="3" strokeMiterlimit="10"/>
          </g>
          <g clipPath="url(#clip1_831_1957)">
            <path d="M361.46 301.077V196.948C361.457 188.833 359.32 180.862 355.263 173.834C351.207 166.806 345.372 160.969 338.346 156.909L248.164 104.844C241.137 100.785 233.166 98.6479 225.051 98.6479C216.936 98.6479 208.964 100.785 201.938 104.844L111.755 156.909C104.729 160.969 98.8951 166.806 94.8382 173.834C90.7813 180.862 88.6444 188.833 88.6421 196.948V301.077C88.6444 309.191 90.7813 317.163 94.8382 324.19C98.8951 331.218 104.729 337.055 111.755 341.115L201.938 393.18C208.964 397.239 216.936 399.376 225.051 399.376C233.166 399.376 241.137 397.239 248.164 393.18L338.346 341.115C345.372 337.055 351.207 331.218 355.263 324.19C359.32 317.163 361.457 309.191 361.46 301.077Z" stroke="#919191" strokeOpacity="0.53" strokeWidth="2" strokeMiterlimit="10"/>
          </g>
          <g clipPath="url(#clip2_831_1957)">
            <path d="M399.202 316.083V182.761C399.199 172.372 396.463 162.166 391.268 153.168C386.074 144.17 378.604 136.696 369.609 131.498L254.144 64.8371C245.147 59.6398 234.941 56.9034 224.551 56.9034C214.161 56.9034 203.954 59.6398 194.958 64.8371L79.493 131.498C70.4974 136.696 63.0276 144.17 57.8333 153.168C52.6391 162.166 49.9031 172.372 49.9001 182.761V316.083C49.9031 326.472 52.6391 336.678 57.8333 345.676C63.0276 354.674 70.4974 362.148 79.493 367.346L194.958 434.007C203.954 439.204 214.161 441.941 224.551 441.941C234.941 441.941 245.147 439.204 254.144 434.007L369.609 367.346C378.604 362.148 386.074 354.674 391.268 345.676C396.463 336.678 399.199 326.472 399.202 316.083Z" stroke="#919191" strokeOpacity="0.51" strokeWidth="0.5" strokeMiterlimit="10"/>
            <path d="M315 284.559V215.856C314.998 210.502 313.589 205.243 310.912 200.606C308.235 195.97 304.386 192.118 299.75 189.44L240.25 155.088C235.614 152.41 230.354 151 225 151C219.646 151 214.386 152.41 209.75 155.088L150.25 189.44C145.614 192.118 141.765 195.97 139.088 200.606C136.411 205.243 135.002 210.502 135 215.856V284.559C135.002 289.913 136.411 295.172 139.088 299.809C141.765 304.446 145.614 308.297 150.25 310.976L209.75 345.327C214.386 348.005 219.646 349.415 225 349.415C230.354 349.415 235.614 348.005 240.25 345.327L299.75 310.976C304.386 308.297 308.235 304.446 310.912 299.809C313.589 295.172 314.998 289.913 315 284.559Z" fill="#B5FD1E" stroke="#F5F5F5" strokeWidth="0.5" strokeMiterlimit="10"/>
          </g>
          <path d="M450.102 334.23V162.817C450.098 149.459 446.58 136.337 439.902 124.768C433.224 113.199 423.62 103.591 412.054 96.9071L263.599 11.2005C252.032 4.51814 238.909 1 225.551 1C212.193 1 199.07 4.51814 187.503 11.2005L39.0479 96.9071C27.4822 103.591 17.8781 113.199 11.1998 124.768C4.52146 136.337 1.00383 149.459 1 162.817V334.23C1.00383 347.589 4.52146 360.711 11.1998 372.279C17.8781 383.848 27.4822 393.457 39.0479 400.141L187.503 485.847C199.70 492.529 212.193 496.048 225.551 496.048C238.909 496.048 252.032 492.529 263.599 485.847L412.054 400.141C423.62 393.457 433.224 383.848 439.902 372.279C446.58 360.711 450.098 347.589 450.102 334.23Z" stroke="#919191" strokeOpacity="0.51" strokeWidth="0.5" strokeMiterlimit="10"/>
          <defs>
            <clipPath id="clip0_831_1957">
              <rect width="200" height="220.213" fill="white" transform="translate(124.551 139.566)"/>
            </clipPath>
            <clipPath id="clip1_831_1957">
              <rect width="275" height="302.904" fill="white" transform="translate(87.5508 97.5657)"/>
            </clipPath>
            <clipPath id="clip2_831_1957">
              <rect width="350" height="385.727" fill="white" transform="translate(49.5508 56.5657)"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          
          {/* Logo */}
          <div className="text-center mb-12">
            <Image
              src="https://res.cloudinary.com/dxri4npkx/image/upload/v1754939468/logo_nombre-azul_so0jwk.png"
              alt="Soisi"
              width={120}
              height={40}
              className="mx-auto"
              priority
            />
          </div>

          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500 text-base">
              Login to your account
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                disabled={isLoading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            {/* Forgot Password Link */}
            <div className="text-right">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#B5FD1E] hover:bg-[#a5ed0e] text-black font-bold rounded-full transition-colors mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">Or continue with</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-4 justify-center mb-6">
            <button className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1755005110/google_oms92l.png"
                alt="Google"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </button>
            
            <button className="w-12 h-12 flex items-center justify-center hover:opacity-80 transition-opacity">
              <Image
                src="https://res.cloudinary.com/dxri4npkx/image/upload/v1755005115/apple_n1ki7x.png"
                alt="Apple"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          {/* Registration Link */}
          <p className="text-center text-gray-500 text-sm">
            Don't have an account?{' '}
            <Link href="/register" className="font-bold text-black hover:underline">
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}