import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Hello "SignIn"!</h1>
      <Link to="/auth/signup">
        Sign Up
      </Link>
    </div>
  );
};
