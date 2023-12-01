import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../store/action-creators/projects";

export const ProjectList: React.FC = () => {
	const { projects, error, loading } = useTypedSelector(
		(state) => state.projects
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProjects());
	}, []);

	if (loading) {
		return <h1> Идет загрузка ...</h1>;
	}
	if (error) {
		return <h1>{error}</h1>;
	}
	return (
		<div>
			{projects.map((project) => (
				<div>{project.title}</div>
			))}
		</div>
	);
};
