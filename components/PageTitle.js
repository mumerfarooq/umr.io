export default function PageTitle({ children }) {
  return (
    <h1 className="font-mono text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-stone-900 dark:text-stone-50 sm:text-4xl md:text-5xl">
      {children}
    </h1>
  )
}
