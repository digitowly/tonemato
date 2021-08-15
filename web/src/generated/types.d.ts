export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  bandPost?: Maybe<BandPost>;
  findFirstBandPost?: Maybe<BandPost>;
  bandPosts: Array<BandPost>;
  aggregateBandPost: AggregateBandPost;
  post?: Maybe<Post>;
  findFirstPost?: Maybe<Post>;
  posts: Array<Post>;
  aggregatePost: AggregatePost;
  searchType?: Maybe<SearchType>;
  findFirstSearchType?: Maybe<SearchType>;
  searchTypes: Array<SearchType>;
  aggregateSearchType: AggregateSearchType;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
};


export type QueryBandPostArgs = {
  where: BandPostWhereUniqueInput;
};


export type QueryFindFirstBandPostArgs = {
  where?: Maybe<BandPostWhereInput>;
  orderBy?: Maybe<Array<BandPostOrderByInput>>;
  cursor?: Maybe<BandPostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<BandPostScalarFieldEnum>>;
};


export type QueryBandPostsArgs = {
  where?: Maybe<BandPostWhereInput>;
  orderBy?: Maybe<Array<BandPostOrderByInput>>;
  cursor?: Maybe<BandPostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<BandPostScalarFieldEnum>>;
};


export type QueryAggregateBandPostArgs = {
  where?: Maybe<BandPostWhereInput>;
  orderBy?: Maybe<Array<BandPostOrderByInput>>;
  cursor?: Maybe<BandPostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryFindFirstPostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type QueryPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type QueryAggregatePostArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QuerySearchTypeArgs = {
  where: SearchTypeWhereUniqueInput;
};


export type QueryFindFirstSearchTypeArgs = {
  where?: Maybe<SearchTypeWhereInput>;
  orderBy?: Maybe<Array<SearchTypeOrderByInput>>;
  cursor?: Maybe<SearchTypeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<SearchTypeScalarFieldEnum>>;
};


export type QuerySearchTypesArgs = {
  where?: Maybe<SearchTypeWhereInput>;
  orderBy?: Maybe<Array<SearchTypeOrderByInput>>;
  cursor?: Maybe<SearchTypeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<SearchTypeScalarFieldEnum>>;
};


export type QueryAggregateSearchTypeArgs = {
  where?: Maybe<SearchTypeWhereInput>;
  orderBy?: Maybe<Array<SearchTypeOrderByInput>>;
  cursor?: Maybe<SearchTypeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};


export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type BandPost = {
  __typename?: 'BandPost';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  title: Scalars['String'];
  body: Scalars['String'];
  published: Scalars['Boolean'];
  userId: Scalars['Int'];
  author: User;
  searchTypes: Array<SearchType>;
};


export type BandPostSearchTypesArgs = {
  where?: Maybe<SearchTypeWhereInput>;
  orderBy?: Maybe<Array<SearchTypeOrderByInput>>;
  cursor?: Maybe<SearchTypeWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<SearchTypeScalarFieldEnum>>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  posts: Array<Post>;
  bandPosts: Array<BandPost>;
};


export type UserPostsArgs = {
  where?: Maybe<PostWhereInput>;
  orderBy?: Maybe<Array<PostOrderByInput>>;
  cursor?: Maybe<PostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<PostScalarFieldEnum>>;
};


export type UserBandPostsArgs = {
  where?: Maybe<BandPostWhereInput>;
  orderBy?: Maybe<Array<BandPostOrderByInput>>;
  cursor?: Maybe<BandPostWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<BandPostScalarFieldEnum>>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  title: Scalars['String'];
  body: Scalars['String'];
  userId: Scalars['Int'];
  published: Scalars['Boolean'];
  author: User;
};

export type PostWhereInput = {
  AND?: Maybe<Array<PostWhereInput>>;
  OR?: Maybe<Array<PostWhereInput>>;
  NOT?: Maybe<Array<PostWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  body?: Maybe<StringFilter>;
  author?: Maybe<UserRelationFilter>;
  userId?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  image?: Maybe<StringNullableFilter>;
  posts?: Maybe<PostListRelationFilter>;
  bandPosts?: Maybe<BandPostListRelationFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type PostListRelationFilter = {
  every?: Maybe<PostWhereInput>;
  some?: Maybe<PostWhereInput>;
  none?: Maybe<PostWhereInput>;
};

export type BandPostListRelationFilter = {
  every?: Maybe<BandPostWhereInput>;
  some?: Maybe<BandPostWhereInput>;
  none?: Maybe<BandPostWhereInput>;
};

export type BandPostWhereInput = {
  AND?: Maybe<Array<BandPostWhereInput>>;
  OR?: Maybe<Array<BandPostWhereInput>>;
  NOT?: Maybe<Array<BandPostWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  body?: Maybe<StringFilter>;
  published?: Maybe<BoolFilter>;
  author?: Maybe<UserRelationFilter>;
  userId?: Maybe<IntFilter>;
  searchTypes?: Maybe<SearchTypeListRelationFilter>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type SearchTypeListRelationFilter = {
  every?: Maybe<SearchTypeWhereInput>;
  some?: Maybe<SearchTypeWhereInput>;
  none?: Maybe<SearchTypeWhereInput>;
};

export type SearchTypeWhereInput = {
  AND?: Maybe<Array<SearchTypeWhereInput>>;
  OR?: Maybe<Array<SearchTypeWhereInput>>;
  NOT?: Maybe<Array<SearchTypeWhereInput>>;
  id?: Maybe<IntFilter>;
  amount?: Maybe<IntFilter>;
  instrument?: Maybe<EnumIntrumentFilter>;
  bandPost?: Maybe<BandPostRelationFilter>;
  bandPostId?: Maybe<IntNullableFilter>;
};

export type EnumIntrumentFilter = {
  equals?: Maybe<Intrument>;
  in?: Maybe<Array<Intrument>>;
  notIn?: Maybe<Array<Intrument>>;
  not?: Maybe<NestedEnumIntrumentFilter>;
};

export enum Intrument {
  Guitar = 'GUITAR',
  Bass = 'BASS',
  Drums = 'DRUMS'
}

export type NestedEnumIntrumentFilter = {
  equals?: Maybe<Intrument>;
  in?: Maybe<Array<Intrument>>;
  notIn?: Maybe<Array<Intrument>>;
  not?: Maybe<NestedEnumIntrumentFilter>;
};

export type BandPostRelationFilter = {
  is?: Maybe<BandPostWhereInput>;
  isNot?: Maybe<BandPostWhereInput>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type PostOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  body?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type PostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum PostScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Title = 'title',
  Body = 'body',
  UserId = 'userId',
  Published = 'published'
}

export type BandPostOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  body?: Maybe<SortOrder>;
  published?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
};

export type BandPostWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum BandPostScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Title = 'title',
  Body = 'body',
  Published = 'published',
  UserId = 'userId'
}

export type SearchType = {
  __typename?: 'SearchType';
  id: Scalars['Int'];
  amount: Scalars['Int'];
  instrument: Intrument;
  bandPostId?: Maybe<Scalars['Int']>;
  bandPost?: Maybe<BandPost>;
};

export type SearchTypeOrderByInput = {
  id?: Maybe<SortOrder>;
  amount?: Maybe<SortOrder>;
  instrument?: Maybe<SortOrder>;
  bandPostId?: Maybe<SortOrder>;
};

export type SearchTypeWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export enum SearchTypeScalarFieldEnum {
  Id = 'id',
  Amount = 'amount',
  Instrument = 'instrument',
  BandPostId = 'bandPostId'
}

export type AggregateBandPost = {
  __typename?: 'AggregateBandPost';
  count?: Maybe<BandPostCountAggregate>;
  avg?: Maybe<BandPostAvgAggregate>;
  sum?: Maybe<BandPostSumAggregate>;
  min?: Maybe<BandPostMinAggregate>;
  max?: Maybe<BandPostMaxAggregate>;
};

export type BandPostCountAggregate = {
  __typename?: 'BandPostCountAggregate';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['Int']>;
  published?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
  _all: Scalars['Int'];
};

export type BandPostAvgAggregate = {
  __typename?: 'BandPostAvgAggregate';
  id: Scalars['Float'];
  userId: Scalars['Float'];
};

export type BandPostSumAggregate = {
  __typename?: 'BandPostSumAggregate';
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export type BandPostMinAggregate = {
  __typename?: 'BandPostMinAggregate';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
};

export type BandPostMaxAggregate = {
  __typename?: 'BandPostMaxAggregate';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  userId: Scalars['Int'];
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  count?: Maybe<PostCountAggregate>;
  avg?: Maybe<PostAvgAggregate>;
  sum?: Maybe<PostSumAggregate>;
  min?: Maybe<PostMinAggregate>;
  max?: Maybe<PostMaxAggregate>;
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  body?: Maybe<Scalars['Int']>;
  userId: Scalars['Int'];
  published?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  id: Scalars['Float'];
  userId: Scalars['Float'];
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  id: Scalars['Int'];
  userId: Scalars['Int'];
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  published?: Maybe<Scalars['Boolean']>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  published?: Maybe<Scalars['Boolean']>;
};

export type AggregateSearchType = {
  __typename?: 'AggregateSearchType';
  count?: Maybe<SearchTypeCountAggregate>;
  avg?: Maybe<SearchTypeAvgAggregate>;
  sum?: Maybe<SearchTypeSumAggregate>;
  min?: Maybe<SearchTypeMinAggregate>;
  max?: Maybe<SearchTypeMaxAggregate>;
};

export type SearchTypeCountAggregate = {
  __typename?: 'SearchTypeCountAggregate';
  id: Scalars['Int'];
  amount: Scalars['Int'];
  instrument?: Maybe<Scalars['Int']>;
  bandPostId?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type SearchTypeAvgAggregate = {
  __typename?: 'SearchTypeAvgAggregate';
  id: Scalars['Float'];
  amount: Scalars['Float'];
  bandPostId?: Maybe<Scalars['Float']>;
};

export type SearchTypeSumAggregate = {
  __typename?: 'SearchTypeSumAggregate';
  id: Scalars['Int'];
  amount: Scalars['Int'];
  bandPostId?: Maybe<Scalars['Int']>;
};

export type SearchTypeMinAggregate = {
  __typename?: 'SearchTypeMinAggregate';
  id: Scalars['Int'];
  amount: Scalars['Int'];
  instrument?: Maybe<Intrument>;
  bandPostId?: Maybe<Scalars['Int']>;
};

export type SearchTypeMaxAggregate = {
  __typename?: 'SearchTypeMaxAggregate';
  id: Scalars['Int'];
  amount: Scalars['Int'];
  instrument?: Maybe<Intrument>;
  bandPostId?: Maybe<Scalars['Int']>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  Email = 'email',
  Name = 'name',
  Image = 'image'
}

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<UserCountAggregate>;
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['Int']>;
  _all: Scalars['Int'];
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id: Scalars['Float'];
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id: Scalars['Int'];
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id: Scalars['Int'];
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBandPost: BandPost;
  deleteBandPost?: Maybe<BandPost>;
  updateBandPost?: Maybe<BandPost>;
  deleteManyBandPost: AffectedRowsOutput;
  updateManyBandPost: AffectedRowsOutput;
  upsertBandPost: BandPost;
  createPost: Post;
  deletePost?: Maybe<Post>;
  updatePost?: Maybe<Post>;
  deleteManyPost: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  upsertPost: Post;
  createSearchType: SearchType;
  deleteSearchType?: Maybe<SearchType>;
  updateSearchType?: Maybe<SearchType>;
  deleteManySearchType: AffectedRowsOutput;
  updateManySearchType: AffectedRowsOutput;
  upsertSearchType: SearchType;
  createUser: User;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  upsertUser: User;
};


export type MutationCreateBandPostArgs = {
  data: BandPostCreateInput;
};


export type MutationDeleteBandPostArgs = {
  where: BandPostWhereUniqueInput;
};


export type MutationUpdateBandPostArgs = {
  data: BandPostUpdateInput;
  where: BandPostWhereUniqueInput;
};


export type MutationDeleteManyBandPostArgs = {
  where?: Maybe<BandPostWhereInput>;
};


export type MutationUpdateManyBandPostArgs = {
  data: BandPostUpdateManyMutationInput;
  where?: Maybe<BandPostWhereInput>;
};


export type MutationUpsertBandPostArgs = {
  where: BandPostWhereUniqueInput;
  create: BandPostCreateInput;
  update: BandPostUpdateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationDeletePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationDeleteManyPostArgs = {
  where?: Maybe<PostWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: Maybe<PostWhereInput>;
};


export type MutationUpsertPostArgs = {
  where: PostWhereUniqueInput;
  create: PostCreateInput;
  update: PostUpdateInput;
};


export type MutationCreateSearchTypeArgs = {
  data: SearchTypeCreateInput;
};


export type MutationDeleteSearchTypeArgs = {
  where: SearchTypeWhereUniqueInput;
};


export type MutationUpdateSearchTypeArgs = {
  data: SearchTypeUpdateInput;
  where: SearchTypeWhereUniqueInput;
};


export type MutationDeleteManySearchTypeArgs = {
  where?: Maybe<SearchTypeWhereInput>;
};


export type MutationUpdateManySearchTypeArgs = {
  data: SearchTypeUpdateManyMutationInput;
  where?: Maybe<SearchTypeWhereInput>;
};


export type MutationUpsertSearchTypeArgs = {
  where: SearchTypeWhereUniqueInput;
  create: SearchTypeCreateInput;
  update: SearchTypeUpdateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type BandPostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  body: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  author: UserCreateNestedOneWithoutBandPostsInput;
  searchTypes?: Maybe<SearchTypeCreateNestedManyWithoutBandPostInput>;
};

export type UserCreateNestedOneWithoutBandPostsInput = {
  create?: Maybe<UserCreateWithoutBandPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutBandPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutBandPostsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
};

export type PostCreateWithoutAuthorInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  body: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  create: PostCreateWithoutAuthorInput;
};

export type UserCreateOrConnectWithoutBandPostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutBandPostsInput;
};

export type SearchTypeCreateNestedManyWithoutBandPostInput = {
  create?: Maybe<Array<SearchTypeCreateWithoutBandPostInput>>;
  connectOrCreate?: Maybe<Array<SearchTypeCreateOrConnectWithoutBandPostInput>>;
  connect?: Maybe<Array<SearchTypeWhereUniqueInput>>;
};

export type SearchTypeCreateWithoutBandPostInput = {
  amount: Scalars['Int'];
  instrument: Intrument;
};

export type SearchTypeCreateOrConnectWithoutBandPostInput = {
  where: SearchTypeWhereUniqueInput;
  create: SearchTypeCreateWithoutBandPostInput;
};

export type BandPostUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutBandPostsInput>;
  searchTypes?: Maybe<SearchTypeUpdateManyWithoutBandPostInput>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateOneRequiredWithoutBandPostsInput = {
  create?: Maybe<UserCreateWithoutBandPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutBandPostsInput>;
  upsert?: Maybe<UserUpsertWithoutBandPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutBandPostsInput>;
};

export type UserUpsertWithoutBandPostsInput = {
  update: UserUpdateWithoutBandPostsInput;
  create: UserCreateWithoutBandPostsInput;
};

export type UserUpdateWithoutBandPostsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type PostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<PostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
  connect?: Maybe<Array<PostWhereUniqueInput>>;
  set?: Maybe<Array<PostWhereUniqueInput>>;
  disconnect?: Maybe<Array<PostWhereUniqueInput>>;
  delete?: Maybe<Array<PostWhereUniqueInput>>;
  update?: Maybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<PostScalarWhereInput>>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorInput;
  create: PostCreateWithoutAuthorInput;
};

export type PostUpdateWithoutAuthorInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorInput;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  where: PostScalarWhereInput;
  data: PostUpdateManyMutationInput;
};

export type PostScalarWhereInput = {
  AND?: Maybe<Array<PostScalarWhereInput>>;
  OR?: Maybe<Array<PostScalarWhereInput>>;
  NOT?: Maybe<Array<PostScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  body?: Maybe<StringFilter>;
  userId?: Maybe<IntFilter>;
  published?: Maybe<BoolFilter>;
};

export type PostUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type SearchTypeUpdateManyWithoutBandPostInput = {
  create?: Maybe<Array<SearchTypeCreateWithoutBandPostInput>>;
  connectOrCreate?: Maybe<Array<SearchTypeCreateOrConnectWithoutBandPostInput>>;
  upsert?: Maybe<Array<SearchTypeUpsertWithWhereUniqueWithoutBandPostInput>>;
  connect?: Maybe<Array<SearchTypeWhereUniqueInput>>;
  set?: Maybe<Array<SearchTypeWhereUniqueInput>>;
  disconnect?: Maybe<Array<SearchTypeWhereUniqueInput>>;
  delete?: Maybe<Array<SearchTypeWhereUniqueInput>>;
  update?: Maybe<Array<SearchTypeUpdateWithWhereUniqueWithoutBandPostInput>>;
  updateMany?: Maybe<Array<SearchTypeUpdateManyWithWhereWithoutBandPostInput>>;
  deleteMany?: Maybe<Array<SearchTypeScalarWhereInput>>;
};

