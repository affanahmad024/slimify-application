import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("upload", "routes/upload.tsx"),
  route("manual-upload", "routes/manual-upload.tsx"),
  route("camera-upload", "routes/camera-upload.tsx"),
  route("weight-dashboard", "routes/weight-dashboard.tsx"),
  route("bmi-calculator", "routes/bmi.tsx"),
  route("unauthorized","routes/unauthorized.tsx"),
  route("sticky-notes", "routes/sticky-notes.tsx")
] satisfies RouteConfig;
