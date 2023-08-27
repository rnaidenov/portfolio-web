// TODO: Add alias
import { Index } from "./pages/index/index"
import { PageProvider } from "./components/page-provider/page-provider"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PageProvider>
        <Index />
      </PageProvider>
    </main>
  )
}