export type SearchTypeUpsertWithWhereUniqueWithoutBandPostInput = {
  where: SearchTypeWhereUniqueInput;
  update: SearchTypeUpdateWithoutBandPostInput;
  create: SearchTypeCreateWithoutBandPostInput;
};

export type SearchTypeUpdateWithoutBandPostInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  instrument?: Maybe<EnumIntrumentFieldUpdateOperationsInput>;
};

export type IntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type EnumIntrumentFieldUpdateOperationsInput = {
  set?: Maybe<Intrument>;
};

export type SearchTypeUpdateWithWhereUniqueWithoutBandPostInput = {
  where: SearchTypeWhereUniqueInput;
  data: SearchTypeUpdateWithoutBandPostInput;
};

export type SearchTypeUpdateManyWithWhereWithoutBandPostInput = {
  where: SearchTypeScalarWhereInput;
  data: SearchTypeUpdateManyMutationInput;
};

export type SearchTypeScalarWhereInput = {
  AND?: Maybe<Array<SearchTypeScalarWhereInput>>;
  OR?: Maybe<Array<SearchTypeScalarWhereInput>>;
  NOT?: Maybe<Array<SearchTypeScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  amount?: Maybe<IntFilter>;
  instrument?: Maybe<EnumIntrumentFilter>;
  bandPostId?: Maybe<IntNullableFilter>;
};

export type SearchTypeUpdateManyMutationInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  instrument?: Maybe<EnumIntrumentFieldUpdateOperationsInput>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type BandPostUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
};

export type PostCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  body: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  author: UserCreateNestedOneWithoutPostsInput;
};

export type UserCreateNestedOneWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutPostsInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  bandPosts?: Maybe<BandPostCreateNestedManyWithoutAuthorInput>;
};

export type BandPostCreateNestedManyWithoutAuthorInput = {
  create?: Maybe<Array<BandPostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<BandPostCreateOrConnectWithoutAuthorInput>>;
  connect?: Maybe<Array<BandPostWhereUniqueInput>>;
};

export type BandPostCreateWithoutAuthorInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  body: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  searchTypes?: Maybe<SearchTypeCreateNestedManyWithoutBandPostInput>;
};

export type BandPostCreateOrConnectWithoutAuthorInput = {
  where: BandPostWhereUniqueInput;
  create: BandPostCreateWithoutAuthorInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  where: UserWhereUniqueInput;
  create: UserCreateWithoutPostsInput;
};

export type PostUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
};

export type UserUpdateOneRequiredWithoutPostsInput = {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostsInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  update?: Maybe<UserUpdateWithoutPostsInput>;
};

export type UserUpsertWithoutPostsInput = {
  update: UserUpdateWithoutPostsInput;
  create: UserCreateWithoutPostsInput;
};

export type UserUpdateWithoutPostsInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  bandPosts?: Maybe<BandPostUpdateManyWithoutAuthorInput>;
};

export type BandPostUpdateManyWithoutAuthorInput = {
  create?: Maybe<Array<BandPostCreateWithoutAuthorInput>>;
  connectOrCreate?: Maybe<Array<BandPostCreateOrConnectWithoutAuthorInput>>;
  upsert?: Maybe<Array<BandPostUpsertWithWhereUniqueWithoutAuthorInput>>;
  connect?: Maybe<Array<BandPostWhereUniqueInput>>;
  set?: Maybe<Array<BandPostWhereUniqueInput>>;
  disconnect?: Maybe<Array<BandPostWhereUniqueInput>>;
  delete?: Maybe<Array<BandPostWhereUniqueInput>>;
  update?: Maybe<Array<BandPostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: Maybe<Array<BandPostUpdateManyWithWhereWithoutAuthorInput>>;
  deleteMany?: Maybe<Array<BandPostScalarWhereInput>>;
};

export type BandPostUpsertWithWhereUniqueWithoutAuthorInput = {
  where: BandPostWhereUniqueInput;
  update: BandPostUpdateWithoutAuthorInput;
  create: BandPostCreateWithoutAuthorInput;
};

export type BandPostUpdateWithoutAuthorInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  searchTypes?: Maybe<SearchTypeUpdateManyWithoutBandPostInput>;
};

