import "./CreateBlogPost.css"
import { useForm } from "react-hook-form";
import { useState } from "react";

function CreateBlogPost() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState("");

    return (
        <>
            <h1>Post toevoegen</h1>

            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                Titel
                <input {...register("title", { required: true })} />
                {errors.title && <span>Dit veld is verplicht</span>}

                Subtitle
                <input {...register("subtitle", { required: true })} />
                {errors.subtitle && <span>Dit veld is verplicht</span>}

                Naam en Achternaam
                <input {...register("author", { required: true })} />
                {errors.author && <span>Dit veld is verplicht</span>}

                Blogpost
                <textarea {...register("content", { required: true })} />
                {errors.content && <span>Dit veld is verplicht</span>}

                <p>{data}</p>
                <button type="submit">
                    toevoegen
                </button>
            </form>
        </>
    );
}

export default CreateBlogPost;