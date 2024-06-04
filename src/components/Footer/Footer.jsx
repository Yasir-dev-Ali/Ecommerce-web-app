import React from 'react'

const Footer = () => {
  return (
    <>
  {/* complete the footer section designe  in tailwind css*/}
    <footer class="bg-gray-800 py-20 mt-20">
        <div class="container mx-auto px-6">
            <div class="lg:flex">
                <div class="w-full lg:w-2/5 -mx-6">
                    <div class="px-6">
                        <div>
                            <a href="#" class="text-xl font-bold text-white">Brand</a>
                        </div>
                        <p class="max-w-md mt-2 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi.,</p>
                        <div class="flex mt-4 -mx-2">
                            <a href="#" class="mx-2 text-gray-100 hover:text-gray-400">
                                <svg viewBox="0 0 512 512" class="h-4 w-4 fill-current">
                                    <path
                                        d="M503.5 256.7c0-136.9-111.1-248-248-248s-248 111.1-248 248c0 123.9 91.8 226.2 211.1 244.2-3.2 28.7-11.1 53.3-22.3 75.8-2.7 6.7-9.8 8.9-16.6 6.2-8.9-3.6-39.6-13.5-57.6-19.3-18.6-6-37.8-11.9-57.3-11.9-19.5 0-38.7 5.9-57.3 11.9-18 5.8-48.7 15.7-57.6 19.3-6.8 2.7-13.9.5-16.6-6.2-11.2-22.5-19.1-47.1-22.3-75.8 119.3-18 211.1-120.3 211.1-244.2z">
                                    </path>
                                </svg>
                            </a>
                            <a href="#" class="mx-2 text-gray-100 hover:text-gray-400">
                                <svg
                                    viewBox="0 0 512 512"
                                    class="h-4 w-4 fill-current">
                                    <path
                                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm135 168h-40v-40c0-22-18-40-40-40h-40c-22 0-40 18-40 40v40h-40c-22 0-40 18-40 40v40c0 22 18 40 40 40h40v40c0 22 18 40 40 40h40c22 0 40-18 40-40v-40h40c22 0 40-18 40-40v-40c0-22-18-40-40-40z">
                                    </path>
                                </svg>
                            </a>
                            <a href="#" class="mx-2 text-gray-100 hover:text-gray-400">
                                <svg
                                    viewBox="0 0 512 512"
                                    class="h-4 w-4 fill-current">
                                    <path
                                        d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 60c28.7 0 55.4 11.2 75.5 31.5 20.3 20.1 31.5 46.8 31.5 75.5s-11.2 55.4-31.5 75.5c-20.1 20.3-46.8 31.5-75.5 31.5s-55.4-11.2-75.5-31.5C75.2 171.4 64 144.7 64 116s11.2-55.4 31.5-75.5C200.6 79.2 227.3 68 256 68zm0 376c-58.7 0-109.1-31.6-136.8-78.6 17.3-26.1 46.1-43.4 78.8-46.6 7.5 4.5 15.9 8.4 24.9 11.6 20.7 7.8 43.7 11.7 67.9 11.7 24.2 0 47.2-3.9 67.9-11.7 9-3.2 17.4-7.1 24.9-11.6 32.7 3.2 61.5 20.5 78.8 46.6-27.7 46.9-78.1 78.6-136.8 78.6z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="mt-6 lg:mt-0 lg:w-3/5">
                    <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                        <div>
                            <h3 class="text-white
                            font-medium">Services</h3>
                            <ul class="mt-2 space
                            -y-2">
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Web Design</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Development</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">SEO</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white
                            font-medium">About</h3>
                            <ul class="mt-2 space
                            -y-2">
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Company</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Team</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white
                            font-medium">Contact</h3>
                            <ul class="mt-2 space
                            -y-2">
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Support</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-white
                            font-medium">Blog</h3>

                            <ul class="mt-2 space
                            -y-2">
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Technology</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Fashion</a>
                                </li>
                                <li>
                                    <a href="#" class="text-gray-400
                                    hover:text-gray-100">Health</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-6 border-t border-gray-700 py-6">
            <div class="flex justify-between container mx-auto px-6">
                <div class="text-center text-sm text-gray-400">All rights reserved. © 2021 Brand</div>
            </div>
        </div>
          


    </footer>


    </>
  )
}

export default Footer