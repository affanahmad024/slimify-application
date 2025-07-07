import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { SignedOut, SignInButton } from "@clerk/react-router";
import { getAuth } from "@clerk/react-router/ssr.server";
import { Link, redirect, useLoaderData } from "react-router";
import Header from "~/components/Header";
import HomeForLoggedInUser from "~/components/HomeForLoggedInUser";
import HomeForLoggedOutUser from "~/components/HomeForLoggedOutUser";
import { NotebookPen, Pencil, Plus, Weight, X } from "lucide-react";
import { useState } from "react";
import BottomNav from "~/components/BottomNav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Slimify - Your Personal Weight Tracker" },
    {
      name: "Slimify - Your Personal Weight Tracker",
      content: "Slimify - Your Personal Weight Tracker",
    },
  ];
}

export async function loader(args: Route.LoaderArgs) {
  // Use `getAuth()` to get the user's ID
  const { userId } = await getAuth(args);
  console.log("userId", userId);

  let user = false;
  if (userId) {
    user = true;
  }

  // Protect the route by checking if the user is signed in

  return Response.json({
    userId,
    user: user,
  });
}

export default function Home() {
  const { userId, user } = useLoaderData();
  return (
    <>
      <Header user={user} />
      {userId ? (
        <HomeForLoggedInUser />
      ) : (
        <HomeForLoggedOutUser userId={userId} />
      )}
      <BottomNav user={user}/>
    </>
  );
}
