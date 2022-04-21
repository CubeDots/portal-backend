import { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import Loader from "../Loader";

function HomePageCounters() {
    const publicPath = process.env.PUBLIC_URL;
    const [counters, setCounters] = useState(null);

    async function fetchData() {
        try {
            const res = await axios.get(publicPath + "/assets/data/homePageCounters.json");
            setCounters(res.data);
        } catch (error) {
            console.error("error ", error);
        }
    }

    function countNumber() {
        $('.counter-count').each(function () {
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
            <div className="row justify-content-lg-between justify-content-center">
                <div className="col-lg-2 col-sm-4">
                    <div className="count-up counterHomePage">
                        <p><span>$</span><span className="counter-count">{counters.value_of_sales.numbers}</span><span>M+</span></p>
                        <h3>{counters.value_of_sales.text}</h3>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-4">
                    <div className="count-up counterHomePage">
                        <p><span className=""><>$</>{counters.value_of_online_sales.numbers}</span><span>B</span></p>
                        <h3>{counters.value_of_online_sales.text}</h3>
                    </div>
                </div>

                <div className="col-lg-2 col-sm-4">
                    <div className="count-up counterHomePage">
                        <p><span className="counter-count">{counters.international_agents.numbers}</span><span>+</span></p>
                    <h3>{counters.international_agents.text}</h3>
                </div>
            </div>

            <div className="col-lg-2 col-sm-4">
                <div className="count-up counterHomePage">
                    <p><span className="counter-count">{counters.branches.numbers}</span></p>
                    <h3>{counters.branches.text}</h3>
                </div>
            </div>
            <div className="col-lg-2 col-sm-4">
                <div className="count-up counterHomePage">
                <p><span className="counter-count">{counters.employees.numbers}</span><span>+</span></p>
                    <h3>{counters.employees.text}</h3>
                </div>
            </div>
        </div>
        </>
    )
}
export default HomePageCounters;