import Link from 'next/link';

export default function Header({ title, linkHref }) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center">
        <div className="border-l-2 border-color-red h-6 mr-2"></div> {/* Vertical line */}
        <h1 className="my-3 text-xl font-semibold text-color-primary">{title}</h1>
      </div>
      {linkHref ? (
        <Link href={linkHref} className="text-xs py-1 px-2 bg-color-red hover:bg-red-700 rounded-md transition-all text-color-primary">
          See All
        </Link>
      ) : null}
    </div>
  );
}
