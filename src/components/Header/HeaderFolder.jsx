import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './images/logo.png';
import './Header.css';

export default function HeaderFolder() {
  return (
    <header id="headerFolder">
      <div className="headerLogo">
        <a href="/">
          <img className="logo" src={logo} alt="Linkbrary로고" />
        </a>
      </div>
      <Profile />
    </header>
  );
}

function Profile() {
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://bootcamp-api.codeit.kr/api/users/1');
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setUser(null);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {user.data == null ? (
        <div className="headerButton">
          <button>로그인</button>
        </div>
      ) : (
        <div id="profileArea">
          <img id="profileImage" src={user.data[0].image_source} alt="프로필 이미지" />
          <p id="profileEmail">{user.data[0].email}</p>
        </div>
      )}
    </>
  );
}
