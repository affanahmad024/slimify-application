import { getAuth } from "@clerk/react-router/ssr.server";
import React, { useState } from "react";
import type { Route } from "./+types/sticky-notes";
import { Form, redirect, useLoaderData } from "react-router";
import Notes from "models/notes.model";
import { Pencil, Trash } from "lucide-react";
import BottomNav from "~/components/bottomNav";
import Header from "~/components/Header";

export async function loader(args: Route.LoaderArgs) {
  const { userId } = await getAuth(args);
  console.log("userId", userId);

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return redirect("/unauthorized");
  }

  const notes = await Notes.find({ userId }).sort({ updatedAt: -1 });

  return Response.json({
    userId,
    notes,
  });
}

export const action = async ({ request }: Route.ClientActionArgs) => {
  if (request.method == "POST") {
    const fd = await request.formData();
    const msg = fd.get("msg");
    const userId = fd.get("userId");

    const notes = new Notes({
      userId: userId,
      msg: msg,
    });
    await notes.save();
    return Response.json({ message: "data saved" });
  }

  if (request.method == "DELETE") {
    console.log("inside delete");
    const fd = await request.formData();
    const notesId = fd.get("notesId");
    console.log(notesId);
    await Notes.findByIdAndDelete(notesId);
    return Response.json({ message: "deleted" });
  }
  return null;
};

const StickyNotes = () => {
  const { userId, notes } = useLoaderData();
  return (
    <>
      <Header user={true} />
      <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Your Notes
          </h2>

          {/* Note Entry Form */}
          <Form method="post" reloadDocument className="mb-8">
            <input type="hidden" name="userId" id="userId" value={userId} />
            <div className="mb-4">
              <label
                htmlFor="msg"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Write your note:
              </label>
              <textarea
                id="msg"
                name="msg"
                rows={3}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm resize-y"
                placeholder="E.g., Remember to drink 2 liters of water today."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-200"
            >
              Add Note
            </button>
          </Form>

          {/* Notes List */}
          {notes && notes.length > 0 ? (
            <div className="space-y-4">
              {notes.map((note: any) => (
                <div
                  key={note._id}
                  className="bg-white border border-gray-200 rounded-md p-4 shadow-sm flex flex-col sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="flex-grow mr-4 mb-2 sm:mb-0">
                    <p className="text-gray-800 text-base break-words">
                      {note.msg}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                      Added: {new Date(note.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <Form method="delete">
                    <input type="hidden" name="notesId" value={note._id} />
                    <button
                      type="submit"
                      aria-label="Delete note"
                      className="p-2 rounded-full text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200"
                    >
                      <Trash className="h-5 w-5" />
                    </button>
                  </Form>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 italic">
              No notes added yet. Start writing!
            </p>
          )}
        </div>
      </div>
      <BottomNav user={true} />
    </>
  );
};

export default StickyNotes;
