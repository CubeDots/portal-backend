import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthHeader } from 'react-auth-kit';
import { API_ENDPOINT } from "../../common/Constants";
import DataTable from 'react-data-table-component';


function InvitationsDashPage() {

  const authHeader = useAuthHeader();
  // const [invitationsLoader, setInvitationsLoader] = useState(false);
  // const [invitations, setInvitations] = useState([]);
  // const [pageno, setPage] = useState(1);
  // const countPerPage = 3;

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);


  useEffect(() => {
    //fetchInvitationData();
    fetchUsers(1);
  }, []);

  let postData = {
    test: null,
    start_date: '2022-02-01T00:00:00.000Z',
    end_date: '2022-02-28T00:00:00.000Z'
  };
  // async function fetchInvitationData() {
  //   setInvitationsLoader(true);


  //   try {
  //     const res = await axios.post(API_ENDPOINT + "orgzit/payplans", postData, { headers: { Authorization: authHeader() } });
  //     setInvitationsLoader(false);
  //     setInvitations(res.data.data);

  //   } catch (error) {
  //     console.error("error ", error);
  //     setInvitationsLoader(false);
  //   }5
  const fetchUsers = async page => {
    setLoading(true);

    const response = await axios.post(`${API_ENDPOINT}orgzit/payplans?page=${page}&per_page=${perPage}&delay=1`, postData, { headers: { Authorization: authHeader() } });

    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  const handlePageChange = page => {
    fetchUsers(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    setLoading(true);
    const response = await axios.post(`${API_ENDPOINT}orgzit/payplans?page=${page}&per_page=${newPerPage}&delay=1`, postData, { headers: { Authorization: authHeader() } });
    setData(response.data.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  const columns = [
    { name: "ID", sortable: true, selector: row => row.id },
    { name: "SalesPerson", sortable: true, selector: row => row.SalesPerson },
    { name: "ProjectName", sortable: true, selector: row => row.ProjectName },
    { name: "PaymentType", sortable: true, selector: row => row.PaymentType },
    { name: "PaymentStatus", sortable: true, selector: row => row.PaymentStatus },
    { name: "PaymentCurrency", sortable: true, selector: row => row.PaymentCurrency },
    { name: "ExpectedPaymentDate", sortable: true, selector: row => row.ExpectedPaymentDate },
    { name: "ExpectedPaymentAmount", sortable: true, selector: row => row.ExpectedPaymentAmount },
  ];

  return (
    <>
      {/* <div>
        <div className="col mobileInputSection">
          <label className="form-label">Mobile</label>
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">Search</span>
            <input type="text" className="form-control " placeholder="Search" name="search" defaultValue={searchTerm} onChange={(e) => setSearchTerm(  e.target.value)} />
          </div>
        </div>
      </div> */}
      <DataTable
        title="Appointments"
        columns={columns}
        data={data.filter((item) => {
          if (searchTerm === "") {
            return item;
          } else if (
            item.id && item.id.includes(searchTerm)
          ) {
            return item;
          } else {
            return item;
          }
        })}
        progressPending={loading}
        pagination
        paginationServer
        paginationTotalRows={totalRows}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
        paginationPerPage={10}
        paginationComponentOptions={{
          noRowsPerPage: true
        }}
      />


    </>
  );
}

export default InvitationsDashPage;