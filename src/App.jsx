import React, { useState } from "react";
import img from "./assets/satyajpg.jpg";
import waqr from "./assets/waqr.jpg";

import { PiDiamondsFourFill } from "react-icons/pi";
import {
	IoLogoLinkedin,
	IoLogoGithub,
	IoLogoInstagram,
	IoLogoWhatsapp,
} from "react-icons/io";
import { FaDiscord, FaWhatsapp } from "react-icons/fa";

function App() {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			<div className="bg-gray-800 h-screen flex justify-center items-center font-comfortaa">
				<div className="max-w-lg bg-gray-700 w-full rounded-xl flex p-2 gap-2">
					<div className="w-1/2">
						<img src={img} alt="img" className="rounded-xl" />
					</div>
					<div className="relative text-red-400 bg-gray-800 w-1/2 rounded-xl p-2 flex flex-col items-center justify-between">
						<PiDiamondsFourFill className="text-gray-600" />
						<h1 className="font-semibold tracking-wide">: : Satya Mahendra</h1>
						<ul className="text-xs flex flex-col gap-1">
							<li className="flex gap-2 items-center">
								<IoLogoLinkedin className="text-2xl" />
								<p>Ida Bagus Satya Mahendra</p>
							</li>
							<li
								onClick={() => setToggle((prev) => !prev)}
								className="flex gap-2 items-center"
							>
								<FaWhatsapp className="text-2xl" />
								<p>Ida Bagus Satya Mahendra</p>
							</li>
							<li className="flex gap-2 items-center">
								<IoLogoInstagram className="text-2xl" />
								<p>007satya_</p>
							</li>
							<li className="flex gap-2 items-center">
								<FaDiscord className="text-2xl" />
								<p>007satya_</p>
							</li>
							<li className="flex gap-2 items-center">
								<IoLogoGithub className="text-2xl" />
								<p>megatronhehe</p>
							</li>
						</ul>
						{toggle && (
							<div className="top-0 -left-24 absolute w-32 font-semibold bg-gray-700 p-1 rounded-md text-xs">
								<img src={waqr} className="rounded-lg" alt="" />
								<p
									onClick={() => setToggle(false)}
									className=" -top-5 w-full bg-gray-700 text-center mt-1"
								>
									close x
								</p>
							</div>
						)}
						<PiDiamondsFourFill className="text-gray-600" />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
