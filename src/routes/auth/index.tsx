import { createFileRoute } from '@tanstack/react-router';
import { Input, Button } from '../../components';

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h2
        className="mb-1.5 text-xl text-[#843CFF]"
      >
        Gestiona tus torneos
      </h2>
      <h3
        className="mb-5 text-lg text-gray-600"
      >
        Inicia sesión para acceder a tus torneos
      </h3>

      <form
        action=""
        className="w-[280px] flex flex-col gap-4"
      >
        <Input
          label='Correo'
          type='email'
        />
        <Input
          label='Contraseña'
          type='password'
        />

        <Button
          title='Iniciar Sesión'
          action={() => console.log('SignIn')}
        />
      </form>
    </>
  );
};
