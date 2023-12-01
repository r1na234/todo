export enum ProjectActionTypes {
    FETCH_PROJECTS = "FETCH_PROJECTS",
    FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS",
    FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR"
}
export interface ProjectState{
    projects: any[];
    loading: boolean;
    error: null | string;
}

interface FetchProjectAction {
    type: ProjectActionTypes.FETCH_PROJECTS,

}
interface FetchProjectSuccessAction {
    type: ProjectActionTypes.FETCH_PROJECTS_SUCCESS,
    payload: any []

}
interface FetchProjectErrorAction {
    type: ProjectActionTypes.FETCH_PROJECTS_ERROR,
    payload: string

}
export type ProjectAction = FetchProjectAction | FetchProjectErrorAction | FetchProjectSuccessAction