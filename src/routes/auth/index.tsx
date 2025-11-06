import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Input, Button } from '../../components';

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate({from: '/auth/'});

  const onSignIn = () => {
    // ! Integrate real signIn; useSession, API, form validation, etc.
    alert('Your Logged now. Redirecting...');

    navigate({
      to: '/'
    })
  }

  return (
    <>
      <h2
        className="mb-1.5 text-xl text-[#843CFF] font-semibold md:mb-2 md:text-2xl"
      >
        Gestiona tus torneos
      </h2>
      <h3
        className="mb-5 text-lg text-gray-600 md:text-xl md:text-gray-400"
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
          action={onSignIn}
        />
      </form>
    </>
  );
};
