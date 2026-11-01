import axios from "axios";

export const http = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  timeout: 30000,
  headers: {
    TokenCyberSoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NiIsIkhldEhhblN0cmluZyI6IjI1LzA0LzIxMDAiLCJIZXRIYW5UaW1lIjoiMTc0NTUzOTIwMDAwMCIsIm5iZiI6MTcxNzA4ODQwMCwiZXhwIjoxNzQ1Njg2ODAwfQ.GBNQidF_sLrkDCyDD89x_hOCyqhFtMLd4WPHMJ6zb7c",
  },
});
