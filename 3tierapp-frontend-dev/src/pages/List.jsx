import { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import * as SS from "../style/Styled.js";

const columns = [
  {
    title: "S.No.",
    dataIndex: "sno",
    key: "sno",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Mobile Number",
    dataIndex: "mobileNumber",
    key: "mobileNumber",
  },
];


const List = () => {
  const [Apidata, setApiData] = useState();

  const getData = async () => {
    try {
      const resp = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/admin/get_data`
      );
      setApiData(resp?.data?.data);
      console.log(resp.data.data, "data");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const TableData = Apidata?.map((Ele, i) => {
    return {
      key: Ele._id,
      sno: i + 1,
      name: Ele?.firstName,
      mobileNumber: Ele?.mobileNumber,
    };
  });

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div
          style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "500" }}
        >
          List
        </div>
        <Table columns={columns} dataSource={TableData ? TableData : []} />
      </div>
    </>
  );
};
export default List;
