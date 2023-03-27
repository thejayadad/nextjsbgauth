
import {getProviders, signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";


export default function login ({providers}) {
  const {data,status} = useSession();
  const router = useRouter();
  if (status === 'loading') {
    return '';
  }
  if (data) {
    router.push('/');
  }

  return (
    <div>
        <h3>Login WIth Google</h3>
        {Object.values(providers).map(provider => (
        <div key={provider.id}>
          <button onClick={async () => {await signIn(provider.id)}} >
            Sign in with {provider.name}
          </button>
        </div>
      ))}

    </div>
  )
}


export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: {providers},
    }
  }