import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import { useState } from "react";

const Navbar = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log(searchQuery);
		if(!searchQuery) return;
		navigate(`/search?q=${searchQuery}`, { replace: true });
		setSearchQuery("");
	};

		return (
				<div className="text-lg p-2 py-3 bg-violet-700">
					<nav className="flex justify-between px-3">
							<h2>
								<Link to="/" className="text-[1.5rem]"><BiCameraMovie className="inline text-lg pb-1 text-violet-300 hover:text-violet-900 ease-in-out duration-300" size={25}/>  MoviesLib</Link>
							</h2>
							<form onSubmit={handleSubmit}>
								<input type="text" placeholder="Search a movie" className="bg-transparent border border-violet-300 rounded outline outline-offset-0 outline-0 px-2 absolute right-11 top-3 focus:placeholder:text-transparent" onChange={e => setSearchQuery(e.target.value)} value={searchQuery}/>
									<button type="submit" className="absolute right-3 top-3.5 ">
									<BiSearchAlt2 size={25} className="text-violet-300 hover:text-violet-900 ease-in-out duration-300"></BiSearchAlt2>
									</button>
							</form>
						</nav>
				</div>
		)
}

export default Navbar