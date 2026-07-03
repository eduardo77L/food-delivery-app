import './App.css'

const services = [
  { name: 'API Gateway', port: 3001 },
  { name: 'Auth Service', port: 3002 },
  { name: 'User Service', port: 3003 },
  { name: 'Restaurant Service', port: 3004 },
  { name: 'Order Service', port: 3005 },
  { name: 'Notification Service', port: 3006 },
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <span className="logo-mark">🍽️</span>
        <h1>Food Delivery</h1>
        <p className="tagline">Peça comida. Arquitetura de microsserviços.</p>
      </header>

      <main className="main">
        <section className="card">
          <h2>MVP em construção</h2>
          <ul className="checklist">
            <li>Cadastro e login</li>
            <li>Listagem de restaurantes</li>
            <li>Cardápio</li>
            <li>Fazer pedido</li>
            <li>Status do pedido</li>
          </ul>
        </section>

        <section className="card">
          <h2>Microsserviços</h2>
          <ul className="services">
            {services.map((service) => (
              <li key={service.port}>
                <span>{service.name}</span>
                <code>:{service.port}</code>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
