import { IProject } from "../data/types"

export const getAllProjectsId = (projects: IProject[]) => {
    return projects.map(proj => ({
        params: {
            id: proj.title.replaceAll(' ', '-')
        }
    })
)}

export function getProjData(projects: IProject[] ,id:string | undefined | string[]) {
    if (id == undefined || Array.isArray(id)) {
        throw Error('Something went wrong')
    }
  return projects.find((proj) => proj.title.replaceAll(' ', '-') === id)
}
