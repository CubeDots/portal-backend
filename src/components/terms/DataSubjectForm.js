import React from 'react';

function DataSubjectForm() {
    let publicPath = process.env.PUBLIC_URL;

    return (
        <>
            <div>
                <h3 className="vegonHeading">Data Subject Application Form :</h3>
                <div>
                    <h5>You may transmit this form to us, Cuengine:</h5>
                    <ul>
                        <li> By sending it with your wet signature and copy of identity card to the address: Viko Giz Plaza Ayazağa, Maslak Meydan Sk. No:3, 34396 Şişli/İstanbul, or</li>
                        <li>By signing it with secure electronic signature or mobile signature and sending to e-mail address info@cuengine.com, or,</li>
                        <li>By applying in person to Cuengine with a valid identity document.</li>
                    </ul>
                </div>
                <a className="dataSubjectDownloadBtn btntheme" href={publicPath + "/assets/data/DATA-SUBJECT-APPLICATION-FORM.docx"} download >

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>

                    Download Form</a>
            </div>
        </>
    )
}
export default DataSubjectForm;