import React from "react";

function Contact(){
    return(
        <div className="connect">
        <section id="Contact" className="z-[99] w-[80%] border border-[#2A0E61]">
            <div className="contact">
                <div>
                    <h2>Contact Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam dicta esse minima. Ea adipisci </p>
                </div>
                    
                <form>
                    <label>Name :</label>
                    <input type="text" placeholder="Enter Name" id="name" required/>
                    <label>Email :</label>
                    <input type="email" placeholder="Enter email" id="email" required/>
                    <label>Message :</label>
                    <input type="text" placeholder="Message" id="text" required />
                    <div style={{width:"100%"}} className="flex justify-center"> 
                   <button className="text-white button-primary rounded-lg max-w-[200px] px-10 py-2">Send</button>
                    </div>
                </form>
            </div>
        </section>
        </div>
    )
}

export default Contact