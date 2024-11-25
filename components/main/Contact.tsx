"use client"
import React from "react";

function Contact(){

    const onSubmit = async (event:any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bdfe10fd-6d78-4135-808b-419544a164c8");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert("Message sent successfully !!")
        }
    }

    return(
        <div className="connect">
        <section id="Contact" className="z-[99] w-[98%] border border-[#2A0E61]">
            <div className="contact">
                <div>
                    <h2>Contact Me</h2>
                    <p> Have questions, ideas, or opportunities to share ? I&apos;d love to hear from you ! and I&apos;ll get back to you as soon as possible.</p>
                </div>
                    
                <form onSubmit={onSubmit}>
                    <label>Name :</label>
                    <input type="text" name="name" placeholder="Enter Name" id="name" required/>
                    <label>Email :</label>
                    <input type="email" name="email" placeholder="Enter email" id="email" required/>
                    <label>Message :</label>
                    <textarea className="p-3 border rounded-md" name="message" placeholder="Message" id="text" required />
                    <div style={{width:"100%"}} className="flex justify-center mt-5"> 
                   <button type="submit" className="text-white button-primary rounded-lg max-w-[200px] px-10 py-2">Send</button>
                    </div>
                </form>
            </div>
        </section>
        </div>
    )
}

export default Contact