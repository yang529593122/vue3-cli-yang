import {getRequest} from "../request"

export const getData =async () => getRequest("http://localhost:8000/list",{id:2});