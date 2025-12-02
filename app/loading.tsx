export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-neutral-900 mx-auto"></div>
        <p className="mt-4 text-sm uppercase tracking-widest text-neutral-500">Cargando...</p>
      </div>
    </div>
  );
}
