import MainSearchForm from '@/components/main-search-form';
import MainTopMeals from '@/components/main-top-meals';
import MainCategorySwitch from '@/components/main-category-switch';
import MainCategoryMeals from '@/components/main-category-meals';

export default function Home() {
  return (
    <>
      <MainSearchForm />
      <MainTopMeals />
      <MainCategorySwitch />
      <MainCategoryMeals />
    </>
  );
}
