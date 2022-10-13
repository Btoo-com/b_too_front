// import React from "react";
// import axios from "axios";
// import styled from "styled-components";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { useDispatch } from "react-redux";
// import jwtDecode from "jwt-decode";

// export const Login = () => {

//   const newUser = new FormData();
//   const dispatch = useDispatch()
//   const [ggmInfo, setGgmInfo] = useRecoilState(userInfo);
//   const [id, setId] = React.useState("");
//   const [pwd, setPwd] = React.useState("");

//   const signUp = async () => {
//     // 폼 데이터 서버로 전송
//     await axios.post(`/user/join`, newUser).then((res) => {
//       setGgmInfo(jwtDecode(res.data));
//       localStorage.setItem("token", res.data);
//     });

//     window.location.href = "/";
//   };


//   return (
//     <Body>
//       <form method="get" action="form-action.php">
//         <div className="nameinput">자신의 이름을 입력해주세요</div>
//         <input type="text" name="name"></input>
//         <input type="submit" value="submit"></input>
//       </form>
//       </Body>
//       );
// };
//       const Body = styled.div`

//       `
