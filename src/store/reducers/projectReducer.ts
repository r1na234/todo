import {
	ProjectAction,
	ProjectActionTypes,
	ProjectState,
} from "../../types/projects";

const initialState: ProjectState = {
	projects: [],
	loading: false,
	error: null,
};
export const projectReducer = (
	state = initialState,
	action: ProjectAction
): ProjectState => {
	switch (action.type) {
		case ProjectActionTypes.FETCH_PROJECTS:
			return { projects: [], loading: true, error: null };
		case ProjectActionTypes.FETCH_PROJECTS_SUCCESS:
			return { projects: action.payload, loading: false, error: null };
		case ProjectActionTypes.FETCH_PROJECTS_ERROR:
			return { projects: [], loading: false, error: action.payload };
		default:
			return state;
	}
};
