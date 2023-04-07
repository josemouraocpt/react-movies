import { useNavigate } from "react-router-dom";

interface Props{
	title: string,
	rate: number,
	id: number,
	poster: string
};

const Poster = ({title, rate, id, poster}: Props) => {
	const movieImage = import.meta.env.VITE_API_IMAGE;

	const navigate = useNavigate();

	const handleClick = (id: number) => {
		navigate("/movie/" + id);
	};

		return (
				<div className="max-w-xs min-h-[39rem]">
					<img src={`${movieImage}${poster}`} alt={title} className="w-80 min-h-[30rem]"/>
					<h2 className="text-2xl font-bold min-h-[4rem]">{title}</h2>
					<p className="my-2"> &#11088; {rate}</p>
					<button onClick={()=> handleClick(id)} className="bg-violet-950 min-w-full p-4 text-[1.2rem] rounded-md hover:bg-transparent ease-in-out duration-300 button">Detalhes</button>
				</div>
		)
}

export default Poster