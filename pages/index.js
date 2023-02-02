import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/* Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="rowlet.jpg" alt="O" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Oscar Delgadillo</h1>
              <h3>Computer Engineering Student</h3>
              <p>About myself</p>
              <a href="/hireme">Hire me, please</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Second section */}
    <div className="row py-2">
      {/* Skills Section */}
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experience</h1>
            <ul>
              {experiences.map(({ title, description, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{description}</p>
                </li>
              ))}
            </ul>
            <Link legacyBehavior href="#">
              <a className="btn btn-light">Know More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Major projects section */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Major Projects</h1>
            </div>
            {projects.map(({ name, description, image, more }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card">
                  <div className="overflow">
                    <img src={`/${image}`} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href={more} target="_blank">
                      Know more
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Personal projects section */}
    <div className="row py-2">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Personal Projects</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
