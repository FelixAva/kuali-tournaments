import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/tournament/$tournamentId')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/tournament/$tournamentId"!
      <Outlet />
    </div>
  );
}
