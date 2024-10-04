  "use client";
  import styles from "./library.module.scss";
  import events from "../services/firebase/firebase";

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
          title: "Componet Generator",
          description:
            "AI Component Generator creates HTML, CSS, Tailwind CSS, JSX,TSX instantly based on user prompts.",
          iframeSrc: "https://namaai-compoai.hf.space",
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
        {
          id: 2,
          title: "Data Chad",
          description:
            "AI platform connects with MongoDB, Postgres, Databricks, Snowflake, and CSV, enabling seamless data queries and chat.",
          iframeSrc: "https://nama-ai-datachad.streamlit.app/#data-chad",
        },
      ],
    },
    {
      category: "Education",
      items: [
        {
          id: 1,
          title: "Quiz Ai",
          description:
            "Quiz AI is a platform that uses artificial intelligence to create personalized quizzes for students.",
          iframeSrc: "https://namaai-shikshamiraz.hf.space",
        },
      ],
    },
    {
      category: "Productivity",
      items: [
        {
          id: 1,
          title: "Namah AI",
          description:
            "Namah Ai is assistant chatbot for better and accurate response with capabilites of major llm's",
          iframeSrc: "https://namaai-namahai.hf.space",
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
  ];

  export default function AiLibrary() {
    const handleNavigation = (iframeSrc: string) => {
      events("aiapp_choose", {
        ai_name: iframeSrc,
      });
      window.location.href = iframeSrc; // Redirects to the external URL
    };

    return (
      <div>
        <meta name="google-adsense-account" content="ca-pub-4742312301717342"/>
        <div className={styles.header}>
          <h1>Welcome to AI Library</h1>
        </div>

        {data.map((section, index) => (
          <div className={styles.container} key={index}>
            <h1>{section.category}</h1>

            <div className={styles[section.category.toLowerCase()]}>
              {section.items.map((item) => (
                <div className={styles.b1} key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <button onClick={() => handleNavigation(item.iframeSrc)}>
                    Activate
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
