import posts from "../../constants/data.json";
import './BlogPost.css'
import {useParams} from "react-router-dom";

function BlogPost() {
    console.log(posts.id)

    const {id} = useParams();
    const post = posts.find((post) => post.id === parseInt(id));

    return (
        <div className="blog-post">
                        <h1>{post.title}</h1>
                        <h3>{post.author}</h3>
                        <h4>{post.subtitle}</h4>
                        <p>{post.content}</p>
        </div>
    );
}

export default BlogPost;