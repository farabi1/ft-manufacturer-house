import React from 'react';
import { useForm } from "react-hook-form";


const AddReviews = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://immense-shore-60421.herokuapp.com/reviews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div>
            <h1 className='text-center text-5xl hover:underline font-bold mt-12 mb-2'>Add a Review</h1>

            <form className='flex flex-col items-center mt-8' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" className="input input-bordered input-accent input-lg w-full max-w-xs" {...register("name", { required: true, maxLength: 20 })} />
                <input type="text" placeholder="Review" className="input input-bordered input-lg input-accent w-full max-w-xs my-6" {...register("text")} />
                <input type="text" placeholder="Rating" className="input input-bordered input-lg input-accent w-full max-w-xs" {...register("rate")} />

                <input className='my-6 btn btn-success btn-sm' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddReviews;