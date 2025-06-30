import { MultipleAccordion } from './_components/multi';
import { SingleAccordion } from './_components/single';

const AccordionPage = () => {
  return (
    <div className="flex w-full flex-col p-8">
      <h1 className="mb-6 text-center text-3xl font-bold">Accordion Example</h1>
      <div className="grid w-full grid-cols-2 gap-6">
        <SingleAccordion />
        <MultipleAccordion />
      </div>
    </div>
  );
};
export default AccordionPage;
