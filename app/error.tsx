'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-6">
        <h2 className="font-serif text-4xl mb-4 text-neutral-900">Algo salió mal</h2>
        <p className="text-neutral-500 mb-8">Disculpe las molestias.</p>
        <button
          onClick={reset}
          className="bg-neutral-900 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-neutral-700 transition-colors"
        >
          Intentar nuevamente
        </button>
      </div>
    </div>
  );
}
