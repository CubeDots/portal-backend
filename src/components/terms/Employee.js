import React, { useEffect } from 'react';

function Employee() {
    let publicPath = process.env.PUBLIC_URL;
    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
    }, []);


    return (
        <>
            <h5 className='vegonHeading'>Employee Candidate Clarification Text</h5>
            <p>This elucidating is made in accordance with the article 10 of “the Law on Protection of Personal Data” (LPPD in short) No. 6698 and due to statutory obligation and GDPR “General Data Protection Regulation”</p>
            <p>In LLPD and GDPR, all kinds of information related to an identified or identifiable natural person are defined as personal data, and our firm provides that your personal data are obtained, stored, secured in accordance with the law, in full or partly automatic way or non-automatic means provided that it is a part of any data recording system. All kinds of personal data processing activities such as preserving, changing, reorganizing, disclosing, transferring, taking over, making available, classifying or preventing the use of data are possible for the purpose of protecting fundamental rights and freedoms, especially the privacy of private life is carried out by taking the highest level of security measures.</p>
            <p>Our aim is to inform you about the method of collecting your personal data, the purposes of processing, legal reasons, to whom and for what purposes your processed personal data can be transferred, and your rights.</p>
        </>
    )
}
export default Employee;