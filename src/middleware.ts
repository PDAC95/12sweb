// Auth0 v4 middleware - requires configuration based on your setup
// This is a placeholder - Auth0 v4 uses a different API structure

export default async function middleware() {
  // Middleware implementation would go here
  // Auth0 v4 requires different configuration
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/bets/:path*',
    '/wallet/:path*',
    '/profile/:path*'
  ],
};