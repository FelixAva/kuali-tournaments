import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/auth')({
  component: AuthLayoutComponent,
});

function AuthLayoutComponent() {
  return (
    <div className="w-screen h-screen bg-[#EEE] flex flex-col justify-center items-center">
      <div className="w-full h-[400px] shadow-md bg-[#FFF] flex flex-col justify-center items-center text-center md:w-[450px] md:h-[470px] md:rounded-md">
        <Outlet />
      </div>
    </div>
  );
};
