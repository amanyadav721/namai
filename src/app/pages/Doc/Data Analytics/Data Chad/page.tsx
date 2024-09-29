import styles from "../../pages.module.scss";

export default function DataChadDoc() {
    return (
        <>
            <div className={styles.container}>
                <h1>Data Chad Documentation</h1>
                <p>
                    Welcome to the Data Chad documentation! Data Chad is an AI-powered platform that connects with various databases such as MongoDB, Postgres, Databricks, Snowflake, and even CSV files. It allows you to query your data seamlessly and interact with it in a conversational manner. Whether you're managing large datasets or running complex queries, Data Chad simplifies the process and enhances productivity.
                </p>

                <h3>Features</h3>
                <p>
                    <strong>Multi-Database Support:</strong> Connect with multiple databases, including MongoDB, Postgres, Databricks, Snowflake, and CSV.<br/>
                    <strong>Data Queries:</strong> Execute custom queries on connected databases using simple inputs for host, username, password, and query.<br/>
                    <strong>Conversational Interface:</strong> Chat with your data to get insights, run queries, and retrieve information effortlessly.<br/>
                    <strong>Seamless Integration:</strong> Quickly switch between databases and CSV files without needing additional setup.<br/>
                    <strong>Secure Connections:</strong> Ensure secure connections using encrypted credentials for database access.
                </p>

                <div className={styles.code}>
                    <h1>Prompt</h1>
                    <div className={styles.prompts}>
                        <div className={styles.sec1}>
                            <p>
                                "Connect to MongoDB with host: db.mongodb.com, username: user123, password: *****."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Run a query on Postgres: SELECT * FROM customers WHERE status = 'active'."
                            </p>
                        </div>
                        <div className={styles.sec1}>
                            <p>
                                "Load data from CSV file: /path/to/data.csv and analyze sales trends."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
