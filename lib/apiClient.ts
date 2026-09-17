import axios from "axios";
import { toast } from "sonner";

const timeOut = 5000;
const URL_BE = process.env.NEXT_PUBLIC_BE_URL;

const apiClient = axios.create({
  baseURL: URL_BE,
  timeout: timeOut,
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      toast.error("Sesi Anda telah habis, silakan login kembali.");
      window.location.href = "/login";
    } else if (!error.response) {
      toast.error("Gagal terhubung ke server. Cek koneksi internet Anda.");
    }

    return Promise.reject(error);
  },
);

export default apiClient;