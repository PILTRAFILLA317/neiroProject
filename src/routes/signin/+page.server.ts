// src/routes/+page.server.ts
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ url, locals: { safeGetSession } }) => {
  const { session } = await safeGetSession()

  // if the user is already logged in return them to the account page
  if (session) {
    redirect(303, '/account')
  }

  return { url: url.origin }
}

export const actions: Actions = {
  signin: async ({ request, locals: { supabase } }) => {
    const formData = await request.formData()
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    // if (error) {
    //   console.error(error)
    //   redirect(303, '/auth/error')
    // } else {
    //   redirect(303, '/')
    // }
    if (error) {
      console.error(error)
      return fail(400, {
        success: false,
        email,
        message: `There was an issue, Please contact support.`,
      })
    }

    redirect(303, '/account')
  },
}