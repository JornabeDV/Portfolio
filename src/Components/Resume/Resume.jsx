import "./Resume.css";

const Resume = () => {
  return (
    <div>
      <section id="resume">
        <div className="resume-header">
          <h5>RESUME</h5>
          <h1>More of my credentials.</h1>
          <p className="lead">
            With my FullStack approach, I not only have the ability to design
            and develop attractive and intuitive applications, but also to
            ensure that they work efficiently and adapt perfectly to the needs
            of my clients and users.
          </p>
        </div>

        <div>
          <div className="title-work">
            <h2>Experience</h2>
          </div>

          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-header">
                <h3>FullStack Developer</h3>
                <p>Sep 2025 - Present</p>
              </div>
              <div className="timeline-content">
                <h4>
                  <a href="https://www.cplmanager.com/">ModularQ</a>
                </h4>
                <p className="p-information">
                  <ul>
                    <li>
                      Built a progressive SaaS (PWA) used internally by
                      industrial modular construction teams to manage projects,
                      tasks, operators, and material inventory.
                    </li>
                    <li>
                      Developed a role-based admin dashboard with React and
                      Next.js 14, including authentication, access control, and
                      10+ functional modules.
                    </li>
                    <li>
                      Implemented real-time features such as time tracking,
                      automated cron jobs, reporting dashboards, and a typed
                      data layer using Prisma and Supabase.
                    </li>
                  </ul>
                </p>
                <p className="p-information1">
                  Technologies:{" "}
                  <span className="p-information2">
                    React, Next.js 14, TypeScript, Prisma ORM, PostgreSQL,
                    Supabase (Auth, Database, Storage), Tailwind CSS, Radix UI,
                    Shadcn/ui, PWA (next-pwa), Vercel Cron Jobs, Recharts
                  </span>
                </p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-header">
                <h3>FullStack Developer</h3>
                <p>Sep 2025 - Present</p>
              </div>
              <div className="timeline-content">
                <h4>
                  <a href="https://box-plan-app.vercel.app/">Box Plan</a>
                </h4>
                <p className="p-information">
                  <ul>
                    <li>
                      A progressive SaaS (PWA) for training and subscription
                      management built on a B2B2C business model, currently used
                      by 200+ active users including coaches and athletes.
                    </li>
                    <li>
                      Trainer-focused platform enabling creation and management
                      of training plans, progress tracking, monthly calendars,
                      and subscription-based monetization.
                    </li>
                    <li>
                      Integrated Mercado Pago API with recurring subscriptions
                      and Split Payments, enabling automatic revenue
                      distribution between the platform and coaches.
                    </li>
                    <li>
                      Mobile-first user experience with installable PWA support,
                      dark/light mode, and role-based dashboards (admin, coach,
                      student).
                    </li>
                    <li>
                      Core features for athletes including an interactive forum,
                      leaderboard, CrossFit timer, and 1RM calculator.
                    </li>
                    <li>
                      Administrative panel for managing users, subscriptions,
                      and global metrics, significantly optimizing operational
                      workflows.
                    </li>
                    <li>
                      Modern UI built with React and Next.js 14 (App Router),
                      following responsive design and UX best practices.
                    </li>
                    <li>
                      Scalable B2B2C architecture with coach profiles, tiered
                      plans (Starter, Growth, Enterprise), and automated
                      commission calculations.
                    </li>
                  </ul>
                </p>
                <p className="p-information1">
                  Technologies:{" "}
                  <span className="p-information2">
                    React, Next.js 14, TypeScript, Prisma ORM, PostgreSQL
                    (Neon), NextAuth, MercadoPago API, Tailwind CSS, Radix UI,
                    Shadcn/ui, Lucide React, React Hook Form, PWA
                  </span>
                </p>
              </div>

              <div className="timeline-block">
                <div className="timeline-header">
                  <h3>FullStack Developer</h3>
                  <p>Mar 2023 - Sep 2025</p>
                </div>
                <div className="timeline-content">
                  <h4>
                    <a href="https://www.cplmanager.com/">CPL Manager</a>
                  </h4>
                  <p className="p-information">
                    <ul>
                      <li>
                        Fullstack Developer on CPL Manager, an esports team
                        management and strategy game with hundreds of active
                        users.
                      </li>
                      <li>
                        Built interactive UI using Svelte 5 and Tailwind CSS,
                        and developed 50+ RESTful APIs with SvelteKit.
                      </li>
                      <li>
                        Designed and optimized a large relational database with
                        Prisma ORM and PostgreSQL (80+ models), improving
                        performance with Redis caching and automated cron jobs.
                      </li>
                    </ul>
                  </p>
                  <p className="p-information1">
                    Technologies:{" "}
                    <span className="p-information2">
                      Svelte 5, SvelteKit, Node.js, Prisma ORM, PostgreSQL,
                      Redis, Tailwind CSS, node-cron
                    </span>
                  </p>
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
                  <p>
                    FullStack Developer Intensive Course of 800 hours of
                    practical and theoretical development in technologies such
                    as Javascript, ReactJS, PostgreSQL, Sequelize, Tailwind,
                    Redux, Express, NodeJs, among others. Algorithms and data
                    structure related to programming are also studied.
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-header">
                  <h3>Course ReactJS</h3>
                  <p>Oct-2022 - Dic 2022</p>
                </div>
                <div className="timeline-content">
                  <h4>CoderHouse</h4>
                  <p>
                    I developed advanced programming skills, using JavaScript
                    (ES6) components and efficient data flows. I also acquired
                    skills in managing routes with Firebase and understood the
                    concept of virtual DOM through React JS. In conclusion, I am
                    ready to create modern and dynamic web applications with
                    React JS.
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-header">
                  <h3>Course Javascript</h3>
                  <p>Jul 2022 - Oct 2022</p>
                </div>
                <div className="timeline-content">
                  <h4>CoderHouse</h4>
                  <p>
                    I acquired the fundamentals of the most used programming
                    language today, which allowed me to create different types
                    of applications. I explored my own tools, studied jQuery and
                    mastered development techniques with AJAX. Now I can create
                    interactive web solutions and apply this knowledge in any
                    JavaScript framework.
                  </p>
                </div>
              </div>

              <div className="timeline-block">
                <div className="timeline-header">
                  <h3>Course Web Developer</h3>
                  <p>May 2022 - Jul 2022</p>
                </div>
                <div className="timeline-content">
                  <h4>CoderHouse</h4>
                  <p>
                    I learned how to create websites from scratch, using HTML
                    and CSS. I also gained skills in using GIT, SASS, Bootstrap
                    and SEO. I learned how to upload my site to a server and how
                    to handle business aspects like budgets and dealing with
                    clients. In short, I gained valuable knowledge for web
                    development and project management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
