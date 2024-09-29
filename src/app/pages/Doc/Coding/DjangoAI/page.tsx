import styles from "../../pages.module.scss"
export default function ComponentsAiDoc(){
    return <>
    <div className={styles.container}>
    <h1>AI Django Documentation</h1>
    <p>Welcome to the AI Django documentation! This project empowers developers to generate, test, and validate Django application code seamlessly. With advanced AI capabilities, you can effortlessly export your work to PDF and validate API endpoints.</p>
    <h3>Features</h3>
    <p>
Code Generation: Generate Django application code based on user prompts.
Testing: Automatically create tests for your generated code.
PDF Export: Export your code and documentation to PDF format for easy sharing.
API Validation: Validate API endpoints to ensure they function as expected.</p>
 <div className={styles.code}>
    <h1>Prompt</h1>
    <div className={styles.prompts}>
    <div className={styles.sec1}>
    <p>
 "Create a Django model for a blog post with title, content, and published_date fields."
</p> </div>
<div className={styles.sec1}>
    <p>
 "Create a Django model for a shopping on a store, content, and user's record."
</p> </div> 
<div className={styles.sec1}>
    <p>
 "Create a Django model for a blog post with title, content, and published_date fields."
</p> </div>
    </div>
    </div>
    </div>
    </>
}