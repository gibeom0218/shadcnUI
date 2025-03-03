import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const SingleAccordion = () => {
  return (
    <div className="w-full rounded-lg border p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Single Type Accordion</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is React?</AccordionTrigger>
          <AccordionContent>
            React is a JavaScript library for building user interfaces.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Why use Next.js?</AccordionTrigger>
          <AccordionContent>
            Next.js enables server-side rendering and static site generation.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const MultipleAccordion = () => {
  return (
    <div className="w-full rounded-lg border p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Multiple Type Accordion</h2>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Tailwind CSS?</AccordionTrigger>
          <AccordionContent>
            Tailwind CSS is a utility-first CSS framework.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is Zustand?</AccordionTrigger>
          <AccordionContent>
            Zustand is a small, fast, and scalable state management library.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const AccordionPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="mb-6 text-center text-3xl font-bold">Accordion Example</h1>
      <div className="grid grid-cols-2 gap-6">
        <SingleAccordion />
        <MultipleAccordion />
      </div>
    </div>
  );
};
export default AccordionPage;
