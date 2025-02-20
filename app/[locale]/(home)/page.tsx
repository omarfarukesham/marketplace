import { notFound } from 'next/navigation';
import Body from './_body/body';
import { getHomeComponents } from './home.service';

export default async function Home() {
  const homeComponents = await getHomeComponents();

  if (!homeComponents) return notFound();

  return homeComponents.Body && <Body />;
}
