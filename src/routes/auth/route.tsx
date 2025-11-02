import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/auth')({
  component: AuthLayoutComponent,
});

function AuthLayoutComponent() {
  return (
    <div className="w-screen h-screen bg-[#EEE] flex flex-col justify-center items-center">
      <div className="w-full h-[400px] bg-[#FFF] flex flex-col justify-center items-center text-center">
        <Outlet />
      </div>
    </div>
  );
};
