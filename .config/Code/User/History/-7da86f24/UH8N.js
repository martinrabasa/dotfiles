export default function Header() {
    return (
        <header className='flex justify-between items-center py-10'>
          <a href="/" className='text-3xl font-bold'>NF</a>
          <nav>
            <ul className='flex gap-6 font-semibold'>
              <li><a href="/#portfolio">Portfolio</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>
    )
}