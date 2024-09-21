"use client";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./library.module.scss";
import events from "../services/firebase/firebase";
interface AiLibrary {
  txt: string;
}

const data = [
  {
    category: "Coding",
    items: [
      {
        id: 1,
        title: "Django AI",
        description:
          "Generate and test Django application code with AI, export to PDF, and validate API endpoints seamlessly",
        iframeSrc: "https://namaai-djangoai.hf.space",
      },
      {
        id: 2,
        title: "Componet AI HTML/CSS",
        description:
          "AI Component Generator creates HTML, CSS, Tailwind CSS, Vanilla CSS, or SCSS components instantly based on user prompts.",
        iframeSrc: "https://namaai-component-generator.hf.space",
      },
    ],
  },
  {
    category: "Data-Analysis",
    items: [
      {
        id: 1,
        title: "PDF AI",
        description:
          "PDF AI allows users to chat with multiple PDFs, view chat history, and interact with documents seamlessly.",
        iframeSrc: "https://namaai-datachat.hf.space",
      },
    ],
  },
  {
    category: "Lifestyle",
    items: [
      {
        id: 1,
        title: "Quiz Ai",
        description:
          "Quiz AI is a platform that uses artificial intelligence to create personalized quizzes for students.",
        iframeSrc: "https://namaai-shikshamiraz.hf.space",
      },
      {
        id: 2,
        title: "Image Generation AI",
        description:
          "This AI generates free images from text, offering users creative visuals quickly and easily for various needs.",
        iframeSrc: "https://namaai-image-generation.hf.space",
      },
    ],
  },
  {
    category: "Others",
    items: [
      {
        id: 1,
        title: "AI Gif maker",
        description: "Ai based gif maker ",
        iframeSrc: "https://namaai-gif-ai.hf.space",
      },
    ],
  },
];

export default function AiLibrary() {
  const router = useRouter(); // Initialize useRouter

  const handleNavigation = (title: string, iframeSrc: any) => {
    const encodedTitle = encodeURIComponent(title);
    const encodedIframeSrc = encodeURIComponent(iframeSrc);
    events("aiapp_choose", {
      ai_name: title,
    });
    router.push(`/ai_library/${encodedTitle}/${encodedIframeSrc}`);
  };

  return (
    <>
      <div>
        <div className={styles.header}>
          <h1>Welcome to AI Library</h1>
        </div>

        {data.map((section, index) => (
          <div className={styles.container}>
            <h1>{section.category}</h1>

            <div key={index}>
              <div className={styles[section.category.toLowerCase()]}>
                {section.items.map((item) => (
                  <div className={styles.b1} key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <button
                      onClick={() =>
                        handleNavigation(item.title, item.iframeSrc)
                      }
                    >
                      Activate
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
