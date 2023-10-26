import Link from 'next/link'

export function Header() {
  return (
    <header>
      <h1>Manosos SPA</h1>
      <nav>
        <ul>
          <li>
            <Link href="/">Personas</Link>
          </li>
          <li>
            <Link href="/planetas">Planetas</Link>
          </li>
          <li>
            <Link href="/naves">Naves</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
