import forwardService from "../services/forwardService.js";

export const handleData = async (req, res) => {
  try {
    const { deviceId, payload } = req.body;
    if (!deviceId || !payload)
      return res.status(400).json({ error: "DeviceId & payload required" });

    const result = await forwardService(deviceId, payload);
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
