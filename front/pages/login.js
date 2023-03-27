import React from 'react'

export default function login () {
  return (
    <div>
        <h3>Login WIth Google</h3>

    </div>
  )
}


export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: {providers},
    }
  }