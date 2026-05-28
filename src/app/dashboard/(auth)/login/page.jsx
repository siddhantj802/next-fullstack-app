"use client"
import React from 'react'
import { signIn } from "@/utils/auth-client";

function Login() {
  const handleGoogleSubmit = async () => {
    await signIn.social({ provider: "google", callbackURL: "/" })
  }

  return (
    <button onClick={handleGoogleSubmit}>Sign in with Google</button>
  )
}

export default Login