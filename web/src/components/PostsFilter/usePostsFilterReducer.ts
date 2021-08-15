export interface PostsFilterTab {
  name: string;
  active: boolean;
  changeTab: () => void;
}

export interface PostsFilterState {
  tabs: PostsFilterTab[];
}

export interface PostsFilterPayload {
  activeTabName: string;
}

interface PostsFilterReducer {
  type: PostsFilterAction;
  payload?: PostsFilterPayload;
}

export enum PostsFilterAction {
  UPDATE_CURRENT_TAB,
}

export const usePostsFilterReducer = (
  state: PostsFilterState,
  action: PostsFilterReducer
): PostsFilterState => {
  switch (action.type) {
    case PostsFilterAction.UPDATE_CURRENT_TAB:
      if (action.payload && action.payload.activeTabName) {
        const updatedTabs = state.tabs.map((tab) => {
          if (tab.name === action.payload.activeTabName) {
            tab.active = true;
          } else {
            tab.active = false;
          }
          return tab;
        });
        return { ...state, tabs: updatedTabs };
      }

    default:
      return state;
  }
};
