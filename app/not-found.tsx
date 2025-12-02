import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100">
      <div className="text-center px-6">
        <h2 className="font-serif text-6xl mb-4 text-neutral-900">404</h2>
        <p className="text-neutral-500 mb-8">Página no encontrada</p>
        <Link
          href="/"
          className="inline-block border border-neutral-900 px-8 py-3 text-xs uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
