import "./CreateBlogPost.css"
import { useForm } from "react-hook-form";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function CreateBlogPost() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState("");
    const navigate = useNavigate();

    const onSubmit= (formData) => {
        const formattedData = {
            title: formData.title,
            subtitle: formData.subtitle,
            content: formData.content,
            author: formData.author,
            created_at: new Date().toISOString(),
            readTime: Math.ceil(formData.content.split(" ").length / 100),
            comments: 0,
            shares: 0,
        };
        setData(JSON.stringify(formattedData));
        console.log('Formatted Data:', formattedData);
        navigate("/");

    };

    return (
        <>
            <h1>Post toevoegen</h1>
            <section className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                Titel
                <input {...register("title", {required: true})} />
                {errors.title && <span>Dit veld is verplicht</span>}

                Subtitle
                <input {...register("subtitle", {required: true})} />
                {errors.subtitle && <span>Dit veld is verplicht</span>}

                Naam en Achternaam
                <input {...register("author", {required: true})} />
                {errors.author && <span>Dit veld is verplicht</span>}

                Blogpost
                <textarea {...register("content", {required: true})} />
                {errors.content && <span>Dit veld is verplicht</span>}

                <button type="submit">
                    toevoegen
                </button>
            </form>
            </section>
            <p>{data}</p>
        </>
    );
}

export default CreateBlogPost;