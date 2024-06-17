import "./CreateBlogPost.css"
import { useForm } from "react-hook-form";
import {useState} from "react";

function CreateBlogPost() {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");

    return (
        <>
        <h1>Post toevoegen</h1>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                Titel
                <input {...register("title")}  />
                Subtitle
                <input {...register("subtitle")} />
                Naam en Achternaam
                <input
                    {...register("author")}
                />
                Blogpost
                <textarea {...register("content")} />
                <p>{data}</p>
                <button type="submit">
                    toevoegen
                </button>
            </form>
        </>
    );
}

export default CreateBlogPost;