import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("profile", "routes/profile.tsx"),
  route("upload", "routes/upload.tsx"),
  route("manual-upload", "routes/manual-upload.tsx"),
  route("camera-upload", "routes/camera-upload.tsx"),
  route("weight-dashboard", "routes/weight-dashboard.tsx")
] satisfies RouteConfig;
