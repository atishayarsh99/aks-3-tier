
import { Table } from 'antd';
import "../App.css"
const columns = [
  {
    title: 'JOB CALL',
    dataIndex: 'jobcall',
    key: 'jobcall',
    // render: (text) => <a>{text}</a>,
  },
  {
    title: 'CLIENT',
    dataIndex: 'client',
    key: 'client',
  },
  {
    title: 'JOB TYPE',
    dataIndex: 'jobtype',
    key: 'jobtype',
  },
  {
    title: 'LOCATION',
    dataIndex: 'location',
    key: 'location',
    width:"300px",
  },
  {
    title: 'QTY',
    dataIndex: 'qty',
    key: 'qty',
  },
  {
    title: 'CRM',
    dataIndex: 'crm',
    key: 'crm',
  },
  {
    title: 'PRODUCTION SUPERVISOR',
    dataIndex: 'psupervisor',
    key: 'psupervisor',
  },
  {
    title: 'Start Date',
    dataIndex: 'sdate',
    key: 'sdate',
    width:"150px",
  },
  {
    title: 'HANDOVER DATE',
    dataIndex: 'enddate',
    key: 'enddate',
  },
  {
    title: 'PRODUCTION DESIGN',
    dataIndex: 'pdesign',
    key: 'pdesign',
  },
  {
    title: 'RAW MATERIAL CHECK',
    dataIndex: 'rmCheck',
    key: 'rmCheck',
  },
  {
    title: 'Fiber',
    dataIndex: 'fiber',
    key: 'fiber',
  },
  {
    title: 'Bending',
    dataIndex: 'bending',
    key: 'bending',
  },
  {
    title: 'CO2',
    dataIndex: 'co2',
    key: 'co2',
  },
  {
    title: 'Printing',
    dataIndex: 'printing',
    key: 'printing',
  },
  {
    title: 'Plotting',
    dataIndex: 'plotting',
    key: 'plotting',
  },
  
];
const data = [
  {
    key: '1',
    jobcall: 1001,
    client:"ZUDIO",
    jobtype:"SIGNAGE",
    location:"RAJORI GARDEN, DELHI",
    qty:"5",
    crm:"ANKIT",
    psupervisor:"SANT KUMAR",
    sdate:"12-AUG",
    enddate:"26-SEP",
    pdesign:"ANKIT",
    rmCheck:"Y",
    fiber:"Y",
    bending:"Y",
    co2:"N",
    printing:"Y",
    plotting:"N",
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
   
];
const App = () => <Table columns={columns} dataSource={data}  className="my-custom-table" />;
export default App;