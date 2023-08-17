// components
import { Friends } from "./components/Friends"

export function Page() {
	let pageIndex = 1
	return (
		<section className="view w-full h-full">
			<Friends tabIndex={pageIndex++} />
			<div className="page hidden" tabIndex={2}>
				web dev simplified
			</div>
			<div className="page hidden" tabIndex={3}>
				tailwind css
			</div>
			<div className="page hidden" tabIndex={4}>
				add new server
			</div>
			<div className="page hidden" tabIndex={5}>
				discover servers
			</div>
			<div className="page hidden" tabIndex={6}>
				download apps
			</div>
		</section>
	)
}
