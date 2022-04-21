import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import Loader from "../Loader";

function AboutCounterComponent() {
    const publicPath = process.env.PUBLIC_URL;
    const [counters, setCounters] = useState(null);

    async function fetchData() {
        try {
            const res = await axios.get(publicPath + "/assets/data/aboutPageCounters.json");
            setCounters(res.data);
        } catch (error) {
            console.error("error ", error);
        }
    }

    function countNumber() {
        $('.counter-loader').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {

                //chnage count up speed here
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    useEffect(() => {
        fetchData();
        setTimeout(() => {
            countNumber();
        }, 100)
    }, []);

    if (!counters) {
        return <Loader />
    }
    return (
        <>
            <div className="companyGrowth section">
                <div className="container">
                    <div className="companyGrowthCounter">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="CounterCount-up">
                                        <h2 className="counter-count">
                                        <span className="counter-loader">{counters.customer_retention.numbers}</span>
                                        <span>%</span>
                                        </h2>
                                        <h4>{counters.customer_retention.text}</h4>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="CounterCount-up">
                                        <h2  className="counter-count">
                                            <span className="counter-loader">{counters.successful_project.numbers}</span>
                                            <span >+</span>
                                        </h2>
                                        <h4>{counters.successful_project.text}</h4>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="CounterCount-up">
                                        <h2 className="counter-count">
                                         <span className="counter-loader">{counters.full_time_employees.numbers}</span>
                                         <span >+</span>   
                                        </h2>
                                        <h4>Full Time Employees</h4>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="CounterCount-up">
                                        <h2 className="counter-count">ISO</h2>
                                        <h4>Certified</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutCounterComponent;