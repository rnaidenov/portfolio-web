// TODO: Add alias
import Cursor from "./components/cursor/cursor"
import { Index } from "./components/index/index"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Index />
      <Cursor />
    </main>
  )
}
