export default function Loading() {
  // Full-viewport loader to display while server components/data are loading.
  // Once the route resolves, your sections mount and the IntersectionObserver fade-ins run as before.
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-background text-foreground"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div
          className="h-10 w-10 rounded-full border-2 border-muted-foreground/30 border-t-foreground animate-spin"
          aria-hidden="true"
        />
        <p className="text-sm opacity-80">Loading…</p>
      </div>
    </main>
  )
}