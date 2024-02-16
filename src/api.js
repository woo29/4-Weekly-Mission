const BASE_URL = "https://bootcamp-api.codeit.kr/api/sample/";

export const getFolderInfo = async function () {
  try {
    const response = await fetch(`${BASE_URL}folder`);
    const result = await response.json(); // 재사용성을 위해 response.json()으로 끝맺는게 좋음
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async function () {
  try {
    const response = await fetch(`${BASE_URL}user`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
