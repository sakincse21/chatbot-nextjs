import React from 'react'

const Sidebar = () => {
    return (
        <div className="w-[240px] md:w-[400px] h-full bg-base-300">
            <div className={'w-full min-h-full h-full flex flex-col justify-between p-6'}>
                <div className={'w-full h-2/3 flex flex-col justify-start items-start'}>
                    <h1>Hello, Sakin</h1>
                    <details className="collapse collapse-arrow m-0">
                        <summary className="collapse-title">All Chats</summary>
                        <div className="collapse-content text-size-[16px]">
                            Click the "Sign Up" button in the top right corner and follow the registration process.
                        </div>
                    </details>
                </div>
                <div className={'w-full h-1/3 flex flex-col justify-end items-start gap-2'}>
                    <button className={'w-full flex flex-row justify-start items-center gap-2 shadow-none'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className={'stroke-neutral-content'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                        <span className={'text-neutral-content'}>Settings</span>
                    </button>
                    <button className={'w-full flex flex-row justify-start items-center gap-2 shadow-none'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className={'stroke-neutral-content'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        <span className={'text-neutral-content'}>Help</span>
                    </button>
                    <button className={'w-full flex flex-row justify-start items-center gap-2 shadow-none'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" className={'stroke-neutral-content'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                        <span className={'text-neutral-content'}>About</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Sidebar
