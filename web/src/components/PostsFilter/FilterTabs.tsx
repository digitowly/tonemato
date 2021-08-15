import * as S from './PostsFilter.style';
import { PostsFilterTab } from './usePostsFilterReducer';

interface FilterTabsProps {
  filterTabs: PostsFilterTab[];
}

const FilterTabs: React.FC<FilterTabsProps> = ({ filterTabs }) => {
  return (
    <S.FilterTabs>
      {filterTabs.map((filterTab) => (
        <S.FilterTab
          key={filterTab.name}
          active={filterTab.active}
          onClick={filterTab.changeTab}>
          {filterTab.name}
        </S.FilterTab>
      ))}
    </S.FilterTabs>
  );
};

export default FilterTabs;
