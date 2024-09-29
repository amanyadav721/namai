import styles from "../../pages.module.scss";

export default function ImageGenerationAiDoc() {
    return (
        <>
            <div className={styles.container}>
                <h1>Image Generation AI Documentation</h1>
                <p>
                    Welcome to the Image Generation AI documentation! Image Generation AI is an innovative platform that creates stunning images based on user prompts. Simply describe the image you want to generate, and our AI technology will produce high-quality visuals tailored to your specifications. Whether you need art for a project, concept designs, or unique graphics, Image Generation AI makes it effortless and fun to visualize your ideas.
                </p>

                <h3>Features</h3>
                <p>
                    <strong>Prompt-Based Generation:</strong> Generate images by providing detailed prompts describing your desired visuals.<br/>
                    <strong>High-Quality Outputs:</strong> Receive high-resolution images suitable for various applications.<br/>
                    <strong>Diverse Styles:</strong> Choose from different artistic styles, such as realism, abstract, or cartoonish, to match your vision.<br/>
                    <strong>Instant Preview:</strong> View your generated images instantly and make adjustments as needed.<br/>
                    <strong>Customizable Parameters:</strong> Fine-tune parameters like color schemes, dimensions, and aspect ratios to create the perfect image.
                </p>

                <div className={styles.code}>
                    <h1>Prompt</h1>
                    <div className={styles.prompts}>
                        <div className={styles.sec1}>
                            <p>
                                "Generate a futuristic city skyline at sunset."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Create an abstract painting with vibrant colors and swirling patterns."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Produce a cartoon-style cat playing with a ball of yarn."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
