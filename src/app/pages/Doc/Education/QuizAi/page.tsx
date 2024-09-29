import styles from "../../pages.module.scss";

export default function QuizAiDoc() {
    return (
        <>
            <div className={styles.container}>
                <h1>Quiz AI Documentation</h1>
                <p>
                    Welcome to the Quiz AI documentation! Quiz AI is an intelligent platform designed to create customized quizzes based on user inputs like topic, number of questions, and difficulty level. Once a quiz is submitted, Quiz AI provides an in-depth analysis of your performance, helping you understand your strengths and areas for improvement. This tool is ideal for learners and educators who want to generate dynamic and personalized quizzes.
                </p>

                <h3>Features</h3>
                <p>
                    <strong>Customizable Quizzes:</strong> Generate quizzes tailored to your chosen topic, number of questions, and difficulty level.<br/>
                    <strong>Difficulty Levels:</strong> Select from different difficulty levels such as easy, medium, or hard to match your knowledge or challenge yourself.<br/>
                    <strong>In-depth Analysis:</strong> Receive detailed feedback and performance analysis after quiz submission to improve learning outcomes.<br/>
                    <strong>Topic Flexibility:</strong> Create quizzes on any subject, from general knowledge to specialized fields.<br/>
                    <strong>Real-time Results:</strong> Get instant grading and feedback as soon as you submit the quiz.
                </p>

                <div className={styles.code}>
                    <h1>Prompt</h1>
                    <div className={styles.prompts}>
                        <div className={styles.sec1}>
                            <p>
                                "Create a 10-question quiz on Python programming with medium difficulty."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Generate a quiz with 15 questions about world history at an easy level."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Provide in-depth analysis for a quiz on machine learning fundamentals."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
