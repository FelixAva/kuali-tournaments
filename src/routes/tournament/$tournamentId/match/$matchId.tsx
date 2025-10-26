import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/tournament/$tournamentId/match/$matchId',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tournament/$tournamentId/match/$matchId"!</div>
}
