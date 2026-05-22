export function ScreenshotPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex min-h-56 items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-100 p-6 text-center">
      <div>
        <p className="font-semibold text-slate-800">{title}</p>
        <p className="mt-2 text-sm text-slate-500">Add redacted/demo screenshot here</p>
      </div>
    </div>
  );
}
