import { useEffect } from "react";

function StarterLogo() {
    let publicPath = process.env.PUBLIC_URL;
    useEffect(()=>{
        setTimeout(() => {
            let ani = document.querySelector('.animation');
            if(ani)
            ani.classList.remove('active')
        }, 3000);
    },[])
    return (
        <>
         <div className="animation active">
          <div className="opening-animation">
            <img src={publicPath+"/assets/images/logo/cember.png"} alt="" />
            <img className="ani-one" src={publicPath+"/assets/images/logo/cember1.png"} alt="" />
            <img className="ani-two" src={publicPath+"/assets/images/logo/cember2.png"} alt="" />
            <img className="ani-three" src={publicPath+"/assets/images/logo/uc.png"} alt="" />
          </div>
        </div>
        </>
    );
}

export default StarterLogo;