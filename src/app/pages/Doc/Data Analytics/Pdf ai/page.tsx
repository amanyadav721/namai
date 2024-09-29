import styles from "../../pages.module.scss";

export default function PdfAiDoc() {
    return (
        <>
            <div className={styles.container}>
                <h1>PDF AI Documentation</h1>
                <p>
                    Welcome to the PDF AI documentation! PDF AI enables users to interact with multiple PDF documents effortlessly. Chat with your PDFs, view your chat history, and engage with your documents seamlessly. Whether you're analyzing reports, studying research papers, or managing eBooks, PDF AI provides an intuitive interface to enhance your productivity and document interaction.
                </p>
                
                <h3>Features</h3>
                <p>
                    <strong>Multi-PDF Chat:</strong> Engage in conversations with multiple PDF documents simultaneously.<br/>
                    <strong>Chat History:</strong> Access and review your past interactions with each PDF.<br/>
                    <strong>Document Interaction:</strong> Highlight, annotate, and extract information directly within your PDFs.<br/>
                    <strong>Live Preview:</strong> See real-time updates of your interactions and annotations on your PDFs.<br/>
                    <strong>Style Modes:</strong> Choose from various style modes like retro, modern, minimalist, and more to customize your interface.<br/>
                    <strong>CSS Methodologies:</strong> Select different CSS methods such as Flexbox, Grid, or traditional positioning to structure your layouts effectively.
                </p>

                <div className={styles.code}>
                    <h1>Prompt</h1>
                    <div className={styles.prompts}>
                        <div className={styles.sec1}>
                            <p>
                                "Summarize the key points from the latest financial report PDF."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Highlight all instances of the term 'machine learning' in this research paper."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Create annotations for the introduction section of this eBook."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
