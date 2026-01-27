import { redirect } from 'next/navigation'
import React from 'react'

export default function userDashboard() {
  return redirect('/user-dashboard/create-post')
}
