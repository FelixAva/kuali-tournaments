import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Hello "/auth/signup"!</h1>
      <Link to="/auth/signin">
        SignIn
      </Link>
    </div>
  );
};
