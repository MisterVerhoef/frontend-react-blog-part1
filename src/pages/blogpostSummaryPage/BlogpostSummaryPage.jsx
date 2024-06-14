import './BlogpostSummaryPage.css';
import posts from "../../constants/data.json";

function BlogpostSummaryPage() {


    console.log(posts)
    console.log(posts.title)
    return (
        <div>
            <h1>Bekijk alle 17 post op het platform</h1>

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
        </div>
    );
}

export default BlogpostSummaryPage;