import { useSession, signIn, signOut } from 'next-auth/client';
import AccessDenied from '../components/Authentication/AccessDenied/AccessDenied';

export default function Page() {
  const [session, loading] = useSession();

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <div>
        <AccessDenied />
        <button onClick={() => signIn()}>signIn</button>
      </div>
    );
  }

  // If session exists, display content
  return (
    <div>
      <h1>Protected Page</h1>
      <p>
        <strong>lel your are logged in</strong>
      </p>
    </div>
  );
}
