import React, { useEffect, useState } from "react";
import axios from "axios";
const QueueDetails = ({ user, queue }) => {
  const [qno, setQno] = useState(0);
  const [rt, setRt] = useState("-");
  const [et, setEt] = useState(10);
  useEffect(() => {
    for (var i = 0; i < queue.line.length; i++) {
      setQno(i + 1);
      setEt(queue.time * (i + 1)/queue.n);
      if (queue.line[i].user._id === user._id) {
        break;
      }
    }
    // axios.post("/api/user/directions",{user_id:user._id,center_id:user.center_id}).then(res=>{
    //   console.log(res.data)
    //   setRt(res.data);
    // })
    // let dt = new Date();
    // console.log(qno);
    // axios
    //   .get(
    //     `http://doofenshmirtz-evil-inc.herokuapp.com/predict/?pos=${qno}&avg=${
    //       queue.limit
    //     }&day=${dt.getDay()}`
    //   )
    //   .then((res) => {
    //     console.log(res.data.MESSAGE);
    //   });
  }, [queue]);
  return (
    <div className="mt-4 queuedetailsconatiner">
      <div className="d-flex justify-content-between row">
        <div className="rectanglebackground2 flex-fill p-2 col-example ">
          <div className="flexdirection" style={{ alignItems: "center" }}>
            <div className="fontstyle1small textcenter p-2 col-example ">
              Estimated Time
            </div>
            <div className="fontstyle1small textcenter p-2 col-example ">
              {et} mins
            </div>
          </div>
        </div>
        <div className="rectanglebackground2 flex-fill p-2 col-example ">
          <div className="flexdirection" style={{ alignItems: "center" }}>
            <div className="fontstyle1small textcenter p-2 col-example ">
              Reaching Time
            </div>
            <div className="fontstyle1small textcenter p-2 col-example ">
              {rt} mins
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QueueDetails;
