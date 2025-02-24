export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p> This is a test paragraph with too many spaces. </p>
      <p>Using double quotes instead of single quotes</p>
      <p>
        This string is way too long and should exceed the print width limit set
        in Prettier for linting purposes. This is a test to see if the linter
        catches this error properly.
      </p>
    </div>
  )
}
