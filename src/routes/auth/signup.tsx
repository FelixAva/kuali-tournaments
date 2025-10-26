import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Hello "SignUp"!</h1>

      <Link to="/auth">Sign In</Link>
    </div>
  );
};
