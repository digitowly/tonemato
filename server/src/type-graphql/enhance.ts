import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  BandPost: crudResolvers.BandPostCrudResolver,
  SearchType: crudResolvers.SearchTypeCrudResolver
};
const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  BandPost: relationResolvers.BandPostRelationsResolver,
  SearchType: relationResolvers.SearchTypeRelationsResolver
};
const actionResolversMap = {
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver
  },
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver
  },
  BandPost: {
    bandPost: actionResolvers.FindUniqueBandPostResolver,
    findFirstBandPost: actionResolvers.FindFirstBandPostResolver,
    bandPosts: actionResolvers.FindManyBandPostResolver,
    createBandPost: actionResolvers.CreateBandPostResolver,
    deleteBandPost: actionResolvers.DeleteBandPostResolver,
    updateBandPost: actionResolvers.UpdateBandPostResolver,
    deleteManyBandPost: actionResolvers.DeleteManyBandPostResolver,
    updateManyBandPost: actionResolvers.UpdateManyBandPostResolver,
    upsertBandPost: actionResolvers.UpsertBandPostResolver,
    aggregateBandPost: actionResolvers.AggregateBandPostResolver
  },
  SearchType: {
    searchType: actionResolvers.FindUniqueSearchTypeResolver,
    findFirstSearchType: actionResolvers.FindFirstSearchTypeResolver,
    searchTypes: actionResolvers.FindManySearchTypeResolver,
    createSearchType: actionResolvers.CreateSearchTypeResolver,
    deleteSearchType: actionResolvers.DeleteSearchTypeResolver,
    updateSearchType: actionResolvers.UpdateSearchTypeResolver,
    deleteManySearchType: actionResolvers.DeleteManySearchTypeResolver,
    updateManySearchType: actionResolvers.UpdateManySearchTypeResolver,
    upsertSearchType: actionResolvers.UpsertSearchTypeResolver,
    aggregateSearchType: actionResolvers.AggregateSearchTypeResolver
  }
};
const resolversInfo = {
  User: ["user", "findFirstUser", "users", "createUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser"],
  Post: ["post", "findFirstPost", "posts", "createPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost"],
  BandPost: ["bandPost", "findFirstBandPost", "bandPosts", "createBandPost", "deleteBandPost", "updateBandPost", "deleteManyBandPost", "updateManyBandPost", "upsertBandPost", "aggregateBandPost"],
  SearchType: ["searchType", "findFirstSearchType", "searchTypes", "createSearchType", "deleteSearchType", "updateSearchType", "deleteManySearchType", "updateManySearchType", "upsertSearchType", "aggregateSearchType"]
};
const relationResolversInfo = {
  User: ["posts", "bandPosts"],
  Post: ["author"],
  BandPost: ["author", "searchTypes"],
  SearchType: ["bandPost"]
};
const modelsInfo = {
  User: ["id", "createdAt", "email", "name", "image"],
  Post: ["id", "createdAt", "title", "body", "userId", "published"],
  BandPost: ["id", "createdAt", "title", "body", "published", "userId"],
  SearchType: ["id", "amount", "instrument", "bandPostId"]
};
const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "email", "name", "image", "posts", "bandPosts"],
  UserOrderByInput: ["id", "createdAt", "email", "name", "image"],
  UserWhereUniqueInput: ["id", "email"],
  PostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "title", "body", "author", "userId", "published"],
  PostOrderByInput: ["id", "createdAt", "title", "body", "userId", "published"],
  PostWhereUniqueInput: ["id"],
  BandPostWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "title", "body", "published", "author", "userId", "searchTypes"],
  BandPostOrderByInput: ["id", "createdAt", "title", "body", "published", "userId"],
  BandPostWhereUniqueInput: ["id"],
  SearchTypeWhereInput: ["AND", "OR", "NOT", "id", "amount", "instrument", "bandPost", "bandPostId"],
  SearchTypeOrderByInput: ["id", "amount", "instrument", "bandPostId"],
  SearchTypeWhereUniqueInput: ["id"],
  UserCreateInput: ["createdAt", "email", "name", "image", "posts", "bandPosts"],
  UserUpdateInput: ["createdAt", "email", "name", "image", "posts", "bandPosts"],
  UserUpdateManyMutationInput: ["createdAt", "email", "name", "image"],
  PostCreateInput: ["createdAt", "title", "body", "published", "author"],
  PostUpdateInput: ["createdAt", "title", "body", "published", "author"],
  PostUpdateManyMutationInput: ["createdAt", "title", "body", "published"],
  BandPostCreateInput: ["createdAt", "title", "body", "published", "author", "searchTypes"],
  BandPostUpdateInput: ["createdAt", "title", "body", "published", "author", "searchTypes"],
  BandPostUpdateManyMutationInput: ["createdAt", "title", "body", "published"],
  SearchTypeCreateInput: ["amount", "instrument", "bandPost"],
  SearchTypeUpdateInput: ["amount", "instrument", "bandPost"],
  SearchTypeUpdateManyMutationInput: ["amount", "instrument"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  BandPostListRelationFilter: ["every", "some", "none"],
  UserRelationFilter: ["is", "isNot"],
  BoolFilter: ["equals", "not"],
  SearchTypeListRelationFilter: ["every", "some", "none"],
  EnumIntrumentFilter: ["equals", "in", "notIn", "not"],
  BandPostRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "connect"],
  BandPostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  BandPostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  UserCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutBandPostsInput: ["create", "connectOrCreate", "connect"],
  SearchTypeCreateNestedManyWithoutBandPostInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutBandPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SearchTypeUpdateManyWithoutBandPostInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  BandPostCreateNestedOneWithoutSearchTypesInput: ["create", "connectOrCreate", "connect"],
  EnumIntrumentFieldUpdateOperationsInput: ["set"],
  BandPostUpdateOneWithoutSearchTypesInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumIntrumentFilter: ["equals", "in", "notIn", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostCreateWithoutAuthorInput: ["createdAt", "title", "body", "published"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  BandPostCreateWithoutAuthorInput: ["createdAt", "title", "body", "published", "searchTypes"],
  BandPostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "title", "body", "userId", "published"],
  BandPostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  BandPostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  BandPostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  BandPostScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "title", "body", "published", "userId"],
  UserCreateWithoutPostsInput: ["createdAt", "email", "name", "image", "bandPosts"],
  UserCreateOrConnectWithoutPostsInput: ["where", "create"],
  UserUpsertWithoutPostsInput: ["update", "create"],
  UserUpdateWithoutPostsInput: ["createdAt", "email", "name", "image", "bandPosts"],
  UserCreateWithoutBandPostsInput: ["createdAt", "email", "name", "image", "posts"],
  UserCreateOrConnectWithoutBandPostsInput: ["where", "create"],
  SearchTypeCreateWithoutBandPostInput: ["amount", "instrument"],
  SearchTypeCreateOrConnectWithoutBandPostInput: ["where", "create"],
  UserUpsertWithoutBandPostsInput: ["update", "create"],
  UserUpdateWithoutBandPostsInput: ["createdAt", "email", "name", "image", "posts"],
  SearchTypeUpsertWithWhereUniqueWithoutBandPostInput: ["where", "update", "create"],
  SearchTypeUpdateWithWhereUniqueWithoutBandPostInput: ["where", "data"],
  SearchTypeUpdateManyWithWhereWithoutBandPostInput: ["where", "data"],
  SearchTypeScalarWhereInput: ["AND", "OR", "NOT", "id", "amount", "instrument", "bandPostId"],
  BandPostCreateWithoutSearchTypesInput: ["createdAt", "title", "body", "published", "author"],
  BandPostCreateOrConnectWithoutSearchTypesInput: ["where", "create"],
  BandPostUpsertWithoutSearchTypesInput: ["update", "create"],
  BandPostUpdateWithoutSearchTypesInput: ["createdAt", "title", "body", "published", "author"],
  PostUpdateWithoutAuthorInput: ["createdAt", "title", "body", "published"],
  BandPostUpdateWithoutAuthorInput: ["createdAt", "title", "body", "published", "searchTypes"],
  SearchTypeUpdateWithoutBandPostInput: ["amount", "instrument"]
};
const outputsInfo = {
  Query: ["findFirstUser", "findManyUser", "aggregateUser", "findUniqueUser", "findFirstPost", "findManyPost", "aggregatePost", "findUniquePost", "findFirstBandPost", "findManyBandPost", "aggregateBandPost", "findUniqueBandPost", "findFirstSearchType", "findManySearchType", "aggregateSearchType", "findUniqueSearchType"],
  Mutation: ["createOneUser", "upsertOneUser", "deleteOneUser", "updateOneUser", "updateManyUser", "deleteManyUser", "createOnePost", "upsertOnePost", "deleteOnePost", "updateOnePost", "updateManyPost", "deleteManyPost", "createOneBandPost", "upsertOneBandPost", "deleteOneBandPost", "updateOneBandPost", "updateManyBandPost", "deleteManyBandPost", "createOneSearchType", "upsertOneSearchType", "deleteOneSearchType", "updateOneSearchType", "updateManySearchType", "deleteManySearchType", "executeRaw", "queryRaw"],
  AggregateUser: ["count", "avg", "sum", "min", "max"],
  AggregatePost: ["count", "avg", "sum", "min", "max"],
  AggregateBandPost: ["count", "avg", "sum", "min", "max"],
  AggregateSearchType: ["count", "avg", "sum", "min", "max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "createdAt", "email", "name", "image", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "email", "name", "image"],
  UserMaxAggregate: ["id", "createdAt", "email", "name", "image"],
  PostCountAggregate: ["id", "createdAt", "title", "body", "userId", "published", "_all"],
  PostAvgAggregate: ["id", "userId"],
  PostSumAggregate: ["id", "userId"],
  PostMinAggregate: ["id", "createdAt", "title", "body", "userId", "published"],
  PostMaxAggregate: ["id", "createdAt", "title", "body", "userId", "published"],
  BandPostCountAggregate: ["id", "createdAt", "title", "body", "published", "userId", "_all"],
  BandPostAvgAggregate: ["id", "userId"],
  BandPostSumAggregate: ["id", "userId"],
  BandPostMinAggregate: ["id", "createdAt", "title", "body", "published", "userId"],
  BandPostMaxAggregate: ["id", "createdAt", "title", "body", "published", "userId"],
  SearchTypeCountAggregate: ["id", "amount", "instrument", "bandPostId", "_all"],
  SearchTypeAvgAggregate: ["id", "amount", "bandPostId"],
  SearchTypeSumAggregate: ["id", "amount", "bandPostId"],
  SearchTypeMinAggregate: ["id", "amount", "instrument", "bandPostId"],
  SearchTypeMaxAggregate: ["id", "amount", "instrument", "bandPostId"],
  User: ["id", "createdAt", "email", "name", "image", "posts", "bandPosts"],
  Post: ["id", "createdAt", "title", "body", "author", "userId", "published"],
  BandPost: ["id", "createdAt", "title", "body", "published", "author", "userId", "searchTypes"],
  SearchType: ["id", "amount", "instrument", "bandPost", "bandPostId"]
};
const argsInfo = {
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  FindUniqueBandPostArgs: ["where"],
  FindFirstBandPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBandPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateBandPostArgs: ["data"],
  DeleteBandPostArgs: ["where"],
  UpdateBandPostArgs: ["data", "where"],
  DeleteManyBandPostArgs: ["where"],
  UpdateManyBandPostArgs: ["data", "where"],
  UpsertBandPostArgs: ["where", "create", "update"],
  AggregateBandPostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  FindUniqueSearchTypeArgs: ["where"],
  FindFirstSearchTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySearchTypeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateSearchTypeArgs: ["data"],
  DeleteSearchTypeArgs: ["where"],
  UpdateSearchTypeArgs: ["data", "where"],
  DeleteManySearchTypeArgs: ["where"],
  UpdateManySearchTypeArgs: ["data", "where"],
  UpsertSearchTypeArgs: ["where", "create", "update"],
  AggregateSearchTypeArgs: ["where", "orderBy", "cursor", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







