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
  authedUser?: Maybe<User>;
  backdrop: Scalars['Boolean'];
  displayPostCreator: Scalars['Boolean'];
  instruments: Array<Instrument>;
  musicianPosts: Array<MusicianPost>;
  secretConent: Scalars['String'];
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  posts: Array<MusicianPost>;
  instruments: Array<Instrument>;
};

export type MusicianPost = {
  __typename?: 'MusicianPost';
  id: Scalars['Int'];
  title: Scalars['String'];
  body: Scalars['String'];
  author: User;
  preferredInstruments: Array<Instrument>;
};

export type Instrument = {
  __typename?: 'Instrument';
  id: Scalars['Float'];
  name: Scalars['String'];
  category: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  revokeRefreshTokensForUser: Scalars['Boolean'];
  login: LoginResponse;
  logout: Scalars['Boolean'];
  register: Scalars['Boolean'];
  remove: Scalars['Boolean'];
  updateUsename: User;
  updateEmail: User;
  addInstrument: Scalars['Boolean'];
  updateInstruments: Array<Instrument>;
  createMusicianPost: MusicianPost;
  deletePost: Scalars['Boolean'];
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
  username: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRemoveArgs = {
  id: Scalars['Float'];
};


export type MutationUpdateUsenameArgs = {
  userId: Scalars['Float'];
  newUsername: Scalars['String'];
};


export type MutationUpdateEmailArgs = {
  userId: Scalars['Float'];
  newEmail: Scalars['String'];
};


export type MutationAddInstrumentArgs = {
  userId: Scalars['Float'];
  instrumentId: Scalars['Float'];
};


export type MutationUpdateInstrumentsArgs = {
  userId: Scalars['Float'];
  updatedInstrumentIds: Array<Scalars['Float']>;
};


export type MutationCreateMusicianPostArgs = {
  authorId: Scalars['Float'];
  body: Scalars['String'];
  title: Scalars['String'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['Float'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type DisplayBackdropQueryVariables = Exact<{ [key: string]: never; }>;


export type DisplayBackdropQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'backdrop'>
);

export type DisplayPostCreatorQueryVariables = Exact<{ [key: string]: never; }>;


export type DisplayPostCreatorQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'displayPostCreator'>
);

export type CreateMusicianPostMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
  authorId: Scalars['Float'];
}>;


export type CreateMusicianPostMutation = (
  { __typename?: 'Mutation' }
  & { createMusicianPost: (
    { __typename?: 'MusicianPost' }
    & Pick<MusicianPost, 'id' | 'title' | 'body'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  ) }
);

export type CreateNewUserMutationVariables = Exact<{
  registerPassword: Scalars['String'];
  registerEmail: Scalars['String'];
  registerUsername: Scalars['String'];
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
      & Pick<User, 'id' | 'username' | 'email'>
    ) }
  ) }
);

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type UpdateUserInstrumentsMutationVariables = Exact<{
  updatedInstrumentIds: Array<Scalars['Float']> | Scalars['Float'];
  userId: Scalars['Float'];
}>;


export type UpdateUserInstrumentsMutation = (
  { __typename?: 'Mutation' }
  & { updateInstruments: Array<(
    { __typename?: 'Instrument' }
    & Pick<Instrument, 'id' | 'name'>
  )> }
);

export type UpdateUsernameMutationVariables = Exact<{
  newUsername: Scalars['String'];
  userId: Scalars['Float'];
}>;


export type UpdateUsernameMutation = (
  { __typename?: 'Mutation' }
  & { updateUsename: (
    { __typename?: 'User' }
    & Pick<User, 'username'>
  ) }
);

export type AuthedUserQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthedUserQuery = (
  { __typename?: 'Query' }
  & { authedUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'email' | 'id'>
  )> }
);

export type ListInstrumentsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListInstrumentsQuery = (
  { __typename?: 'Query' }
  & { instruments: Array<(
    { __typename?: 'Instrument' }
    & Pick<Instrument, 'id' | 'name'>
  )> }
);

