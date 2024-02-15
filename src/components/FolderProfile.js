import "components/FolderProfile.css";
import { acceptDataFromApi } from "Api";
import { useState, useEffect } from "react";

const FolderProFile = function () {
	const [folderName, setFolderName] = useState("빈 폴더");
	const [folderImg, setFolderImg] = useState("favicon.png");
	const [folderAccountName, setFolderAccountName] = useState("USER_NAME");

	const FOLDER = "folder";
	const USER = "user";
	const loadFolderAccountName = async (parameter) => {
		const { name, profileImageSource } = await acceptDataFromApi(parameter);
		if (!name || !profileImageSource) return;

		setFolderAccountName(name);
		setFolderImg(profileImageSource);
	};

	const loadFolderProfileData = async (parameter) => {
		const receivedData = await acceptDataFromApi(parameter);
		if (!receivedData) return;

		setFolderName(receivedData.folder.name);
	};

	useEffect(() => {
		loadFolderAccountName(USER);
		loadFolderProfileData(FOLDER);
	}, [folderName, folderImg, folderAccountName]);

	return (
		<section className="folderPageProfile">
			<img src={folderImg} alt="testingAccount" />
			<p className="userName">{`${folderAccountName}`}</p>
			<p className="folderName">{`${folderName}`}</p>
		</section>
	);
};

export default FolderProFile;
