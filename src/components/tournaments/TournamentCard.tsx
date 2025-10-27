import Button from '../ui/Button';
import Badge from '../ui/Badge';

const TournamentCard = () => {
  return (
    <div className="w-[300px] h-auto rounded-xl overflow-hidden">
      {/* Image container */}
      <div
        className="w-auto h-[130px] bg-gradient-to-b from-zinc-400 to-white"
      >
        {/* Gradient color */}
      </div>

      <div className="px-2.5 py-2">
        <div className="flex flex-col gap-1.5">
          <Badge title="En curso" />

          <h4 className="text-xl font-">Tournament</h4>

          <div>
            {/* Icon component */}
            <p className="text-lg font-light">Players</p> { /* Players, get from the backend */}
          </div>

          <div className="flex justify-between">
            <Button
              title="Ver detalles"
              action={() => console.log('Detalles')}
            />
            <Button
              title="Editar"
              action={() => console.log('Detalles')}
              variant="ghost"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
