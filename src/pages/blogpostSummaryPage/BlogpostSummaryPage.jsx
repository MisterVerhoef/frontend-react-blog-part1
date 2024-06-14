import './BlogpostSummaryPage.css';
import posts from "../../constants/data.json";

function BlogpostSummaryPage() {


    console.log(posts)
    console.log(posts.title)
    return (
        <div>
            <main>
            <h1>BlogpostSummaryPage</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <h3>{post.author}</h3>
                        <h4>{post.subtitle}</h4>
                        <p>{post.content}</p>
                    </li>

                ))}
            </ul>
            </main>
        </div>
    );
}

export default BlogpostSummaryPage;