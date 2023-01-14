// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import Contact from "./Contact";

// const ContactEmail = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_1y3xwfi",
//         "template_asy4jli",
//         form.current,
//         "6nMFdt75oV_PUO3gpvOk_"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           console.log("message sent successfully");
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <>
//       <Contact>
//         <form ref={form} onSubmit={sendEmail}>
//           <label>Name</label>
//           <input type="text" name="to_name" />
//           <label>Email</label>
//           <input type="email" name="from_name" />
//           <label>Subject</label>
//           <input type="subject" name="subject" />
//           <label>Message</label>
//           <textarea name="message" />
//           <input type="submit" value="Send" />
//         </form>
//       </Contact>
//     </>
//   );
// };

// export default ContactEmail;
