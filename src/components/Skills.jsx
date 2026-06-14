import {
  FaRobot,
  FaSearch,
  FaDatabase,
  FaChartLine,
  FaEye,
  FaLink,
  FaCloud,
  FaAws,
  FaPython,
  FaServer,
} from "react-icons/fa";

function Skills() {
  const skillGroups = [
    {
      title: "GenAI & LLMs",

      skills: [
        {
          icon: <FaRobot />,
          name: "Azure OpenAI",
        },

        {
          icon: <FaLink />,
          name: "LangChain",
        },

        {
          icon: <FaSearch />,
          name: "RAG",
        },

        {
          icon: <FaDatabase />,
          name: "Qdrant",
        },

        {
          icon: <FaChartLine />,
          name: "MLflow",
        },

        {
          icon: <FaEye />,
          name: "Langfuse",
        },
      ],
    },

    {
      title: "Backend & Infrastructure",

      skills: [
        {
          icon: <FaPython />,
          name: "Python",
        },

        {
          icon: <FaServer />,
          name: "FastAPI",
        },

        {
          icon: <FaDatabase />,
          name: "PostgreSQL",
        },

        {
          icon: <FaAws />,
          name: "AWS",
        },

        {
          icon: <FaCloud />,
          name: "Azure",
        },
      ],
    },

    {
      title: "Enterprise Tools",

      skills: [
        {
          icon: <FaDatabase />,
          name: "JIRA",
        },

        {
          icon: <FaDatabase />,
          name: "SharePoint",
        },

        {
          icon: <FaDatabase />,
          name: "Confluence",
        },

        {
          icon: <FaDatabase />,
          name: "Bitbucket",
        },
      ],
    },
  ];

  return (
    <section id="skills">

      <h2 className="section-title">
        Skills
      </h2>

      {skillGroups.map((group) => (

        <div
          key={group.title}
          className="skills-group"
        >

          <h3 className="skills-heading">
            {group.title}
          </h3>

          <div className="skills-grid">

            {group.skills.map((skill) => (

              <div
                key={skill.name}
                className="glass skill-card"
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <span>
                  {skill.name}
                </span>

              </div>

            ))}

          </div>

        </div>

      ))}

    </section>
  );
}

export default Skills;