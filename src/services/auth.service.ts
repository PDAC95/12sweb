// src/services/auth.service.ts
class AuthService {
  private API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

  async register(data: {
    email: string;
    username: string;
    password: string;
    birthDate: string;
  }) {
    try {
      const response = await fetch(`${this.API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle specific error messages from backend
        if (response.status === 409) {
          throw new Error(result.message || 'Username or email already exists');
        }
        if (response.status === 400) {
          throw new Error(result.message || 'Invalid data provided');
        }
        throw new Error(result.message || 'Registration failed');
      }

      return result;
    } catch (error) {
      // Re-throw with user-friendly message
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error. Please try again.');
    }
  }

  async login(data: { email: string; password: string }) {
    try {
      const response = await fetch(`${this.API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'include', // Important: Include cookies
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle specific error messages from backend
        if (response.status === 401) {
          throw new Error(result.message || 'Invalid email or password');
        }
        throw new Error(result.message || 'Login failed');
      }

      return result;
    } catch (error) {
      // Re-throw with user-friendly message
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error. Please try again.');
    }
  }

  async logout() {
    try {
      await fetch(`${this.API_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include', // Include cookies
      });
      // Cookie will be cleared by the server
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      // Even if logout fails on server, still redirect user
      return { success: true };
    }
  }

  async getCurrentUser() {
    try {
      const response = await fetch(`${this.API_URL}/auth/me`, {
        method: 'GET',
        credentials: 'include', // Include cookies
      });

      if (!response.ok) {
        return null; // User not authenticated
      }

      const result = await response.json();
      return result.data?.user || null;
    } catch (error) {
      console.error('Get current user error:', error);
      return null;
    }
  }
}

export const authService = new AuthService();