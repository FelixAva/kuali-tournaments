import Button from "../ui/Button";

const TournamentCard = () => {
  return (
    <div className="w-full h-auto">
      {/* Image container */}
      <div>
        {/* Gradient color */}
      </div>

      <div>
        <div>
          {/* Badge component */}
          <h4>Tournament</h4>

          <div>
            {/* Icon component */}
            Players { /* Players, get from the backend */}
          </div>
        </div>

        <div>
          <Button
            title="Ver detalles"
            action={() => console.log('Detalles')}
          />
          <Button
            title="Ver detalles"
            action={() => console.log('Detalles')}
            variant="ghost"
          />
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
