import './Resume.css'

const Resume = () => {
	return (
		<div>
			<section id="resume">

				<div className="resume-header">
					<h5>RESUME</h5>
					<h1>More of my credentials.</h1>
					<p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
				</div>

				<div>

					<div className="title-work">
						<h2>Proyect Experience</h2>
					</div>

					<div>
						<div className="timeline-wrap">
							<div className="timeline-block">
								<div className="timeline-header">
									<h3>Frontend Developer</h3>
									<p>Oct 2023 - Present</p>
								</div>
								<div className="timeline-content">
									<h4>
										<a href="https://tnt-market.vercel.app/">TNT-Market</a>
									</h4>
									<p className="p-information">Website created to report in real-time information on different financial and stock market quotes obtained from the consumption of external APIs and their implementation through React, Redux, Typescript, MongoDB technologies.</p>
								</div>
							</div>
							<div className="timeline-block">
								<div className="timeline-header">
									<h3>FullStack Developer</h3>
									<p>Jun 2023 - Oct 2023</p>
								</div>
								<div className="timeline-content">
									<h4>
										<a href="https://healthplus-henry.netlify.app/">HealthPlus</a>
									</h4>
									<p className="p-information">Application developed to manage a new way of managing a health center, through monthly paid subscriptions. Direct interaction between client and different health specialists. Complete database development and updated information dashboard.</p>
								</div>
							</div>

							<div className="timeline-block">
								<div className="timeline-header">
									<h3>FullStack Developer</h3>
									<p>Jan 2023 - May 2023</p>
								</div>
								<div className="timeline-content">
									<h4>
										<a href="https://puertotablas.netlify.app/">Puerto Tablas</a>
									</h4>
									<p className="p-information">This web application was to design an electronic commerce, by implementing some functions such as ordering, payment gateway, and shopping cart. A database was also created with Firestore Firebase technology, where the products to be marketed were stored.</p>
								</div>
							</div>

							<div className="timeline-block">
								<div className="timeline-header">
									<h3>FullStack Developer</h3>
									<p>Oct 2022 - Dic 2023</p>
								</div>
								<div className="timeline-content">
									<h4>
										<a href="https://mi-videoteca.netlify.app/">Mi Videoteca</a>
									</h4>
									<p className="p-information">Page developed to show current movies and be rendered by consuming an external API, with different functionalities. The technologies applied were HTML, CSS and Javascript.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div>
					<div className="title-work">
						<h2>Education</h2>
					</div>

					<div>
						<div>
							<div className="timeline-block">
								<div className="timeline-header">
									<h3>BootCamp</h3>
									<p>Jul 2023 - Oct 2023</p>
								</div>
								<div className="timeline-content">
									<h4> Soy Henry</h4>
									<p>FullStack Developer Intensive Course of 800 hours of practical and theoretical development in technologies such as Javascript, ReactJS, PostgreSQL, Sequelize, Tailwind, Redux, Express, NodeJs, among others.
										Algorithms and data structure related to programming are also studied.</p>
								</div>
							</div>

							<div className="timeline-block">
								<div className="timeline-header">
									<h3>Course ReactJS</h3>
									<p>Oct-2022 - Dic 2022</p>
								</div>
								<div className="timeline-content">
									<h4>CoderHouse</h4>
									<p>I developed advanced programming skills, using JavaScript (ES6) components and efficient data flows. I also acquired skills in managing routes with Firebase and understood the concept of virtual DOM through React JS. In conclusion, I am ready to create modern and dynamic web applications with React JS.</p>
								</div>
							</div>

							<div className="timeline-block">
								<div className="timeline-header">
									<h3>Course Javascript</h3>
									<p>Jul 2022 - Oct 2022</p>
								</div>
								<div className="timeline-content">
									<h4>CoderHouse</h4>
									<p>I acquired the fundamentals of the most used programming language today, which allowed me to create different types of applications. I explored my own tools, studied jQuery and mastered development techniques with AJAX. Now I can create interactive web solutions and apply this knowledge in any JavaScript framework.</p>
								</div>
							</div>

							<div className="timeline-block">
								<div className="timeline-header">
									<h3>Course Web Developer</h3>
									<p>May 2022 - Jul 2022</p>
								</div>
								<div className="timeline-content">
									<h4>CoderHouse</h4>
									<p>I learned how to create websites from scratch, using HTML and CSS. I also gained skills in using GIT, SASS, Bootstrap and SEO. I learned how to upload my site to a server and how to handle business aspects like budgets and dealing with clients. In short, I gained valuable knowledge for web development and project management.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Resume