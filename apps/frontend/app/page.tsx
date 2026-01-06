export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-16">
        <h1 className="text-3xl font-semibold">UrsaFlow Hydraulics</h1>
        <p className="text-slate-200">
          Production tracking from Work Orders to Final Packing with gated quality checks,
          approvals, and real-time notifications.
        </p>
        <ul className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-200">
          <li>• Notifications, approvals, and exception handling are built-in.</li>
          <li>• Validation at UI, Server Actions, API DTOs, and database layers.</li>
          <li>• Theme-ready UI with clean industrial styling.</li>
        </ul>
      </section>
    </main>
  );
}
