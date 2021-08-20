import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  authedUser?: Maybe<User>;
  secretConent: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  revokeRefreshTokensForUser: Scalars['Boolean'];
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  remove: Scalars['Boolean'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRemoveArgs = {
  id: Scalars['Float'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type CreateNewUserMutationVariables = Exact<{
  registerPassword: Scalars['String'];
  registerEmail: Scalars['String'];
}>;


export type CreateNewUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'register'>
);

export type LoginUserMutationVariables = Exact<{
  loginEmail: Scalars['String'];
  loginPassword: Scalars['String'];
}>;


export type LoginUserMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  ) }
);

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type AuthedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthedUserQuery = (
  { __typename?: 'Query' }
  & { authedUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'email' | 'id'>
  )> }
);

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type SecretQueryVariables = Exact<{ [key: string]: never; }>;


export type SecretQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'secretConent'>
);


export const CreateNewUserDocument = gql`
    mutation CreateNewUser($registerPassword: String!, $registerEmail: String!) {
  register(password: $registerPassword, email: $registerEmail)
}
    `;
export type CreateNewUserMutationFn = Apollo.MutationFunction<CreateNewUserMutation, CreateNewUserMutationVariables>;

/**
 * __useCreateNewUserMutation__
 *
 * To run a mutation, you first call `useCreateNewUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewUserMutation, { data, loading, error }] = useCreateNewUserMutation({
 *   variables: {
 *      registerPassword: // value for 'registerPassword'
 *      registerEmail: // value for 'registerEmail'
 *   },
 * });
 */
export function useCreateNewUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateNewUserMutation, CreateNewUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateNewUserMutation, CreateNewUserMutationVariables>(CreateNewUserDocument, options);
      }
export type CreateNewUserMutationHookResult = ReturnType<typeof useCreateNewUserMutation>;
export type CreateNewUserMutationResult = Apollo.MutationResult<CreateNewUserMutation>;
export type CreateNewUserMutationOptions = Apollo.BaseMutationOptions<CreateNewUserMutation, CreateNewUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($loginEmail: String!, $loginPassword: String!) {
  login(email: $loginEmail, password: $loginPassword) {
    accessToken
    user {
      id
      email
    }
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      loginEmail: // value for 'loginEmail'
 *      loginPassword: // value for 'loginPassword'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logout
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const AuthedUserDocument = gql`
    query AuthedUser {
  authedUser {
    email
    id
  }
}
    `;

/**
 * __useAuthedUserQuery__
 *
 * To run a query within a React component, call `useAuthedUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAuthedUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthedUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAuthedUserQuery(baseOptions?: Apollo.QueryHookOptions<AuthedUserQuery, AuthedUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AuthedUserQuery, AuthedUserQueryVariables>(AuthedUserDocument, options);
      }
export function useAuthedUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AuthedUserQuery, AuthedUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AuthedUserQuery, AuthedUserQueryVariables>(AuthedUserDocument, options);
        }
export type AuthedUserQueryHookResult = ReturnType<typeof useAuthedUserQuery>;
export type AuthedUserLazyQueryHookResult = ReturnType<typeof useAuthedUserLazyQuery>;
export type AuthedUserQueryResult = Apollo.QueryResult<AuthedUserQuery, AuthedUserQueryVariables>;
export const ListUsersDocument = gql`
    query ListUsers {
  users {
    id
    email
  }
}
    `;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
      }
export function useListUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersQueryResult = Apollo.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const SecretDocument = gql`
    query Secret {
  secretConent
}
    `;

/**
 * __useSecretQuery__
 *
 * To run a query within a React component, call `useSecretQuery` and pass it any options that fit your needs.
 * When your component renders, `useSecretQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSecretQuery({
 *   variables: {
 *   },
 * });
 */
export function useSecretQuery(baseOptions?: Apollo.QueryHookOptions<SecretQuery, SecretQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SecretQuery, SecretQueryVariables>(SecretDocument, options);
      }
export function useSecretLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SecretQuery, SecretQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SecretQuery, SecretQueryVariables>(SecretDocument, options);
        }
export type SecretQueryHookResult = ReturnType<typeof useSecretQuery>;
export type SecretLazyQueryHookResult = ReturnType<typeof useSecretLazyQuery>;
export type SecretQueryResult = Apollo.QueryResult<SecretQuery, SecretQueryVariables>;