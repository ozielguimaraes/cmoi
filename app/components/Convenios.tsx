export default function Convenios() {
  const convenios = [
    { name: 'CASSI' },
    { name: 'FUSEX' },
    { name: 'Zequinha Araújo' },
  ]

  return (
    <section id="convenios" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Convênios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aceitamos os principais convênios de Porto Velho e região
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {convenios.map(({ name }) => (
            <div
              key={name}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center min-h-40"
            >
              <p className="text-xl font-bold text-gray-900 text-center">
                {name}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white border-2 border-purple-200 rounded-lg p-6 md:p-8 text-center">
          <p className="text-gray-700 text-lg">
            Outros convênios e formas de atendimento podem ser consultados diretamente com nossa clínica.
          </p>
          <p className="text-gray-600 text-sm mt-3">
            Fale conosco: <span className="font-semibold">(69) 3222-4886</span> ou{' '}
            <span className="font-semibold">(69) 99315-7554</span>
          </p>
        </div>
      </div>
    </section>
  )
}
