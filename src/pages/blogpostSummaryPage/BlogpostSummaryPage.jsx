import './BlogpostSummaryPage.css';
import posts from "../../constants/data.json";
import {Link} from "react-router-dom";

function BlogpostSummaryPage() {
    console.log(posts);


    return (
        <div>
            <h1>Bekijk alle {posts.length} post op het platform</h1>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link> ({post.author})
                        </h2>
                        <p>{post.comments} reacties - {post.shares} gedeeld</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogpostSummaryPage;