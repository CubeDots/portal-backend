import React, { useEffect } from 'react';

function Information() {
    let publicPath = process.env.PUBLIC_URL;
    useEffect(() => {
        // window.scrollTo({ top:0,left:0,behavior:'smooth'});
    }, []);

    return (
        <>
            <h5  className="vegonHeading">Information Security Policy Of Cuengine</h5>
            <p>As CuEngine, our goal is to ensure the security of information used to carry out the activities of the firm in all forms, locations, and processes by considering the principles of confidentiality, integrity, and availability.</p>
            <h6>To reach that goal, we guarantee the following:</h6>
            <ul>
                <li>To implement and go beyond the conditions stipulated by laws, standards, and procedures regarding the issues of information security,</li>
                <li>To manage Information Security Management System in accordance relevant security standards.</li>
                <li>To ensure that necessary organizational structure, resource, and infrastructure are formed in order to report information security violations and take action as quickly as possible,</li>
                <li>To ensure that the activities of keeping, transferring, changing, accessing, and processing the information assets are controlled based on the best existing practices to protect our information assets and that the in-process controls are established with the segregation of duties,</li>
                <li>To announce this policy to all our employees and provide the required resources and training to implement it,</li>
                <li>To internally audit the institution to ensure adaptation to Information Security Management System and continuous improvement, and to consider their results in the administrative review meetings,</li>
                <li>To pay attention to the Information Security performance of suppliers and contracting firms and their subcontractors and to collaborate with them regarding issues of Information Security Management System,</li>
                <li>To work constructively with official institutions, people, and related citizens regarding ISMS issues,</li>
                <li>To ensure that necessary sanctions are imposed in case of security breaches.</li>
            </ul>
        </>
    )
}
export default Information;