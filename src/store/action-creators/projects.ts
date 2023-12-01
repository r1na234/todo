import { Dispatch } from "react";
import { ProjectAction, ProjectActionTypes } from "../../types/projects";
import axios from "axios";

export const fetchProjects: any = () => {
	return async (dispatch: Dispatch<ProjectAction>) => {
		try {
			dispatch({ type: ProjectActionTypes.FETCH_PROJECTS });
			const responce = await axios.get(
				`https://todobasic-2c867-default-rtdb.asia-southeast1.firebasedatabase.app/projects/${id}`
			);
			dispatch({
				type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
				payload: responce.data,
			});
		} catch (e) {
			dispatch({
				type: ProjectActionTypes.FETCH_PROJECTS_ERROR,
				payload: "Произошла ошибка загрузки проектов",
			});
		}
	};
};
