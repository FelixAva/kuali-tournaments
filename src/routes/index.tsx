import { createFileRoute } from '@tanstack/react-router';
import { TournamentCard, Button } from '../components';

export const Route = createFileRoute('/')({
  component: Index
});

function Index() {
  return (
    <div className="w-full p-3 lg:max-w-[970px] lg:justify-self-center">
      <div className="flex flex-col text-center gap-1.5 md:flex-row md:justify-between md:items-center">
        <h2 className="text-xl md:text-2xl font-semibold">Mis Torneos</h2>
        <Button
          title='Crear torneo'
          action={() => console.log('Crear torneo')}
        />
      </div>

      <div className="flex flex-col items-center mt-5 gap-5 md:flex-row md:flex-wrap md:justify-center">
        <TournamentCard />
        <TournamentCard />
        <TournamentCard />
      </div>
    </div>
  );
};
