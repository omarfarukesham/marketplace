import Accordion from '@/app/_components/ui/accordion';

const Faq = () => {
  return (
    <div className='pt-2'>
      <Accordion
        title='How to get help before I buy?'
        answer='For other questions on our policies or other topics, we recommend that you browse our Support Center where we answer our customers most common questions. Happy shopping!'
      />
      <Accordion title='How to search for items on Alipo?' answer='I like to use iOS.' />
      <Accordion title='How to purchase an item on Alipo?' answer='I like to use iOS.' />
      <Accordion title='I received an email about an order I did not place' answer='I like to use iOS.' />
      <Accordion title='How to follow shops/merchandise partners' answer='I like to use iOS.' />
      <Accordion title='Tips for buying safely on Alipo' answer='I like to use iOS.' />
      <Accordion title='Does Alipo support drop shipping?' answer='I like to use iOS.' />
    </div>
  );
};

export default Faq;
