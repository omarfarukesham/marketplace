import customizedCategoryService from '@/app/_services/customized-category/customized-categories.service';
import CategoriesList from './categories-list';

const Categories = async () => {
  const { data: categories } = await customizedCategoryService.getAll({ filters: { size: 30, status: 'ACTIVE' } });

  return (
    <section className='-mx-10 overflow-x-hidden px-10'>
      <h1 className='text-base font-bold md:mb-2 md:text-xl'>Shop by Categories</h1>

      {categories?.items && <CategoriesList categories={categories?.items} />}
    </section>
  );
};

export default Categories;
