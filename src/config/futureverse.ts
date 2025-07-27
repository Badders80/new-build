import { FutureverseAuthClient } from '@futureverse/auth-react/auth';

const clientId = process.env.NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID || '';

// Provide helpful error message if client ID is not configured
if (!clientId || clientId === 'your_client_id_here') {
  console.warn('⚠️ Futureverse Client ID not configured. Authentication will not work until you set NEXT_PUBLIC_FUTUREVERSE_CLIENT_ID in .env.local');
}

export const futureverseAuthClient = new FutureverseAuthClient({
  clientId: clientId,
  redirectUri: 'http://localhost:3000/',
  postLogoutRedirectUri: 'http://localhost:3000/',
});
