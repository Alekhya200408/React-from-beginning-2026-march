import React from 'react'
import { Outlet,NavLink } from 'react-router-dom'

export default function About() {
    return (
        
        <div className="py-16 bg-black">
            <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-6">
                <div className="py-16 bg-black">
            {/* Your existing UI */}
            
            <h1 className="text-white">About Page</h1>

            {/* 🔥 Nested content will render here */}
            <Outlet />
        </div>
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://4kwallpapers.com/images/walls/thumbs_3t/18695.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                    <li>
                                <NavLink
                                    to='alekhya'
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive? "text-orange-500" : "text-gray-500"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Alekhya
                                </NavLink>
                            </li>
                        <h2 className="text-2xl !text-orange-500 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}