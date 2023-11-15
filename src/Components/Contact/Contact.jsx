import './Contact.css'


const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div className="section-intro">
                    <div>
                        <h5>CONTACT</h5>
                        <h1>I'd Love To Hear From You.</h1>
                        <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
                    </div>
                </div>

                <form action="https://getform.io/f/70822cf8-bafa-4698-9822-46d4eb9a7e87" method="POST">
                    <div className="form-field">
                        <input name="contactName" type="text" id="contactName" placeholder="Name" minLength={2} required />
                    </div>
                    <div className="form-field">
                        <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" required />
                    </div>
                    <div className="form-field">
                        <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" />
                    </div>
                    <div className="form-field">
                        <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required></textarea>
                    </div>
                    <button className="submitform">SUBMIT</button>
                </form>


                <div className="contact-info">
                    <div className='linkedin'>
                        <h5>Where to find me</h5>
                        <a href="https://www.linkedin.com/in/jorge-nahuel-beja-rosa/">Linkedin</a>
                    </div>

                    <div>
                        <h5>Email Me At</h5>
                        <a>jorgebejarosa@gmail.com</a>
                    </div>

                    <div>
                        <h5>Call Me At</h5>
                           <a>Mobile: (+54) 299-5249409</a> 
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;