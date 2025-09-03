import React from 'react'
import { Ellipsis} from "lucide-react"
export default function PageLoader() {
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
