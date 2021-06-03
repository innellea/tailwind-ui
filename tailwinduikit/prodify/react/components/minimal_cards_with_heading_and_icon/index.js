import React from "react";
function IndexPage() {
    return (
        <>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:pb-10">
                <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg mt-10 xl:-mt-20">
                    <h1 className="text-3xl font-bold w-1/2">Download the app</h1>
                    <div className="flex justify-end w-full items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                            <path
                                d="M26 26.0001V37.1701L29.656 33.5141L32.486 36.3441L24 44.8281L15.514 36.3441L18.344 33.5141L22 37.1701V26.0001H26ZM24 4.00012C27.434 4.00029 30.7482 5.26235 33.3124 7.54636C35.8767 9.83037 37.5122 12.977 37.908 16.3881C40.3966 17.0668 42.5675 18.5983 44.0414 20.7152C45.5152 22.832 46.1983 25.3995 45.9713 27.9689C45.7442 30.5383 44.6214 32.9462 42.7992 34.7718C40.9769 36.5973 38.571 37.7244 36.002 37.9561L36 34.0001C36.0032 30.8544 34.771 27.8332 32.5687 25.587C30.3665 23.3408 27.3702 22.0492 24.2251 21.9902C21.0799 21.9312 18.0374 23.1096 15.7524 25.2716C13.4675 27.4337 12.1228 30.4065 12.008 33.5501L12 34.0001V37.9561C9.43093 37.7248 7.02484 36.5979 5.2023 34.7725C3.37976 32.9471 2.25669 30.5392 2.02938 27.9698C1.80207 25.4003 2.48499 22.8327 3.95877 20.7157C5.43255 18.5987 7.60345 17.0669 10.092 16.3881C10.4874 12.9769 12.1228 9.82994 14.6872 7.54585C17.2515 5.26176 20.5659 3.99985 24 4.00012Z"
                                fill="url(#paint0_linear)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear" x1="24.0003" y1="4.00012" x2="24.0003" y2="44.8281" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F56565" />
                                    <stop offset={1} stopColor="#D53F8C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg xl:-mt-20">
                    <h1 className="text-3xl font-bold w-1/2">Effortless onboarding</h1>
                    <div className="flex justify-end w-full items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                            <path
                                d="M40 40C40 40.5304 39.7893 41.0391 39.4142 41.4142C39.0391 41.7892 38.5304 42 38 42H10C9.46957 42 8.96086 41.7892 8.58579 41.4142C8.21071 41.0391 8 40.5304 8 40V22H2L22.654 3.22396C23.0222 2.88892 23.5022 2.70325 24 2.70325C24.4978 2.70325 24.9778 2.88892 25.346 3.22396L46 22H40V40ZM15 26C15 28.3869 15.9482 30.6761 17.636 32.3639C19.3239 34.0518 21.6131 35 24 35C26.3869 35 28.6761 34.0518 30.364 32.3639C32.0518 30.6761 33 28.3869 33 26H29C29 27.326 28.4732 28.5978 27.5355 29.5355C26.5979 30.4732 25.3261 31 24 31C22.6739 31 21.4021 30.4732 20.4645 29.5355C19.5268 28.5978 19 27.326 19 26H15Z"
                                fill="url(#paint0_linear)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear" x1={24} y1="2.70325" x2={24} y2={42} gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F56565" />
                                    <stop offset={1} stopColor="#D53F8C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg xl:-mt-20">
                    <h1 className="text-3xl font-bold w-10/12">Access from anywhere</h1>
                    <div className="flex justify-end w-full items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                            <path
                                d="M38 12H22C21.4696 12 20.9609 12.2107 20.5858 12.5858C20.2107 12.9609 20 13.4696 20 14V40H8C7.46957 40 6.96086 39.7893 6.58579 39.4142C6.21071 39.0391 6 38.5304 6 38V6C6 5.46957 6.21071 4.96086 6.58579 4.58579C6.96086 4.21071 7.46957 4 8 4H36C36.5304 4 37.0391 4.21071 37.4142 4.58579C37.7893 4.96086 38 5.46957 38 6V12ZM26 16H42C42.5304 16 43.0391 16.2107 43.4142 16.5858C43.7893 16.9609 44 17.4696 44 18V42C44 42.5304 43.7893 43.0391 43.4142 43.4142C43.0391 43.7893 42.5304 44 42 44H26C25.4696 44 24.9609 43.7893 24.5858 43.4142C24.2107 43.0391 24 42.5304 24 42V18C24 17.4696 24.2107 16.9609 24.5858 16.5858C24.9609 16.2107 25.4696 16 26 16Z"
                                fill="url(#paint0_linear)"
                            />
                            <defs>
                                <linearGradient id="paint0_linear" x1={25} y1={4} x2={25} y2={44} gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F56565" />
                                    <stop offset={1} stopColor="#D53F8C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className="bg-white px-6 py-6 text-color f-f-l shadow-lg xl:-mt-20">
                    <h1 className="text-3xl font-bold w-9/12">Build &amp; ship rapidly</h1>
                    <div className="flex justify-end w-full items-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                            <path d="M12.91 38L4 45V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V36C44 36.5304 43.7893 37.0391 43.4142 37.4142C43.0391 37.7893 42.5304 38 42 38H12.91ZM22.586 24.242L17.636 19.292L14.808 22.122L22.586 29.9L33.9 18.586L31.072 15.758L22.586 24.242Z" fill="url(#paint0_linear)" />
                            <defs>
                                <linearGradient id="paint0_linear" x1={24} y1={6} x2={24} y2={45} gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#F56565" />
                                    <stop offset={1} stopColor="#D53F8C" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndexPage;
