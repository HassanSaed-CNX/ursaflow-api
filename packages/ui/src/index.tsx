import type { ReactNode } from 'react';

export type CardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function Card({ title, description, children }: CardProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      {description ? <p className="text-sm text-slate-600">{description}</p> : null}
      <div className="mt-3">{children}</div>
    </section>
  );
}
