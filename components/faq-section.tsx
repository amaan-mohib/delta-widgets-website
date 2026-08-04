import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    {
      category: "General Use",
      questions: [
        {
          question: "Do I need to know coding to use Delta Widgets?",
          answer:
            "Nope! You can create widgets with the drag-and-drop builder. But if you know HTML/CSS/JS, you can unlock even more customization.",
        },
        {
          question: "Can I use existing websites as widgets?",
          answer:
            "Yes! You can display a custom HTML page or even embed a live URL directly as a widget.",
        },
        {
          question: "Does it slow down my PC?",
          answer:
            "No. Delta Widgets is built with Tauri + Rust, making it lightweight and efficient compared to older widget frameworks.",
        },
        {
          question: "Can I share widgets I make?",
          answer:
            "Yes! Widgets can be exported and shared as templates so others can use or customize them.",
        },
      ],
    },
    {
      category: "Comparisons",
      questions: [
        {
          question: "How is this different from Rainmeter?",
          answer:
            "Rainmeter is powerful but requires manual configs and a steep learning curve. Delta Widgets offers a modern, drag-and-drop experience, dynamic data, and flexible HTML/CSS styling while staying lightweight.",
        },
        {
          question: "Why not just use Rainmeter skins?",
          answer:
            "Rainmeter skins are great but limited to Rainmeter's scripting system. Delta Widgets lets you use modern web standards, giving you more creative freedom and easier customization.",
        },
        {
          question: "Isn't WebView just bloat?",
          answer:
            "Not with Tauri. Delta Widgets uses the system's WebView, not a bundled browser. That means it's lightweight, secure, and future-proof, while giving you the flexibility of HTML/CSS/JS.",
        },
      ],
    },
    {
      category: "Features & Data",
      questions: [
        {
          question: "What kind of dynamic data can I use?",
          answer:
            "Out of the box, you can add time, system info (CPU/RAM/etc.), currently playing media, and custom CSS/expressions. More sources will be added over time.",
        },
        {
          question: "Can I run scripts inside widgets?",
          answer:
            "Yes, with expressions and variables, you can embed dynamic content, format text, and even make widgets react to system changes.",
        },
        {
          question: "Are there pre-made widgets I can use?",
          answer:
            "Yes! You can start with ready-made templates or build your own from scratch.",
        },
      ],
    },
    {
      category: "Platform & Future",
      questions: [
        {
          question: "Is this Windows-only?",
          answer:
            "For now, yes. But because Delta Widgets is built with Tauri, support for Linux and macOS is planned for the future.",
        },
        {
          question: "Will it always be free?",
          answer:
            "The base app will remain free to use. Premium templates and add-ons may be introduced later.",
        },
        {
          question: "Is it safe to run?",
          answer:
            "Yes. Tauri apps are secure by design, with limited API access and strong sandboxing.",
        },
      ],
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Delta Widgets
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-border rounded-lg px-4 last:border-b">
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
