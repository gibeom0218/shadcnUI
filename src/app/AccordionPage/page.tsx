import { MultipleAccordion } from './_components/multi';
import { SingleAccordion } from './_components/single';

const AccordionPage = () => {
  return (
    <main className="flex-grow">
      <h1 className="mb-6 text-center text-3xl font-bold">Accordion Example</h1>
      <div className="grid grid-cols-2 gap-6">
        <SingleAccordion />
        <MultipleAccordion />
      </div>
    </main>
  );
};
export default AccordionPage;
