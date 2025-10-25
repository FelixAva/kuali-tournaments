import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='bg-black'>
      <h1>hola</h1>
      <Outlet />
    </div>
  )
}
