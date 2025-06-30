import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const SingleAccordion = () => {
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
