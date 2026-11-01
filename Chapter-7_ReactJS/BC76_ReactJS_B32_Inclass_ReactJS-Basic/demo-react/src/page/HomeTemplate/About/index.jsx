import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { http } from "../../../service/config";
import ListMovie from "../ListMovie";

export default function About() {
  const param = useParams();
  console.log(param);

  const [MOVIE, SET_MOVIE] = useState({});

  useEffect(() => {
    http
      .get(`/QuanLyPhim/LayThongTinPhim?MaPhim=${param.id}`)
      .then((res) => {
        console.log(res);
        SET_MOVIE(res.data.content);
        // console.log(MOVIE);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.id]);
  // Trạng thái didUpdate
  // useEffect chỉ chạy 1 lần khi trang web được tạo
  // nên khi muốn chạy useEffect để re render giao diện ta cần truyền dữ liệu vào mảng deps khi dữ liệu trong mảng thay đổi sẽ chạy lại useEffect
  return (
    <div>
      <div className="container my-10">
        <div className="grid grid-cols-12 gap-10">
          <div className=" col-span-8">
            <img className="w-full object-cover" src={MOVIE.hinhAnh} alt="" />
          </div>
          <div className="col-span-4">
            <h3>{MOVIE.tenPhim}</h3>
            <p>{MOVIE.moTa}</p>
            <p>{MOVIE.danhGia}/10</p>
            <p>{MOVIE.hot ? "Đang hot" : ""}</p>
            <p>{MOVIE.sapChieu ? "Đang chiếu" : "Sắp chiếu"}</p>
          </div>
        </div>
      </div>

      <ListMovie started={0} ended={4} />
    </div>
  );
}
