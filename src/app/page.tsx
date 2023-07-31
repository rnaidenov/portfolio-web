// TODO: Add alias
import { About } from "./components/about/about"
import Cursor from "./components/cursor/cursor"
import { Index } from "./components/index/index"
import { PageProvider } from "./components/page-provider/page-provider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageProvider>
        <Index />
        <About />
      </PageProvider>
    </main>
  )
}