export type ListMusicianPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListMusicianPostsQuery = (
  { __typename?: 'Query' }
  & { musicianPosts: Array<(
    { __typename?: 'MusicianPost' }
    & Pick<MusicianPost, 'id' | 'title' | 'body'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
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

export type UserProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type UserProfileQuery = (
  { __typename?: 'Query' }
  & { authedUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'email' | 'id'>
    & { instruments: Array<(
      { __typename?: 'Instrument' }
      & Pick<Instrument, 'id' | 'name'>
    )> }
  )> }
);


export const DisplayBackdropDocument = gql`
    query DisplayBackdrop {
  backdrop @client
}
    `;

/**
 * __useDisplayBackdropQuery__
 *
 * To run a query within a React component, call `useDisplayBackdropQuery` and pass it any options that fit your needs.
 * When your component renders, `useDisplayBackdropQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDisplayBackdropQuery({
 *   variables: {
 *   },
 * });
 */
export function useDisplayBackdropQuery(baseOptions?: Apollo.QueryHookOptions<DisplayBackdropQuery, DisplayBackdropQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DisplayBackdropQuery, DisplayBackdropQueryVariables>(DisplayBackdropDocument, options);
      }
export function useDisplayBackdropLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DisplayBackdropQuery, DisplayBackdropQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DisplayBackdropQuery, DisplayBackdropQueryVariables>(DisplayBackdropDocument, options);
        }
export type DisplayBackdropQueryHookResult = ReturnType<typeof useDisplayBackdropQuery>;
export type DisplayBackdropLazyQueryHookResult = ReturnType<typeof useDisplayBackdropLazyQuery>;
export type DisplayBackdropQueryResult = Apollo.QueryResult<DisplayBackdropQuery, DisplayBackdropQueryVariables>;
export const DisplayPostCreatorDocument = gql`
    query DisplayPostCreator {
  displayPostCreator @client
}
    `;

/**
 * __useDisplayPostCreatorQuery__
 *
 * To run a query within a React component, call `useDisplayPostCreatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useDisplayPostCreatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDisplayPostCreatorQuery({
 *   variables: {
 *   },
 * });
 */
export function useDisplayPostCreatorQuery(baseOptions?: Apollo.QueryHookOptions<DisplayPostCreatorQuery, DisplayPostCreatorQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DisplayPostCreatorQuery, DisplayPostCreatorQueryVariables>(DisplayPostCreatorDocument, options);
      }
export function useDisplayPostCreatorLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DisplayPostCreatorQuery, DisplayPostCreatorQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DisplayPostCreatorQuery, DisplayPostCreatorQueryVariables>(DisplayPostCreatorDocument, options);
        }
export type DisplayPostCreatorQueryHookResult = ReturnType<typeof useDisplayPostCreatorQuery>;
export type DisplayPostCreatorLazyQueryHookResult = ReturnType<typeof useDisplayPostCreatorLazyQuery>;
export type DisplayPostCreatorQueryResult = Apollo.QueryResult<DisplayPostCreatorQuery, DisplayPostCreatorQueryVariables>;
export const CreateMusicianPostDocument = gql`
    mutation CreateMusicianPost($title: String!, $body: String!, $authorId: Float!) {
  createMusicianPost(title: $title, body: $body, authorId: $authorId) {
    id
    title
    body
    author {
      id
      email
    }
  }
}
    `;
export type CreateMusicianPostMutationFn = Apollo.MutationFunction<CreateMusicianPostMutation, CreateMusicianPostMutationVariables>;

/**
 * __useCreateMusicianPostMutation__
 *
 * To run a mutation, you first call `useCreateMusicianPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMusicianPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMusicianPostMutation, { data, loading, error }] = useCreateMusicianPostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      authorId: // value for 'authorId'
 *   },
 * });
 */
export function useCreateMusicianPostMutation(baseOptions?: Apollo.MutationHookOptions<CreateMusicianPostMutation, CreateMusicianPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMusicianPostMutation, CreateMusicianPostMutationVariables>(CreateMusicianPostDocument, options);
      }
