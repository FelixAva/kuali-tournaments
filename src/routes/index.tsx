import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <div className="w-full p-2">
      <h2>Torneos</h2>
    </div>
  );
};
