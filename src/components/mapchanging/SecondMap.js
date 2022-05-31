import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { API_ENDPOINT } from "../../common/Constants";

import _ from "lodash";
let publicPath = process.env.PUBLIC_URL;

/*
const apidatass = [
  {
    "id": "1",
    "img": publicPath + "/assets/images/home/01.jpg",
    "title": "Yamanevler",
    "category": "Avrupa_konutlari",
    "slug": "yamanevler",
    "subtitle": "The ideal family-friendly residence"
  },
  {
    "id": "2",
    "img": publicPath + "/assets/images/home/02.jpg",
    "title": "Skyland",
    "category": "Skyland",
    "slug": "skyland",
    "subtitle": "Lorem ipsum dolor sit amet"
  },
  {
    "id": "3",
    "img": publicPath + "/assets/images/home/04.jpg",
    "title": "Alya 4 Mevsim",
    "slug": "alya4mevsim",
    "category": "_4mevsim",
    "subtitle": "Affordable luxury at its finest"
  },
  {
    "id": "4",
    "img": publicPath + "/assets/images/home/01.jpg",
    "title": "Acar Blu",
    "slug": "acar-blu",
    "category": "Acarblu",
    "subtitle": "A life of prestige with unlimited privileges "
  },
  {
    "id": "5",
    "img": publicPath + "/assets/images/home/02.jpg",
    "title": "Nisantasi",
    "slug": "nisantasi",
    "category": "nisantasi",
    "subtitle": "The icon of luxurious living"
  }
];

*/


export default function SecondMap(props) {
  const [filterData, setFilterData] = useState(null);

  const [projectsLoading, setProjectsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  async function fetchProject() {
    setProjectsLoading(true);
    try {
      const res = await axios.get(API_ENDPOINT + "projects/list");
      if (res.data) {
        console.log("resdata",res.data);
        setProjectsLoading(false);
        let projects = res.data.data.projects;
        let projectGrouped = _.chain(projects).groupBy('slug').map((value, key) => ({ slug: key, title: value[0].title, project_status : value[0].project_status, small_description: value[0].small_description, banner: value[0].banners.length ? value[0].banners[0].media_s3_base_path + value[0].banners[0].local_path : publicPath + `/assets/images/home/01.jpg` })).groupBy('slug').value();
        console.log("projectGrouped", projectGrouped);
        setProjects(projectGrouped);
      }
    } catch (error) {
      console.error("error ", error);
      setProjectsLoading(false);
    }
  }
  const mobileCheck = () => {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|ipad|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  const svgLoad = () => {
    const objTag = document.querySelector('object');
    console.log("objTag", objTag);
    // wait for SVG to load
    //setTimeout(()=>{
    objTag.addEventListener('load', () => {

      // reference to SVG document
      const svg = objTag.getSVGDocument();
      //console.log("svg", svg);

      // make changes
      Array.from(svg.getElementsByClassName('location')).forEach(p => {
        if (p.getAttribute('id').toLowerCase() !== 'map') {
          p.setAttribute('cursor', 'pointer')
        }

        // console.log("path", p.getAttribute('id'), p);
        // let svg = p.querySelector('id');
        if(mobileCheck())
        p.addEventListener('touchstart', handlePlaceClick)
        else
        p.addEventListener('mouseover', handlePlaceClick)
      });      

    });
    // },2000)
  }

  const handlePlaceClick = (ev) => {
    let t = ev.target;
    let currentId = t.getAttribute('id');
    let currentIdTitle = t.getAttribute('data-name');
    //console.log("projects" ,currentId,currentIdTitle, ev);
    console.log('@@@ Current Id Second Map =========', currentId);

    if (currentId.toLowerCase() === 'map')
      setFilterData(null);
    else
      setFilterData({ slug: currentId, title: currentIdTitle, clientY: ev.clientY, clientX: ev.clientX });
  }

  useEffect(() => {
    fetchProject();
    svgLoad();
  }, [])
  return (
    <div className='mapHome'>
      <object
        data={publicPath + "/assets/images/map/dubai_map.svg"}
        aria-label="block view" />
      {console.log("filterData ", filterData)}
      {filterData && !projects[filterData.slug][0].project_status ?
      <Link to={`/projects/${projects[filterData.slug][0].slug}`} className={projects[filterData.slug][0].project_status}>
          <div className="col-md-2 projectDetailBox"  style={mobileCheck()? { top:100 , left:100 } :{    top: filterData.clientY, left: filterData.clientX }}>
            <img alt="" className='img-fluid' src={`${projects[filterData.slug][0].banner}`} />
            <h2>{projects[filterData.slug][0].title} {projects[filterData.slug][0].project_status ? <span className="text-uppercase text-danger fs-6">( {projects[filterData.slug][0].project_status} )</span> : ''}</h2>
            <p>{projects[filterData.slug][0].small_description}</p>
          </div>
      </Link>
        :
        ''
      }
    </div>
  );
}

// export function isSVGReady(doc) {
//     let nodes = doc.querySelectorAll("path");
//     return nodes && nodes.length > 0;
//   }