export const BASE_URL = process.env.REACT_APP_BASE_URL

export const GET_SHARE_API = `${BASE_URL}/sample/folder`

export const GET_PROFILE_API = `${BASE_URL}/users/1`

export const GET_LINKS_API = `${BASE_URL}/users/4/links`

export const GET_FOLDER_API = `${BASE_URL}/users/4/folders`

export const GET_FOLDER_BY_ID = (folderId) => `${BASE_URL}/users/4/links?folderId=${folderId}`
