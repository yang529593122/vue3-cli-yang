import { postRequest } from "../request";

export const getData = async () =>
  postRequest("http://erpdev.hntxrj.com/api/message/getMessageSummary", {
    categoryType: 1,
    compid: 25,
    opid: "杨鹏飞",
    opId: "杨鹏飞",
    userId: 5476,
    pid: 28,
  });
