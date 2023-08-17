// Libraries
import "./assets/styles/css/output.css"
import "./assets/styles/css/normalize.css"

// Components
import { Navbar } from "./components/Navbar"
import { Page } from "./pages/page/Page"

export default function App() {
	return (
		<section className="flex w-full h-full justify-start">
			<Navbar />
			<Page />
		</section>
	)
}
