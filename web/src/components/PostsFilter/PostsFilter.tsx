import { Formik, Form, Field } from 'formik';
import React, { useReducer } from 'react';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import { FormWrapper } from '../Forms/FormComponents/FormWrapper.style';
import { H1 } from '../Text/Headline';
import FilterTabs from './FilterTabs';
import * as S from './PostsFilter.style';
import {
  PostsFilterAction,
  usePostsFilterReducer,
} from './usePostsFilterReducer';

const PostsFilter: React.FC = () => {
  const [filter, filterDispatch] = useReducer(usePostsFilterReducer, {
    tabs: [
      { name: 'band', active: true, changeTab: () => updateTab('band') },
      {
        name: 'musician',
        active: false,
        changeTab: () => updateTab('musician'),
      },
    ],
  });

  function updateTab(tabName: string) {
    filterDispatch({
      type: PostsFilterAction.UPDATE_CURRENT_TAB,
      payload: { activeTabName: tabName },
    });
  }

  return (
    <div>
      <H1>Search</H1>
      <FormWrapper>
        <S.FilterWrapper>
          <FilterTabs filterTabs={filter.tabs} />
          <S.FilterForm>
            <Formik
              initialValues={{ instrument: 'guitar' }}
              onSubmit={(values) => console.log(values)}>
              <Form>
                <Field name='instrument' as='select'>
                  <option value='guitar'>Guitar</option>
                  <option value='drums'>Drums</option>
                  <option value='bass'>Bass</option>
                </Field>
                <SecondaryButton label='submit' />
              </Form>
            </Formik>
          </S.FilterForm>
        </S.FilterWrapper>
      </FormWrapper>
    </div>
  );
};

export default PostsFilter;
