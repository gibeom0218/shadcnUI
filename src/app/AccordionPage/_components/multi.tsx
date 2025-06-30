import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const MultipleAccordion = () => {
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
