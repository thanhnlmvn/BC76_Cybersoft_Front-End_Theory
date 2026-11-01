import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { http } from "../../../service/config";

export default function ListMovie(props) {
  // Các lưu ý khi đưa dữ liệu lên giao diện
  // - Cần có 1 state để quản lý  dữ liệu từ BE
  // - Cần có 1 hook useEffect (dùng để quản lý life cycle) dùng để gọi API

  const [LIST_MOVIE, SET_LIST_MOVIE] = useState([]); // lấy array

  // console.log("Tôi là component ListMovie");
  // console.log(LIST_MOVIE);
  console.log(props);

  // useEffect nhận vào 2 tham số 1 là callbackfn, 2 là dependency
  // useEffect này đang chạy quá trình mounting và ở đây là trạng thái component didmount
  useEffect(() => {
    console.log("Tôi là useEffect nè");
    // axios({
    //   url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
    //   method: "GET",
    //   headers: {
    //     TokenCyberSoft:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NiIsIkhldEhhblN0cmluZyI6IjI1LzA0LzIxMDAiLCJIZXRIYW5UaW1lIjoiMTc0NTUzOTIwMDAwMCIsIm5iZiI6MTcxNzA4ODQwMCwiZXhwIjoxNzQ1Njg2ODAwfQ.GBNQidF_sLrkDCyDD89x_hOCyqhFtMLd4WPHMJ6zb7c",
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //     SET_LIST_MOVIE(res.data.content);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    http
      .get("/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((res) => {
        console.log(res);

        const DATA_MOVIE =
          !isNaN(props.started) && !isNaN(props.ended)
            ? res.data.content.slice(props.started, props.ended)
            : res.data.content;

        SET_LIST_MOVIE(DATA_MOVIE);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const NAVIGATE = useNavigate();

  function renderLayout() {
    console.log("Tôi là giao diện của component list movie");
    return LIST_MOVIE.map((movie, i) => (
      <div className="space-y-2">
        <img src={movie.hinhAnh} className="w-full " alt="" />
        <h3>{movie.tenPhim}</h3>
        <button
          onClick={() => {
            // Chuyển hướng người dùng thông qua navigate từ react router
            NAVIGATE(`/about/${movie.maPhim}`);
          }}
          className="inline-block w-full py-2 px-5 bg-black text-white rounded-md"
        >
          Mua vé
        </button>
      </div>
    ));
  }

  return (
    <div className="container">
      <h3>ListMovie</h3>
      <div className="grid grid-cols-4 mt-5 gap-10">{renderLayout()}</div>
    </div>
  );
}
