import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { auth } from "../../state";
import api from "../../api";
import { CategoryWrapper, Paginator, Seg } from "./styles";

export default function Index() {
  const [header, setHeader] = useRecoilState(auth);
  const [selected, setSelected] = useState("recentProjects");
  const [data, setData] = useState([]);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 5,
  });
  const [count, setCount] = useState(0);
  const [totalPage, setTotalPage] = useState();

  const selectionOption = [
    { title: "Recent projects", value: "recentProjects" },
    { title: "Orderby category name ASC", value: "orderByCategoryNameAsc" },
    { title: "Orderby username ASC", value: "orderByUsernameAsc" },
    { title: "Orderby project title ASC", value: "orderByProjectTitleAsc" },
  ];
  const fetching = async () => {
    try {
      const response = await axios.post(`${api.CATEGORY}/${selected}`, pagination, header);
      if (response.status < 203) {
        setData(response.data.response);
        setCount(response.data.response[0].TotalCount);
        setTotalPage(Math.floor(response.data.response[0].TotalCount / pagination.limit) + (response.data.response[0].TotalCount % pagination.limit ? 1 : 0));
      }
    } catch (error) {
      if (error.response.status === 500 && selected === "orderByCategoryNameAsc") {
        alert("Database does not have categories table ");
      } else alert("SOMETHING WENT WRONG PLEASE CHECK CONNECTION");
      setData([]);
      setCount(0);
      setTotalPage(0);
    }
  };
  useEffect(() => {
    fetching();
  }, [selected]);

  useEffect(() => {
    fetching();
  }, [pagination.page]);
  return (
    <CategoryWrapper>
      <div className="select-wrap">
        <select
          value={selected}
          name=""
          id=""
          onChange={(e) => {
            setSelected(e.target.value);
            setPagination({
              page: 1,
              limit: 5,
            });
            setData([]);
            setCount(0);
            setTotalPage(0);
          }}
        >
          {selectionOption.map((each) => (
            <option value={each.value}>{each.title}</option>
          ))}
        </select>
      </div>

      <div className="table-wrapper">
        <table>
          <tr>
            {selected === "recentProjects" && <th>Date</th>}
            <th>UserName</th>
            <th>Project Title</th>
            <th>CategoryName</th>
          </tr>
          {data.map((each) => (
            <tr>
              {selected === "recentProjects" && <td>{each?.date ? new Date(each?.date).toDateString() : "-"}</td>}
              <td>{each.username || "-"}</td>
              <td>{each.project_title || "-"}</td>
              <td>{each?.categoryName ?? "-"}</td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <div>total pages: {totalPage}</div>
        <div>total Mach Documents: {count}</div>
      </div>
      <Paginator>
        <Seg
          dim={pagination.page <= 1}
          onClick={() =>
            setPagination((prev) => {
              if (prev.page > 1) {
                return {
                  page: prev.page - 1,
                  limit: prev.limit,
                };
              }
              return prev;
            })
          }
        >
          {"<"}
        </Seg>
        <div className="seg">{pagination.page}</div>
        <Seg
          dim={totalPage <= pagination.page}
          onClick={() => {
            if (totalPage > pagination.page) {
              setPagination((prev) => {
                return { page: prev.page + 1, limit: prev.limit };
              });
            }
          }}
        >
          {">"}
        </Seg>
      </Paginator>
    </CategoryWrapper>
  );
}
