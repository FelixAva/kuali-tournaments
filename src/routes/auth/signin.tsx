import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/signin')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Hello "/auth/signin"!</h1>
      <Link to="/auth/signup">
        SignUp
      </Link>
    </div>
  );
};
