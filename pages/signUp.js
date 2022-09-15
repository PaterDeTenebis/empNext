import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
// import { gql } from '@apollo/client';
// import { useMutation, useApolloClient } from '@apollo/client';
// import { getErrorMessage } from '../lib/form';
import Field from '../components/user/Auth';

// const SignUpMutation = gql`
//   mutation SignUpMutation(
//     $login: String!
//     $email: String!
//     $ref: String!
//     $password: String!
//     $repassword: String!
//   ) {
//     signUp(
//       input: {
//         login: $login
//         email: $email
//         ref: $ref
//         password: $password
//         repassword: $repassword
//       }
//     ) {
//       user {
//         id
//         login
//         email
//         ref
//       }
//     }
//   }
// `;

function SignUp() {
//   const client = useApolloClient();
//   const [signUp] = useMutation(SignUpMutation);
//   const [errorMsg, setErrorMsg] = useState();
//   const router = useRouter();

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const loginElement = event.currentTarget.elements.login;
//     const emailElement = event.currentTarget.elements.email;
//     const refElement = event.currentTarget.elements.ref;
//     const passwordElement = event.currentTarget.elements.password;
//     const repasswordElement = event.currentTarget.elements.repassword;

//     try {
//       await client.resetStore();
//       const { data } = await signUp({
//         variables: {
//           login: loginElement.value,
//           email: emailElement.value,
//           ref: refElement.value,
//           password: passwordElement.value,
//           repassword: repasswordElement.value,
//         },
//       });
//       //console.log(data);
//       if (data.signUp.user) {
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
          <h1 className="landing_textXl">Sign Up</h1>
        </div>

        <div className="landing_signIn_form">
          <form className="landing_signIn_formItem">
            <Field name="login" type="text" autoComplete="login" required label="Login" />
            <Field name="email" type="email" required label="Email" />
            <Field name="ref" type="text" required label="Sponsor" />
            <Field
              name="password"
              type="password"
              autoComplete="password"
              required
              label="Password"
            />
            <Field name="repassword" type="password" required label="Repeat Password" />
            <button type="submit" className="landing_btnDark2">
              Sign Up
            </button>{' '}
            or{' '}
            <Link href="signup">
              <a className="landing_textDark">Sign in</a>
            </Link>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default SignUp;
