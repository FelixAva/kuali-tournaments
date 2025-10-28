import { createFileRoute } from '@tanstack/react-router';
import { Input } from '../components';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <div className="w-full p-2">
      <h2>Torneos</h2>

      <Input label='Email' placeholder='A' />
    </div>
  );
};
