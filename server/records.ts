import api from "./api";
import { authenticate } from "./auth";

export async function getFileMakerRecords(layoutName: string) {
  const token = await authenticate(
    process.env.FILEMAKER_USERNAME || "",
    process.env.FILEMAKER_PASSWORD || ""
  );

  const response = await api.get(
    `/databases/${process.env.FM_DATABASE_NAME}/layouts/${layoutName}/records`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  console.log("FileMaker Response: " + response.data);
  return response.data.response.data;
}
