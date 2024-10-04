"use client"; // Required for client components in Next.js

import React, { useState } from "react";
import Sidebar from "../../components/sidebar/sidebar"; // Adjust path as necessary
import ComponentsAiDoc from "./Coding/DjangoAI/page"; // Ensure these paths are correct
import HtmlCssGeneratorDoc from "./Coding/ComponentAI/page";
import PdfAiDoc from "./Data Analytics/Pdf ai/page";
import DataChadDoc from "./Data Analytics/Data Chad/page";
import QuizAiDoc from "./Education/QuizAi/page";
import ImageGenerationAiDoc from "./Productivity/ImageAI/page";
import styles from "./doc.module.scss";

const docs = [
  { docname: "Django Ai", component: ComponentsAiDoc },
  { docname: "HTML/CSS Component Ai", component: HtmlCssGeneratorDoc },
  { docname: "PDF Ai", component: PdfAiDoc },
  { docname: "DataChadd", component: DataChadDoc },
  { docname: "Quiz Ai", component: QuizAiDoc },
  { docname: "Image Ai", component: ImageGenerationAiDoc },
];

const Content: React.FC<{ activeDoc: string }> = ({ activeDoc }) => {
  const ActiveComponent = docs.find((doc) => doc.docname === activeDoc)?.component;

  return ActiveComponent ? <ActiveComponent /> : <div>Select a document to view its content</div>;
};

const SidebarWithContent: React.FC = () => {
  const [activeDoc, setActiveDoc] = useState(docs[0].docname); // Initial active document

  return (
    <div className={styles.container}>
      <meta name="google-adsense-account" content="ca-pub-4742312301717342"/>
      <Sidebar docs={docs} setActiveDoc={setActiveDoc} activeDoc={activeDoc} />
      <div className={styles.content}>
        <Content activeDoc={activeDoc} />
      </div>
    </div>
  );
};

export default SidebarWithContent;
