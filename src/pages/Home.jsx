export default function Home () {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
            <div className="bg-background-light rounded-lg border border-slate-700 shadow-2xl p-8 max-w-md w-full">
                <h1 className="mb-4 text-center">
                    Identidad Visual Configurada
                </h1>
                <p className="text-center mb-6">
                    Colores y tipografía definidos según el plan del portfolio.
                </p>
                <button className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Botón de Prueba
                </button>
            </div>
        </div>
    )
}