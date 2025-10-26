import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/tournament/$tournamentId/matches')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/tournament/$tournamentId/matches"!</div>
};
