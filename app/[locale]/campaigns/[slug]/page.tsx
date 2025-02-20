import { CategoryFiltersType } from '@/app/_config/filters';
import campaignService from '@/app/_services/campaign/campaign.service';
import { SearchParamsType } from '@/app/_types/utility.type';
import { notFound } from 'next/navigation';
import CampaignBody from './_body/body';

export async function generateMetadata({ params }: { params: { slug: string; locale: string } }) {
  const { data: campaign } = await campaignService.get({ slug: params.slug });

  return {
    title: campaign?.name,
    description: campaign?.description,
  };
}

const Campaign = async ({
  params: { slug },
  searchParams,
}: {
  params: { slug: string };
  searchParams: SearchParamsType;
}) => {
  const selectedCategoryId = Number(searchParams.categoryId);

  const filters = {
    page: 0,
    size: 12,
  } as CategoryFiltersType;

  if (selectedCategoryId !== -1 && !isNaN(selectedCategoryId)) {
    filters.categoryId = selectedCategoryId;
  }

  const { data: campaign } = await campaignService.get({ slug, filters });

  if (!campaign) return notFound();

  return <CampaignBody campaign={campaign} filters={filters} slug={slug} />;
};

export default Campaign;
