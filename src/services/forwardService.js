import axios from "axios";

export default async function forwardService(deviceId, payload) {
  const url = process.env.FORWARD_URL;
  const body = { deviceId, payload, receivedAt: new Date() };

  const response = await axios.post(url, body);
  return response.data;
}
