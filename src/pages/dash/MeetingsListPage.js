import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { API_ENDPOINT } from "../../common/Constants";
import { useAuthHeader } from 'react-auth-kit';
import axios from 'axios';


function MeetingsListPage() {

  const authHeader = useAuthHeader();
  const [meetingLoader, setMeetingsLoader] = useState(false);
  
  const [meetings, setMeetings] = useState([]);
  const [page, setPage] = useState(1);
  const countPerPage = 20;

  useEffect(() => {
    fetchMeetingData();
  }, [page]);

  
  async function fetchMeetingData() {
    setMeetingsLoader(true);
    let postData = {
      test: null,
      start_date: '2022-02-01T00:00:00.000Z',
      end_date: '2022-02-28T00:00:00.000Z'
    };
    try {
      setMeetingsLoader(true);
      const res = await axios.post(API_ENDPOINT + "orgzit/meetinglist", postData, { headers: { Authorization: authHeader() } });
      setMeetingsLoader(false);
      if(res.data.data)
      setMeetings(res.data.data);
      console.log("res meeting", res.data);
    } catch (error) {
      //console.error("error ", error);
      setMeetingsLoader(false);
    }

  }

  const columns = React.useMemo(() => [
        { name: "ID", selector: "id", sortable: true },
        { name: "CreatedDate", selector: "createdDate", sortable: true },
        { name: "CreatedTime", selector: "createdTime", sortable: true },
        { name: "MeetingWithCustomer", selector: "MeetingWithCustomer", sortable: true },
        { name: "MeetingLocation", selector: "MeetingLocation", sortable: true },
        { name: "MeetingType", selector: "MeetingType", sortable: true },
        { name: "MeetingTitle", selector: "MeetingTitle", sortable: true }
    
  ], []);

  //console.log("meetings =>  ",countPerPage, meetings.length,meetings);

  const data = React.useMemo(() => meetings, []);
  return <DataTable
        title="Meetings List"
        columns={columns}
        data={meetings}
        highlightOnHover
        progressPending={meetingLoader}
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

export default MeetingsListPage;