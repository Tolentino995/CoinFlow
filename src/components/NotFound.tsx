const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md text-center">
        
        {/* El número de error destacado pero amigable */}
        <h1 className="text-9xl font-extrabold text-cyan-500 mb-4 drop-shadow-sm">
          404
        </h1>
        
        {/* Título empático */}
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          ¡Ups! Parece que nos hemos perdido.
        </h2>
        
        {/* Mensaje tranquilizador */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          La página que buscas fue movida, eliminada o quizás nunca existió. 
          Pero no te preocupes, el camino de regreso está a un solo clic.
        </p>
        
        {/* Botón de llamada a la acción (Escape hatch) */}
        <a 
          href="/" 
          className="inline-block bg-cyan-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-cyan-600 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Volver al inicio
        </a>

      </div>
    </div>
  );
};

export default NotFound;