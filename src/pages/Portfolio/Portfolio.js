import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';


const Portfolio = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center text-5xl hover:underline font-bold mt-12 mb-2'>My Portfolio</h1>
            <div className="flex justify-center my-20">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="" alt="FT" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            FT Manufacturer House
                            <div class="badge badge-secondary">Project</div>
                        </h2>
                        <p className=' my-5'>As we introduce ourself Always a learner, is very keen  to add value at any project i work on whether commercial or private. Pro-active researcher for developing a web application.</p>
                        <div class="card-actions justify-start">
                            <div class="badge badge-outline py-3">HTML</div>
                            <div class="badge badge-outline py-3">CSS</div>
                            <div class="badge badge-outline py-3">JavaScript</div>
                            <div class="badge badge-outline py-3">React js</div>
                            <div class="badge badge-outline py-3">Node js</div>
                            <div class="badge badge-outline py-3">Express js</div>
                            <div class="badge badge-outline py-3">MongoDB</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;