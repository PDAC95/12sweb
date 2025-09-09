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

  async login(email: string, password: string) {
    // TODO: Implement when backend login is ready
    console.log('Login service ready for implementation');
    return null;
  }
}

export const authService = new AuthService();