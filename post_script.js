import http from "k6/http";
import { check, fail } from "k6";

export let options = {
  maxRedirects: 10,
  vus: 100,
  duration: "30s"
};

const baseURL = "http://localhost:3001";

export default function() {
  let formdata = JSON.stringify({
    caption: "testing testing testing",
    photo_url: "http://lorempixel.com/640/480/city"
  });
  let headers = { "Content-Type": "application/json" };
  let res = http.post(baseURL + "/9999999", formdata, { headers: headers });
  check(res, {
    "upload succeeded": (res) => res.url == `${baseURL}/9999999`,
  }) || fail("upload failed");
}