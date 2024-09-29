"use client"
import React, { useState } from 'react';
import Sidebar from "@/app/components/sidebar/page";
import ComponentsAiDoc from "./Coding/DjangoAI/page";
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

const Content = ({ activeDoc }) => {
  const ActiveComponent = docs.find(doc => doc.docname === activeDoc)?.component;
  return ActiveComponent ? <ActiveComponent /> : <div>Select a document to view its content</div>;
};

const SidebarWithContent = () => {
  const [activeDoc, setActiveDoc] = useState(docs[0].docname);

  return (
    <div className={styles.container}>
      <Sidebar docs={docs} setActiveDoc={setActiveDoc} activeDoc={activeDoc} />
      <div className={styles.content}>
        <Content activeDoc={activeDoc} />
      </div>
    </div>
  );
};

export default SidebarWithContent;