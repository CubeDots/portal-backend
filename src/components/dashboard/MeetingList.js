import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { API_ENDPOINT } from "../../common/Constants";
import { useAuthHeader } from 'react-auth-kit';
import axios from 'axios';



function MeetingList() {

  const authHeader = useAuthHeader();
  const [meetingLoader, setMeetingsLoader] = useState(false);
  const [meetings, setMeetings] = useState([]);
  const [page, setPage] = useState(1);
  const countPerPage = 3;
  useEffect(() => {
    MeetingList();
  }, [page]);
  async function fetchInvitationData() {
    setMeetingsLoader(true);
    let postData = {
      test: null,
      start_date: '2022-02-01T00:00:00.000Z',
      end_date: '2022-02-28T00:00:00.000Z'
    };

    try {
      const res = await axios.post(API_ENDPOINT + "orgzit/meeting", postData, { headers: { Authorization: authHeader() } });
      setMeetingsLoader(false);
      setMeetings(res.data.data);
    } catch (error) {
      // console.error("error ", error);
      setMeetingsLoader(false);
    }

  }

  const columns = React.useMemo(() => [
        { name: "id", selector: "id", sortable: true },
        { name: "createdDate", selector: "createdDate", sortable: true },
        { name: "createdTime", selector: "createdTime", sortable: true },
        { name: "MeetingWithCustomer", selector: "MeetingWithCustomer", sortable: true },
        { name: "MeetingLocation", selector: "MeetingLocation", sortable: true },
        { name: "MeetingType", selector: "MeetingType", sortable: true },
        { name: "MeetingTitle", selector: "MeetingTitle", sortable: true }
    
  ], []);

  // console.log("meetings =>  ",countPerPage, meetings.length,meetings);

  const data = React.useMemo(() => meetings, []);
  return <DataTable
        title="Meetings"
        columns={columns}
        data=''
        highlightOnHover
        pagination
        paginationServer
        paginationTotalRows={meetings.length}
        paginationPerPage={countPerPage}
        paginationComponentOptions={{
          noRowsPerPage: true
        }}
        onChangePage={page => setPage(1)}
      />;
}

export default MeetingList;