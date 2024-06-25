import posts from "../../constants/data.json";
import './BlogPost.css'
import {Link, useParams} from "react-router-dom";

function BlogPost() {
    console.log(posts.id)

    const {id} = useParams();
    const post = posts.find((post) => post.id === parseInt(id));

    return (
        <div className="blog-post">
                        <h1>{post.title}</h1>
                        <h2>{post.subtitle}</h2>
                        <h4>Geschreven door {post.author} op {post.created}</h4>
            <p>{post.readTime} minuten lezen</p>
                        <p>{post.content}</p>
            <p>{post.comments} reacties - {post.shares} gedeeld</p>
        <Link to="/posts"> Terug naar de overzichtspagina</Link>
        </div>
    );
}

export default BlogPost;