export type BandPostUpdateWithWhereUniqueWithoutAuthorInput = {
  where: BandPostWhereUniqueInput;
  data: BandPostUpdateWithoutAuthorInput;
};

export type BandPostUpdateManyWithWhereWithoutAuthorInput = {
  where: BandPostScalarWhereInput;
  data: BandPostUpdateManyMutationInput;
};

export type BandPostScalarWhereInput = {
  AND?: Maybe<Array<BandPostScalarWhereInput>>;
  OR?: Maybe<Array<BandPostScalarWhereInput>>;
  NOT?: Maybe<Array<BandPostScalarWhereInput>>;
  id?: Maybe<IntFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  title?: Maybe<StringFilter>;
  body?: Maybe<StringFilter>;
  published?: Maybe<BoolFilter>;
  userId?: Maybe<IntFilter>;
};

export type SearchTypeCreateInput = {
  amount: Scalars['Int'];
  instrument: Intrument;
  bandPost?: Maybe<BandPostCreateNestedOneWithoutSearchTypesInput>;
};

export type BandPostCreateNestedOneWithoutSearchTypesInput = {
  create?: Maybe<BandPostCreateWithoutSearchTypesInput>;
  connectOrCreate?: Maybe<BandPostCreateOrConnectWithoutSearchTypesInput>;
  connect?: Maybe<BandPostWhereUniqueInput>;
};

export type BandPostCreateWithoutSearchTypesInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  body: Scalars['String'];
  published?: Maybe<Scalars['Boolean']>;
  author: UserCreateNestedOneWithoutBandPostsInput;
};

export type BandPostCreateOrConnectWithoutSearchTypesInput = {
  where: BandPostWhereUniqueInput;
  create: BandPostCreateWithoutSearchTypesInput;
};

export type SearchTypeUpdateInput = {
  amount?: Maybe<IntFieldUpdateOperationsInput>;
  instrument?: Maybe<EnumIntrumentFieldUpdateOperationsInput>;
  bandPost?: Maybe<BandPostUpdateOneWithoutSearchTypesInput>;
};

export type BandPostUpdateOneWithoutSearchTypesInput = {
  create?: Maybe<BandPostCreateWithoutSearchTypesInput>;
  connectOrCreate?: Maybe<BandPostCreateOrConnectWithoutSearchTypesInput>;
  upsert?: Maybe<BandPostUpsertWithoutSearchTypesInput>;
  connect?: Maybe<BandPostWhereUniqueInput>;
  disconnect?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  update?: Maybe<BandPostUpdateWithoutSearchTypesInput>;
};

export type BandPostUpsertWithoutSearchTypesInput = {
  update: BandPostUpdateWithoutSearchTypesInput;
  create: BandPostCreateWithoutSearchTypesInput;
};

export type BandPostUpdateWithoutSearchTypesInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  body?: Maybe<StringFieldUpdateOperationsInput>;
  published?: Maybe<BoolFieldUpdateOperationsInput>;
  author?: Maybe<UserUpdateOneRequiredWithoutBandPostsInput>;
};

export type UserCreateInput = {
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  posts?: Maybe<PostCreateNestedManyWithoutAuthorInput>;
  bandPosts?: Maybe<BandPostCreateNestedManyWithoutAuthorInput>;
};

export type UserUpdateInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
  bandPosts?: Maybe<BandPostUpdateManyWithoutAuthorInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
};

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  body: Scalars['String'];
  author: UserCreateNestedOneWithoutPostsInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'Post' }
    & Pick<Post, 'title' | 'body'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  ) }
);

export type ListBandPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListBandPostsQuery = (
  { __typename?: 'Query' }
  & { bandPosts: Array<(
    { __typename?: 'BandPost' }
    & Pick<BandPost, 'id' | 'title' | 'body'>
    & { searchTypes: Array<(
      { __typename?: 'SearchType' }
      & Pick<SearchType, 'amount' | 'instrument'>
    )>, author: (
      { __typename?: 'User' }
      & Pick<User, 'name' | 'image'>
    ) }
  )> }
);

export type ListPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPostsQuery = (
  { __typename?: 'Query' }
  & { posts: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body'>
    & { author: (
      { __typename?: 'User' }
      & Pick<User, 'name' | 'image'>
    ) }
  )> }
);

export type ListUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);