export type CreateMusicianPostMutationHookResult = ReturnType<typeof useCreateMusicianPostMutation>;
export type CreateMusicianPostMutationResult = Apollo.MutationResult<CreateMusicianPostMutation>;
export type CreateMusicianPostMutationOptions = Apollo.BaseMutationOptions<CreateMusicianPostMutation, CreateMusicianPostMutationVariables>;
export const CreateNewUserDocument = gql`
    mutation CreateNewUser($registerPassword: String!, $registerEmail: String!, $registerUsername: String!) {
  register(
    password: $registerPassword
    email: $registerEmail
    username: $registerUsername
  )
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
 *      registerUsername: // value for 'registerUsername'
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
      username
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
export const UpdateUserInstrumentsDocument = gql`
    mutation UpdateUserInstruments($updatedInstrumentIds: [Float!]!, $userId: Float!) {
  updateInstruments(updatedInstrumentIds: $updatedInstrumentIds, userId: $userId) {
    id
    name
  }
}
    `;
export type UpdateUserInstrumentsMutationFn = Apollo.MutationFunction<UpdateUserInstrumentsMutation, UpdateUserInstrumentsMutationVariables>;

/**
 * __useUpdateUserInstrumentsMutation__
 *
 * To run a mutation, you first call `useUpdateUserInstrumentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserInstrumentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserInstrumentsMutation, { data, loading, error }] = useUpdateUserInstrumentsMutation({
 *   variables: {
 *      updatedInstrumentIds: // value for 'updatedInstrumentIds'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpdateUserInstrumentsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserInstrumentsMutation, UpdateUserInstrumentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserInstrumentsMutation, UpdateUserInstrumentsMutationVariables>(UpdateUserInstrumentsDocument, options);
      }
export type UpdateUserInstrumentsMutationHookResult = ReturnType<typeof useUpdateUserInstrumentsMutation>;
export type UpdateUserInstrumentsMutationResult = Apollo.MutationResult<UpdateUserInstrumentsMutation>;
export type UpdateUserInstrumentsMutationOptions = Apollo.BaseMutationOptions<UpdateUserInstrumentsMutation, UpdateUserInstrumentsMutationVariables>;
export const UpdateUsernameDocument = gql`
    mutation UpdateUsername($newUsername: String!, $userId: Float!) {
  updateUsename(newUsername: $newUsername, userId: $userId) {
    username
  }
}
    `;
export type UpdateUsernameMutationFn = Apollo.MutationFunction<UpdateUsernameMutation, UpdateUsernameMutationVariables>;

/**
 * __useUpdateUsernameMutation__
 *
 * To run a mutation, you first call `useUpdateUsernameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsernameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsernameMutation, { data, loading, error }] = useUpdateUsernameMutation({
 *   variables: {
 *      newUsername: // value for 'newUsername'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUpdateUsernameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsernameMutation, UpdateUsernameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUsernameMutation, UpdateUsernameMutationVariables>(UpdateUsernameDocument, options);
      }
export type UpdateUsernameMutationHookResult = ReturnType<typeof useUpdateUsernameMutation>;
export type UpdateUsernameMutationResult = Apollo.MutationResult<UpdateUsernameMutation>;
export type UpdateUsernameMutationOptions = Apollo.BaseMutationOptions<UpdateUsernameMutation, UpdateUsernameMutationVariables>;
export const AuthedUserDocument = gql`
    query AuthedUser {
  authedUser {
    username
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
export const ListInstrumentsDocument = gql`
    query ListInstruments {
  instruments {
    id
    name
  }
}
    `;

/**
 * __useListInstrumentsQuery__
 *
 * To run a query within a React component, call `useListInstrumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListInstrumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListInstrumentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListInstrumentsQuery(baseOptions?: Apollo.QueryHookOptions<ListInstrumentsQuery, ListInstrumentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListInstrumentsQuery, ListInstrumentsQueryVariables>(ListInstrumentsDocument, options);
      }
export function useListInstrumentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListInstrumentsQuery, ListInstrumentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListInstrumentsQuery, ListInstrumentsQueryVariables>(ListInstrumentsDocument, options);
        }
export type ListInstrumentsQueryHookResult = ReturnType<typeof useListInstrumentsQuery>;
export type ListInstrumentsLazyQueryHookResult = ReturnType<typeof useListInstrumentsLazyQuery>;
export type ListInstrumentsQueryResult = Apollo.QueryResult<ListInstrumentsQuery, ListInstrumentsQueryVariables>;
export const ListMusicianPostsDocument = gql`
    query ListMusicianPosts {
  musicianPosts {
    id
    title
    body
    author {
      id
      username
    }
  }
}
    `;

/**
 * __useListMusicianPostsQuery__
 *
 * To run a query within a React component, call `useListMusicianPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListMusicianPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListMusicianPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListMusicianPostsQuery(baseOptions?: Apollo.QueryHookOptions<ListMusicianPostsQuery, ListMusicianPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListMusicianPostsQuery, ListMusicianPostsQueryVariables>(ListMusicianPostsDocument, options);
      }
export function useListMusicianPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListMusicianPostsQuery, ListMusicianPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListMusicianPostsQuery, ListMusicianPostsQueryVariables>(ListMusicianPostsDocument, options);
        }
export type ListMusicianPostsQueryHookResult = ReturnType<typeof useListMusicianPostsQuery>;
export type ListMusicianPostsLazyQueryHookResult = ReturnType<typeof useListMusicianPostsLazyQuery>;
export type ListMusicianPostsQueryResult = Apollo.QueryResult<ListMusicianPostsQuery, ListMusicianPostsQueryVariables>;
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
export const UserProfileDocument = gql`
    query UserProfile {
  authedUser {
    username
    email
    id
    instruments {
      id
      name
    }
  }
}
    `;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions?: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;