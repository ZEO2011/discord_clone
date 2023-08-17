/* eslint-disable @typescript-eslint/no-explicit-any */
// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import {
	faPlus,
	faCompass,
	faDownload,
} from "@fortawesome/free-solid-svg-icons"

// Components
import { Server } from "./Server"
import { Community } from "./Community"

// Hooks
import { useEffect, useState } from "react"

export function Navbar() {
	useEffect(() => {
		const pages = document.querySelectorAll(".page")
		pages.forEach((page) => page.classList.add("hidden"))
		pages[0].classList.remove("hidden")
	})
	let serverIndex = 1
	useEffect(() => {
		const servers = document.querySelectorAll(".server")
		servers.forEach((server, index) => {
			server.setAttribute("tabindex", String(++index))
		})
	}, [])
	const [servers] = useState([
		{
			caption: "web dev simplified",
			extension: "jpg",
			num: serverIndex++,
			onClick: handler,
			id: crypto.randomUUID(),
		},
		{
			caption: "tailwind CSS",
			extension: "png",
			num: serverIndex++,
			onClick: handler,
			id: crypto.randomUUID(),
		},
	])
	// server clicking
	function handler(e: any) {
		let imgWrapper: Element
		let servers: any[] = [...e.target.parentElement.children]
		if (e.target.classList.contains("wrapper"))
			servers = [...e.target.parentElement.parentElement.children]
		if (servers !== undefined)
			servers.map((el) => {
				el.classList.remove("active")
				imgWrapper = el.querySelector(".wrapper")
				if (imgWrapper !== null)
					imgWrapper.classList.remove("active")
			})
		if (e.target !== null) e.target.classList.add("active")
		const pages = document.querySelectorAll(".page")
		let clicked: Element
		if (e.target.classList.contains("wrapper"))
			clicked = e.target.parentElement
		else clicked = e.target
		pages.forEach((page) => {
			if (
				page.getAttribute("tabindex") ==
				clicked.getAttribute("tabindex")
			) {
				pages.forEach((page) => page.classList.add("hidden"))
				page.classList.remove("hidden")
			}
		})
	}
	return (
		<nav className="servers w-24 items-center p-4 !h-full bg-[#1E1F22] flex flex-col gap-4">
			<Server
				caption="direct messages"
				hasSide={true}
				onClick={handler}
				className="active"
			>
				<FontAwesomeIcon icon={faDiscord} className="friends" />
			</Server>
			{servers.map((server) => {
				return (
					<Community
						key={server.id}
						{...server}
						onClick={handler}
					/>
				)
			})}
			<Server caption="add a server" hasSide={false} onClick={handler}>
				<FontAwesomeIcon icon={faPlus} />
			</Server>
			<Server
				caption="explore discoverable servers"
				hasSide={true}
				onClick={handler}
			>
				<FontAwesomeIcon icon={faCompass} />
			</Server>
			<Server caption="download apps" hasSide={true} onClick={handler}>
				<FontAwesomeIcon icon={faDownload} />
			</Server>
		</nav>
	)
}
