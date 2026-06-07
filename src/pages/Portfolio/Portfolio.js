import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import API_BASE from '../../api';

const Portfolio = () => {
    const [projectImg, setProjectImg] = useState('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80');

    useEffect(() => {
        fetch(`${API_BASE}/purchase`)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    // Get first seeded machinery image from DB products catalog
                    const firstProduct = data[0];
                    const imgUrl = firstProduct.img || (firstProduct.images && firstProduct.images[0]);
                    if (imgUrl) {
                        setProjectImg(imgUrl);
                    }
                }
            })
            .catch(err => console.log('Error fetching product image for portfolio:', err));
    }, []);

    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-5xl hover:underline font-bold mt-12 mb-2'>My Portfolio</h1>
            <div className="flex justify-center my-20">
                <div className="card w-96 bg-base-100 shadow-xl overflow-hidden rounded-2xl border border-slate-100">
                    <figure className="h-52 bg-slate-50">
                        <img 
                            className="w-full h-full object-cover" 
                            src={projectImg} 
                            alt="FT Project Tool Visual" 
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            FT Manufacturer House
                            <div className="badge badge-secondary">Project</div>
                        </h2>
                        <p className=' my-5 text-slate-500 text-sm leading-relaxed'>
                            As we introduce ourself Always a learner, is very keen to add value at any project i work on whether commercial or private. Pro-active researcher for developing a web application.
                        </p>
                        <div className="card-actions justify-start">
                            <div className="badge badge-outline py-3">HTML</div>
                            <div className="badge badge-outline py-3">CSS</div>
                            <div className="badge badge-outline py-3">JavaScript</div>
                            <div className="badge badge-outline py-3">React js</div>
                            <div className="badge badge-outline py-3">Node js</div>
                            <div className="badge badge-outline py-3">Express js</div>
                            <div className="badge badge-outline py-3">MongoDB</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;