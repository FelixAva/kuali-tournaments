import { createFileRoute } from '@tanstack/react-router';
import { Input, Button } from '../../components';

export const Route = createFileRoute('/auth/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h2>Gestiona tus torneos</h2>
      <h3>Inicia sesión para acceder a tus torneos</h3>

      <form
        action=""
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
    </div>
  );
};
