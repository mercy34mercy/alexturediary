export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  Timestamp: any;
};

export type Diary = {
  __typename?: 'Diary';
  CreatedAt: Scalars['Timestamp'];
  Diaryid: Scalars['ID'];
  Imageurl: Scalars['String'];
  UpdatedAt: Scalars['Timestamp'];
  Userid: Scalars['ID'];
  Word?: Maybe<Scalars['String']>;
};

export type Me = {
  __typename?: 'Me';
  Diary: Array<Diary>;
  Followee: Array<UserDiary>;
  Follower: Array<UserDiary>;
  User: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDiary: Diary;
  createFollow: User;
  createUser: User;
};


export type MutationCreateDiaryArgs = {
  input: NewDiary;
};


export type MutationCreateFollowArgs = {
  input?: InputMaybe<NewFollow>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<NewUser>;
};

export type NewDiary = {
  Imageurl: Scalars['String'];
  Userid: Scalars['String'];
  Word?: InputMaybe<Scalars['String']>;
};

export type NewFollow = {
  Followee: Scalars['String'];
  Follower: Scalars['String'];
};

export type NewUser = {
  Name: Scalars['String'];
  Userid: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  User: Me;
};


export type QueryUserArgs = {
  argument: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  Name: Scalars['String'];
  Userid: Scalars['ID'];
};

export type UserDiary = {
  __typename?: 'UserDiary';
  Diary: Array<Diary>;
  User?: Maybe<User>;
};

export type GetuserQueryVariables = Exact<{
  argument: Scalars['ID'];
}>;


export type GetuserQuery = { __typename?: 'Query', User: { __typename?: 'Me', User: { __typename?: 'User', Userid: string, Name: string }, Diary: Array<{ __typename?: 'Diary', Diaryid: string, Word?: string | null, Imageurl: string, Userid: string, CreatedAt: any, UpdatedAt: any }>, Followee: Array<{ __typename?: 'UserDiary', User?: { __typename?: 'User', Userid: string, Name: string } | null, Diary: Array<{ __typename?: 'Diary', Diaryid: string, Word?: string | null, Imageurl: string, Userid: string, CreatedAt: any, UpdatedAt: any }> }>, Follower: Array<{ __typename?: 'UserDiary', User?: { __typename?: 'User', Userid: string, Name: string } | null, Diary: Array<{ __typename?: 'Diary', Diaryid: string, Word?: string | null, Imageurl: string, Userid: string, CreatedAt: any, UpdatedAt: any }> }> } };
