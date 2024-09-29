import styles from "../../pages.module.scss";

export default function HtmlCssGeneratorDoc() {
    return (
        <>
            <div className={styles.container}>
                <h1>HTML/CSS Code Generator Documentation</h1>
                <p>
                    Welcome to the HTML/CSS Code Generator documentation! This tool empowers users to generate HTML and CSS code seamlessly based on their text prompts. With live preview capabilities, you can instantly see the results of your code. Additionally, choose from various style modes like retro or modern, and select different CSS methodologies to match your design preferences.
                </p>
                
                <h3>Features</h3>
                <p>
                    <strong>Code Generation:</strong> Generate HTML and CSS code based on user-provided text prompts.<br/>
                    <strong>Live Preview:</strong> Instantly view a live preview of the generated code as you create it.<br/>
                    <strong>Style Modes:</strong> Choose from different style modes such as retro, modern, minimalist, and more to customize the appearance of your components.<br/>
                    <strong>CSS Methods:</strong> Select various CSS methodologies like Flexbox, Grid, or traditional positioning to structure your designs effectively.
                </p>

                <div className={styles.code}>
                    <h1>Prompt</h1>
                    <div className={styles.prompts}>
                        <div className={styles.sec1}>
                            <p>
                                "Create a modern responsive navigation bar with a logo and menu items."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Generate a retro-styled card component with an image, title, and description."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Design a CSS Grid layout for a photo gallery with hover effects."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
