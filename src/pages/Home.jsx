export default function Home () {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full">
                <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
                    ¡Tailwind configurado correctamente! 
                </h1>
                <p className="text-gray-600 text-center mb-6">
                    Prueba de configuración de Tailwind CSS v3.
                </p>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Botón de Prueba
                </button>
            </div>
        </div>
    )
}