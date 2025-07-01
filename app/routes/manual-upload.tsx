import { getAuth } from "@clerk/react-router/ssr.server";
import Weight from "models/weight.model";
import React from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useLoaderData,
} from "react-router";
import type { Route } from "./+types/manual-upload";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Button } from "~/components/ui/button";
import { Calendar } from "~/components/ui/calendar";
import { ChevronDownIcon } from "lucide-react";
import { Input } from "~/components/ui/input";
import { format } from "date-fns";
import Header from "~/components/Header";

export async function loader(args: Route.LoaderArgs) {
  // Use `getAuth()` to get the user's ID
  const { userId } = await getAuth(args);
  console.log("userId", userId);

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return redirect("/unauthorized");
  }
  return Response.json({
    userId,
  });
}

export const action = async ({ request }: Route.ClientActionArgs) => {
  if (request.method == "POST") {
    const fd = await request.formData();
    const userId = fd.get("userId");
    const selectedDate = fd.get("selectedDate");
    const weightTime = fd.get("time-picker");
    if (!selectedDate) {
      return Response.json({ message: "Please Select date" });
    }
    const time = selectedDate + "T" + weightTime;
    const weightInput = fd.get("weightInput");

    const weight = new Weight({
      userId: userId,
      weight: weightInput,
      time: time,
    });
    console.log(weight)

    await weight.save();
    console.log("data saved");
    return redirect(`/weight-dashboard`);
  }

  return null;
};

const ManualUpload = () => {
  const { userId } = useLoaderData();
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>();
  const data = useActionData();
  return (
    <>
      <Header user={true} />
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Track Your Weight
          </h1>

          {/* Manual upload section */}
          <div id="manualInputForm" className="space-y-6">
            <h2 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
              <i className="fas fa-calendar-alt text-red-500 mr-3"></i> Manual
              Entry
            </h2>
            {/* {data?.message} */}
            <p className="text-sm text-gray-600 mb-4">
              Select a date and enter your weight for that day.
            </p>

            <Form method="post" reloadDocument>
              <input type="hidden" name="userId" id="userId" value={userId} />
              {data?.message && (
                <p className="bg-red-100 border border-red-400 text-red-700 p-3 sm:p-4 rounded-lg text-sm text-center font-medium mb-5">
                  {data?.message}
                </p>
              )}
              {date && (
                <input
                  type="hidden"
                  name="selectedDate"
                  value={format(date, "yyyy-MM-dd")} // Format date to YYYY-MM-DD
                />
              )}
              <div className="mb-4">
                <div className="flex gap-6">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="date-picker" className="px-1">
                      Date
                    </Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          // name="date-picker"
                          id="date-picker-display"
                          className="cursor-pointer justify-between font-normal"
                        >
                          {/* {date ? date.toLocaleDateString() : "Select date"} */}
                          {date ? format(date, "PPP") : "Select date"}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto overflow-hidden p-0"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={date}
                          captionLayout="dropdown"
                          onSelect={(selectedDate) => {
                            setDate(selectedDate);
                            setOpen(false);
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="time-picker" className="px-1">
                      Time
                    </Label>
                    <Input
                      type="time"
                      name="time-picker"
                      id="time-picker"
                      step="1"
                      defaultValue="08:30:00"
                      className="cursor-pointer bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="weightInput"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Enter Weight (kg):
                </label>
                <div className="relative mt-1 rounded-lg shadow-sm">
                  <input
                    type="number"
                    id="weightInput"
                    name="weightInput"
                    placeholder="e.g., 75.5"
                    step=".01"
                    required
                    className="cursor-pointer block w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-gray-800 pr-12"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500 sm:text-sm" id="weight-unit">
                      kg
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out text-lg font-medium shadow-md mb-4"
              >
                <i className="fas fa-save mr-2"></i> Save Weight
              </button>
            </Form>

            <Link to={`/upload`}>
              <button
                type="button"
                className="cursor-pointer w-full flex items-center justify-center py-2 px-4 rounded-lg text-gray-600 hover:bg-gray-100 transition duration-150 ease-in-out text-sm"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to Selection
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManualUpload;
