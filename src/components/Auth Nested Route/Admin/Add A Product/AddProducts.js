import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://immense-shore-60421.herokuapp.com/purchase`;
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
            <h1 className='text-center text-5xl hover:underline font-bold mt-12 mb-2'>Add Some Products For you Customer</h1>

            <form className='flex flex-col items-center mt-8' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Image URL" className="input input-bordered input-lg input-accent w-full max-w-xs my-6" {...register("img")} />

                <input type="text" placeholder="Name" className="input input-bordered input-lg input-accent w-full max-w-xs" {...register("name", { required: true, maxLength: 20 })} />

                <input type="text" placeholder="Text" className="input input-bordered input-lg input-accent w-full max-w-xs my-6" {...register("text")} />

                <input type="number" placeholder="Rate" className="input input-bordered input-lg input-accent w-full max-w-xs" {...register("rate")} />

                <input type="number" placeholder="Minorder" className="input input-bordered input-lg input-accent w-full max-w-xs my-6" {...register("minorder")} />

                <input type="number" placeholder="Availquantity" className="input input-bordered input-lg input-accent w-full max-w-xs" {...register("availquantity")} />

                <input type="number" placeholder="Price" className="input input-bordered input-lg input-accent w-full max-w-xs my-6" {...register("price")} />

                <input className='my-6 btn btn-success ' type="submit" value="Add Products" />
            </form>
        </div>
    );
};

export default AddProducts;