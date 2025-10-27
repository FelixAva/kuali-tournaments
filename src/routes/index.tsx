import { createFileRoute } from '@tanstack/react-router';
import { Button } from '../components';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <div className="w-full p-2">
      <h2>Torneos</h2>

      <Button
        title='Crear'
        action={() => console.log('Creado')}
        variant='default'
        type='button'
      />
    </div>
  );
};
