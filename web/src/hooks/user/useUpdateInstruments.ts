import {
  UserProfileDocument,
  UserProfileQuery,
  useUpdateUserInstrumentsMutation,
  useUserProfileQuery,
} from '../../generated/codegen_types';

export function useUpdateInstruments() {
  const [updateInstruments] = useUpdateUserInstrumentsMutation();
  const { data } = useUserProfileQuery();
  const userProfile = data.authedUser;

  const handleUpdateInstruments = async (updatedInstrumentIds: number[]) => {
    try {
      updateInstruments({
        variables: { updatedInstrumentIds, userId: userProfile.id },
        update: (store, { data }) => {
          store.writeQuery<UserProfileQuery>({
            query: UserProfileDocument,
            data: {
              authedUser: {
                ...userProfile,
                instruments: data.updateInstruments,
              },
            },
          });
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return {
    handleUpdateInstruments,
  };
}
