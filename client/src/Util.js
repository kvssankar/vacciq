import axios from "axios";

export const findQueuePosition = (user, queue) => {
  for (let i = 0; i < queue.line.length; i++) {
    if (queue.line[i].user._id === user._id) {
      return i + 1;
    }
  }
  return queue.line.length;
};

export const findEstimationTime = (user, queue) => {
  let pos = findQueuePosition(user, queue);
  return (queue.time * pos) / queue.n;
};

export const findReachingTime = async (user) => {
  let time = 0;
  await axios
    .post("/api/user/directions", {
      latitude: localStorage.getItem("latitude"),
      longitude: localStorage.getItem("longitude"),
      center_id: user.center_id,
    })
    .then((res) => {
      time = res.data;
    });
  return time;
};

export const secondsToTime = (sec_num) => {
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};

export const sendNotificationToServer = (notify_id, title, mssg) => {
  axios.post("/api/user/notify", { notify_id, title, mssg }).then((res) => {
    console.log("Notification successfull");
  });
};

export const notifyMe = (user, queue) => {
  let rt = findReachingTime(user, queue) || Number.MIN_SAFE_INTEGER;
  let pos = findQueuePosition(user, queue);
  let est = findEstimationTime(user, queue);

  let notify_id = user.notify_id;
  let title;
  let mssg;

  let timeToReachTen = (queue.time * pos - queue.time * 10) / queue.n;

  if (timeToReachTen <= rt) {
    title = `LineItOut QPos: ${pos} **Alert**`;
    mssg = `Please start NOW to reach the center at your turn\n. Approx Reaching time: ${rt}\n Estimated waiting time: ${est}`;
    sendNotificationToServer(notify_id, title, mssg);
  } else {
    title = `LineItOut QPos: ${pos}`;
    mssg = `Your estimated waiting time is ${est} and your current queue position is ${pos}`;
    sendNotificationToServer(notify_id, title, mssg);
  }
};

export const addLoc = (latitude, longitude) => {
  let token = localStorage.getItem("token");
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (token) config.headers["auth-token"] = token;
  axios
    .post(
      "/api/user/addloc",
      {
        latitude,
        longitude,
      },
      config
    )
    .then((res) => {
      console.log("Successfully updated location");
    });
};
