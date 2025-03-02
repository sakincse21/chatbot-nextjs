import React from 'react'

const Chatarea = () => {
    return (
        <div className={'w-full h-full flex flex-col justify-end  h-screen'}>
            <div className={'h-full w-full md:w-3/5 mx-auto'}>
                conteent
            </div>
            <div className={'min-h-[80px]  w-full md:w-3/5 bg-base-300 mx-auto px-2 py-5 rounded-box -8 flex justify-center items-center gap-2 m-3'}>
                <label htmlFor={'attachment'} className="btn btn-ghost btn-circle m-2" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="arcs"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                </label>
                <input type="file" name="attachment" id="attachment" className={'hidden'}/>
                <textarea className="w-full flex-grow min-h-full h-auto p-2 resize-y border-2 border-neutral-content rounded focus:outline-none focus:ring-0 resize-none" placeholder="Ask your question..." />
                <label htmlFor={'submitButton'} className={'btn btn-ghost btn-circle m-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
                </label>
                <button type="submit" name={'submitButton'} className={'hidden'}>Send</button>
            </div>
        </div>
    )
}
export default Chatarea
