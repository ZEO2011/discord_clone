// components
import { MouseEventHandler } from "react"
import { Server } from "./Server"
// TODO: this component built for making servers with img complete it
export function Community({
	caption,
	extension,
	num,
	onClick,
}: {
	caption: string
	extension: string
	num: number
	onClick?: MouseEventHandler
}) {
	return (
		<Server caption={caption} onClick={onClick} hasSide={true}>
			<div className="wrapper">
				<img
					src={`src/assets/imgs/servers/server-${num}.${extension}`}
					alt={`server ${num}}`}
				/>
			</div>
		</Server>
	)
}
