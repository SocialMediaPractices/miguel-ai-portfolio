import Image from "next/image";

export function CaseStudyScreenshot({ src, title }: { src: string; title: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <Image src={src} alt={`${title} redacted demo screenshot`} width={1200} height={800} className="h-auto w-full" />
      <figcaption className="border-t border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
        {title}
      </figcaption>
    </figure>
  );
}
