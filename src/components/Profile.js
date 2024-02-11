import React, { useState, useEffect } from "react";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setProfile(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!profile) {
    return <button>로그인</button>;
  }

  return (
    <div className="profile-info">
      <img className="profile-img" src={profile.profileImageSource} alt="profile_img" />
      <p className="profile-email">{profile.email}</p>
    </div>
  );
}

export default Profile;
