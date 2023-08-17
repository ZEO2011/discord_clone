// interfaces
import { MouseEventHandler } from "react"
import { childrenInter } from "../interfaces/children"

export function Server({
	className,
	caption,
	children,
	hasSide,
	onClick,
}: {
	caption: string
	children: childrenInter
	className?: string
	hasSide: boolean
	onClick?: MouseEventHandler
}) {
	return (
		<>
			<div
				onClick={onClick}
				className={
					"server ml-2 relative w-16 h-16 rounded-[50%] grid place-items-center bg-[#313338] cursor-pointer hover:rounded-[30%] transition-all duration-main  hover:bg-main-blue " +
					className
				}
				data-caption={caption}
			>
				{hasSide ? (
					<div className="white-side absolute h-3 transition-all duration-main w-1 bg-white rounded-tr-md rounded-br-md -left-[1.2rem]"></div>
				) : null}
				{children}
			</div>
		</>
	)
}
