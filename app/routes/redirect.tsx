import { redirect } from 'react-router'
import { getAuth } from '@clerk/react-router/ssr.server'
import { createClerkClient } from '@clerk/react-router/api.server'
import type { Route } from './+types/redirect'

export async function loader(args: Route.LoaderArgs) {
  // Use `getAuth()` to get the user's ID
  const { userId } = await getAuth(args)
  console.log("userId",userId)

  // Protect the route by checking if the user is signed in
  if (!userId) {
    return redirect('/')
  } 
  return redirect('/weight-dashboard')
}

export default function Profile({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>Profile Data</h1>
      <pre>
        <code>{JSON.stringify(loaderData, null, 2)}</code>
      </pre>
    </div>
  )
}