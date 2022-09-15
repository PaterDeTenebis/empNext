import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
//import { gql } from '@apollo/client';
//import { useMutation, useApolloClient } from '@apollo/client';
//import { getErrorMessage } from '../lib/form';
import Field from '../components/user/Auth';

// const SignInMutation = gql`
//   mutation SignInMutation($login: String!, $password: String!) {
//     signIn(input: { login: $login, password: $password }) {
//       user {
//         id
//         login
//       }
//     }
//   }
// `;

function SignIn() {
//   const client = useApolloClient();
//   const [signIn] = useMutation(SignInMutation);
//   const [errorMsg, setErrorMsg] = useState();
//   const router = useRouter();

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const loginElement = event.currentTarget.elements.login;
//     const passwordElement = event.currentTarget.elements.password;

//     try {
//       await client.resetStore();
//       const { data } = await signIn({
//         variables: {
//           login: loginElement.value,
//           password: passwordElement.value,
//         },
//       });
//       // console.log(data);
//       if (data.signIn.user) {
//         await router.push('/');
//       }
//     } catch (error) {
//       setErrorMsg(getErrorMessage(error));
//     }
//   }

  return (
    <>
      <div className="landing_signIn">
        <div className="landing_pageHeader">
          <h1 className="landing_textXl">Sign In</h1>
        </div>

        <div className="landing_signIn_form">
          <form className='landing_signIn_formItem'>
           
            <Field name="login" type="text" autoComplete="login" required label="Login" />
            <Field
              name="password"
              type="password"
              autoComplete="password"
              required
              label="Password"
            />
            <button type="submit" className='landing_btnDark2'>Sign in</button> or{' '}
            <Link href="signup" >
              <a className='landing_textDark'>Sign up</a>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
