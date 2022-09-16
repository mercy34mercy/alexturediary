import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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
  User: User;
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
  AllDiary: Array<Diary>;
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


export type GetuserQuery = { __typename?: 'Query', User: { __typename?: 'Me', User: { __typename?: 'User', Userid: string, Name: string }, Diary: Array<{ __typename?: 'Diary', Diaryid: string, Word?: string | null, Imageurl: string, CreatedAt: any, UpdatedAt: any, User: { __typename?: 'User', Userid: string, Name: string } }>, Followee: Array<{ __typename?: 'UserDiary', User?: { __typename?: 'User', Userid: string, Name: string } | null, Diary: Array<{ __typename?: 'Diary', Diaryid: string, Word?: string | null, Imageurl: string, CreatedAt: any, UpdatedAt: any, User: { __typename?: 'User', Userid: string, Name: string } }> }>, Follower: Array<{ __typename?: 'UserDiary', User?: { __typename?: 'User', Userid: string, Name: string } | null, Diary: Array<{ __typename?: 'Diary', Diaryid: string, Word?: string | null, Imageurl: string, CreatedAt: any, UpdatedAt: any, User: { __typename?: 'User', Userid: string, Name: string } }> }> } };


export const GetuserDocument = gql`
    query getuser($argument: ID!) {
  User(argument: $argument) {
    User {
      Userid
      Name
    }
    Diary {
      Diaryid
      Word
      Imageurl
      CreatedAt
      UpdatedAt
      User {
        Userid
        Name
      }
    }
    Followee {
      User {
        Userid
        Name
      }
      Diary {
        Diaryid
        Word
        Imageurl
        CreatedAt
        UpdatedAt
        User {
          Userid
          Name
        }
      }
    }
    Follower {
      User {
        Userid
        Name
      }
      Diary {
        Diaryid
        Word
        Imageurl
        CreatedAt
        UpdatedAt
        User {
          Userid
          Name
        }
      }
    }
  }
}
    `;

/**
 * __useGetuserQuery__
 *
 * To run a query within a React component, call `useGetuserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetuserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetuserQuery({
 *   variables: {
 *      argument: // value for 'argument'
 *   },
 * });
 */
export function useGetuserQuery(baseOptions: Apollo.QueryHookOptions<GetuserQuery, GetuserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetuserQuery, GetuserQueryVariables>(GetuserDocument, options);
      }
export function useGetuserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetuserQuery, GetuserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetuserQuery, GetuserQueryVariables>(GetuserDocument, options);
        }
export type GetuserQueryHookResult = ReturnType<typeof useGetuserQuery>;
export type GetuserLazyQueryHookResult = ReturnType<typeof useGetuserLazyQuery>;
export type GetuserQueryResult = Apollo.QueryResult<GetuserQuery, GetuserQueryVariables>;