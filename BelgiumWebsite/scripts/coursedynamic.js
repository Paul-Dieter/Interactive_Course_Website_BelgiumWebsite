const courseData = {
    bachelorOfComputing: {
      name:'Bachelor Of Computing',
      description: `
                <p>Our Bachelor of Computing degree will teach you the essential computing skills of troubleshooting and formulating viable solutions. Additionally, you will learn to apply theories and integrate them in real-world environments, across multiple disciplines, by presenting best practices and solutions.

You will gain sound theoretical knowledge grounded in real-world applications. Furthermore, the practical assignments and projects you will complete are congruent with daily practices in the working world, providing you with business-specific and soft skills. These skills include communication skills, customer satisfaction training, the ability to work as part of a team, and the ability to teach others.

Moreover, in the fourth year of your Bachelor of Computing, you will have the remarkable opportunity to complete an internship at a national or international company. Additionally, you will conduct academic research and present your findings in a formal dissertation.</p>`,
      specializations: [
        {
          name: "Data Science",
          description:
            "Specialising in data science will give you in-depth knowledge of the processes and techniques used to transform data into information – an essential skill for effective decision-making in any organisation.You will learn how to collect and organise data into large-scale data stores and warehouses, how to use mathematical and statistical analysis to develop sound business solutions based on this data, and how to present your findings in reports to stakeholders.",
        },
        {
          name: "Software Engineering",
          description:
            "This specialisation will teach you to turn abstract ideas into practical applications that solve everyday problems.It will allow you to specialise in a range of disciplines, including software architecture, human experience design, data protection, systems integration, and many more.In the working world, you will typically work alongside business intelligence specialists to formulate, conceptualise and create dynamic solutions for real-world problems. You will also work closely with software developers who assist in developing these functional solutions.",
        },
      ],
      years: {
        first: [
          {
            subject: "Academic Writing 181",
            code: "ACW181",
            nqf: 5,
            guide: download="download/download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Computer Architecture 181",
            code: "COA181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 181",
            code: "DBD181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Information Systems 181",
            code: "INF181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 101",
            code: "INL101",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 102",
            code: "INL102",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Linear Programming 181",
            code: "LPR181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA7",
          },
          {
            subject: "Mathematics 181",
            code: "MAT181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Networking Development 181",
            code: "NWD181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 181",
            code: "PRG181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 182",
            code: "PRG182",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Statistics 181",
            code: "STA181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 181",
            code: "WPR181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Business Management 181",
            code: "BUM181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Entrepreneurship 181",
            code: "ENT181",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
        second: [
          {
            subject: "Database Development 281",
            code: "DBD281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Information Systems 281",
            code: "INF281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 201",
            code: "INL201",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 202",
            code: "INL202",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Linear Programming 281",
            code: "LPR281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Mathematics 281",
            code: "MAT281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 281",
            code: "PRG281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 282",
            code: "PRG282",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project Management 281",
            code: "PMM281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Statistics 281",
            code: "STA281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 281",
            code: "WPR281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Software Analysis & Design 281",
            code: "SAD281",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Data Warehousing 281",
            code: "DWH281",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Internet Of Things 281",
            code: "IOT281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Software Testing 281",
            code: "SWT281",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
        third: [
          {
            subject: "Research Methods 381",
            code: "RSH381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 381",
            code: "DBD381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 321",
            code: "INL321",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Linear Programming 381",
            code: "LPR381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Machine Learning 381",
            code: "MLG381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project 381",
            code: "PRJ381",
            nqf: 8,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project Management 381",
            code: "PMM381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 381",
            code: "PRG381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Software Engineering 381",
            code: "SEN381",
            nqf: 8,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 381",
            code: "WPR381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Data Science 381",
            code: "BIN381",
            nqf: 8,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Administration 381",
            code: "DBA381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Statistics 381",
            code: "STA381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation Management 381",
            code: "INM381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Machine Learning 382",
            code: "MLG382",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "User Experience Design 381",
            code: "UAX381",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
        forth: [
          {
            subject: "Applied Information Technology 481",
            code: "AIT481",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Applied Information Technology 482",
            code: "AIT482",
            nqf: 8,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Dissertation 481",
            code: "DST481",
            nqf: 8,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
      },
    },
    //Bachelor of Information Technology data
    bachelorOfInformationTechnology: {
      name:'Bachelor Of Information Technology',
      description: `<p>This IT degree focuses on information systems modules and will provide you with foundational knowledge in software engineering and business intelligence. You will cover an extensive range of topics, from mobile and wireless networks to artificial intelligence and intelligent systems.By placing a strong focus on knowledge, execution, and professional skills, this IT degree will transform you into a complete professional with a range of interesting opportunities to explore, including the development of mobile and web-based apps and even game development.</p>`,

      specializations: [
        {
          name: "Bachelor of IT - Software Development Specialisation",
          description: "The knowledge you gain in object-oriented and event-driven programming will mould you into a world-class programmer.After studying this IT degree, you will have learnt to develop functional software programs from designs and programming instructions received from systems architects, software engineers, and systems designers. The applications you develop will be deployed on desktops, networked computers, the internet, and multiplatform devices.",
        },

      ],
      years: {
        first: [
          {
            subject: "Academic Writing 171",
            code: "ACW171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Computer Architecture 171",
            code: "COA171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 171",
            code: "DBD171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "English Communication 171",
            code: "ENG171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Information Systems 171",
            code: "INF171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 101",
            code: "INL101",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 102",
            code: "INL102",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Mathematics 171",
            code: "MAT171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Networking Development 171",
            code: "NWD171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 171",
            code: "PRG171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 172",
            code: "PRG172",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Statistics 171",
            code: "STA171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 171",
            code: "WPR171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Business Management 171",
            code: "BUM171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Entrepreneurship 171",
            code: "ENT171",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
        second: [
          {
            subject: "Cloud-Native Application Architecture 271",
            code: "CNA271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 221",
            code: "DBD221",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Enterprise Systems 271",
            code: "ERP271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Ethics 271",
            code: "ETH271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Information Systems 271",
            code: "INF271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 201",
            code: "INL201",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 202",
            code: "INL202",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Linear Programming 171",
            code: "LPR171",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 271",
            code: "PRG271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 272",
            code: "PRG272",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project Management 271",
            code: "PMM271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Statistics 271",
            code: "STA271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 271",
            code: "WPR271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Internet Of Things 271",
            code: "IOT271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Software Testing 271",
            code: "SWT271",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
        third: [
          {
            subject: "Business Intelligence 371",
            code: "BIN371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Cloud-Native Application Programming 371",
            code: "CNA371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Data Analytics 371",
            code: "DAL371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 371",
            code: "DBD371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 371",
            code: "INL371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 371",
            code: "PRG371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project 371",
            code: "PRJ371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project Management 371",
            code: "PMM371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Software Analysis & Design 371",
            code: "SAD371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Software Engineering 371",
            code: "SEN371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 371",
            code: "WPR371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation Management 371",
            code: "INM371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "User Experience Design 371",
            code: "UAX371",
            nqf: 7,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
      },
    },
    //diploma
    diplomaInInformationTechnology: {
      name:'Diploma In Information Technology',
      description: `<p>Our Diploma in Information Technology consists of a generic foundation phase and a specialisation phase. The foundation phase gives insight into the field of information technology, while the specialisation phase is career oriented.
This academic programme will transform you into a well-rounded professional through a strong focus on knowledge, execution, and professional and practical skills. You will also have the incredible opportunity to complete 6 months of in-service training at an external company or in a simulated work environment.</p>`,
specializations: [
    {
      name: "Diploma in IT - Infrastructure Stream",
      description:
        "This stream will allow you to further specialise in 2 of the following fields: · Cloud · Security · Networking · Database",
    },
    {
      name: "Diploma in IT - Software Development Stream",
      description:
        "This stream will allow you to further specialise in 2 of the following fields: · Web Development · Programming · Database",
    },
  ],
      years: {
        first: [
          {
            subject: "Business Communication 161",
            code: "BUC161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Business Management and Entrepreneurship 161",
            code: "BME161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Computer Architecture 161",
            code: "COA161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Concept 161",
            code: "DBC161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Functionality 161",
            code: "DBF161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "End User Computing 161",
            code: "EUC161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 161",
            code: "INL161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Internet of Things 161",
            code: "IOT161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Mathematics 161",
            code: "MAT161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Network Development 161",
            code: "NWD161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Problem Solving 161",
            code: "PRS161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 161",
            code: "PRG161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming Principles 161",
            code: "PRP161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 161",
            code: "WPR161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Statistics 161",
            code: "STA161",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
        second: [
          {
            subject: "Database Development 261",
            code: "DBD261",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Enterprise Systems 261",
            code: "ERP261",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 261",
            code: "INL261",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "IT Law and Ethics 261",
            code: "ILE261",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project Management 261",
            code: "PMM261",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
      },
    },
    //deaf
    diplomaForDeafStudents: {
      name:'Diploma for Deaf Students',
      description: `<p>We have made this course accessible to our Deaf students by:
Providing a customised curriculum for students who use South African Sign Language (SASL) as their preferred method of communication.
Providing SASL interpreters throughout the course, including during the 6 months of workplace training.
Adopting a half-moon seating arrangement which is optimal for students learning through sign language.</p>`,
      specializations: [],
      years: {
        first: [
          {
            subject: "Mathematics 151",
            code: "MAT151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Computer Architecture 151",
            code: "COA151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 151",
            code: "DBD151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "End User Computing 151",
            code: "EUC151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "English Communication 151",
            code: "ENG151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Information Systems 151",
            code: "INF151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 101",
            code: "INL101",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 102",
            code: "INL102",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Network Development 151",
            code: "NWD151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 151",
            code: "PRG151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 152",
            code: "PRG152",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 151",
            code: "WPR151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Business Management 151",
            code: "BUM151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Entrepreneurship 151",
            code: "ENT151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
        second: [
          {
            subject: "Information Systems 251",
            code: "INF251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 201",
            code: "INL201",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Operating Systems 251",
            code: "OPS251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project 251",
            code: "PRJ251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project Management 251",
            code: "PMM251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Security 251",
            code: "SEC251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Administration 251",
            code: "DBA251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Network Development 251",
            code: "NWD251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Network Development 252",
            code: "NWD252",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Operating Systems 252",
            code: "OPS252",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Server Automation 251",
            code: "SVA251",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Wireless Networking 251",
            code: "WLN251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 251",
            code: "DBD251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Models 251",
            code: "DBM251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 251",
            code: "PRG251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 252",
            code: "PRG252",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 251",
            code: "WPR251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 252",
            code: "WPR252",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Enterprise Systems 251",
            code: "ERP251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Internet of Things 251",
            code: "IOT251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
        third: [
          {
            subject: "Applied Information Technology 350",
            code: "AIT350",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
      },
    },
    //system
    nationalCertificateITSystems: {
      name:'National Certificate :Systems development',
      description: `<p>On completion of this qualification, you will possess a specialised set of skills that will allow you to work in areas of systems development with confidence. You will gain a solid grasp of computer industry concepts and learn to expertly design, develop, test, and document software solutions needed in today’s business environment. You will also gain the necessary undergraduate foundation to further your studies in the IT field, should you wish.</p>`,
      specializations: [
        {
          name: "Diploma in IT",
          description:
            "",
        },
        {
          name: "Higher Certificate: IT (Database Development)",
          description:
            "",
        },
      ],
      years: {
        first: [
          {
            subject: "Mathematics 151",
            code: "MAT151",
            nqf: 5,
            credits: 12,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Computer Architecture 151",
            code: "COA151",
            nqf: 5,
            credits: 7,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 151",
            code: "DBD151",
            nqf: 5,
            credits: 18,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "End User Computing 151",
            code: "EUC151",
            nqf: 5,
            credits: 7,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "English Communication 151",
            code: "ENG151",
            nqf: 5,
            credits: 7,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Information Systems 151",
            code: "INF151",
            nqf: 5,
            credits: 12,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 101",
            code: "INL101",
            nqf: 5,
            credits: 5,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 102",
            code: "INL102",
            nqf: 5,
            credits: 5,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Network Development 151",
            code: "NWD151",
            nqf: 5,
            credits: 7,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 151",
            code: "PRG151",
            nqf: 5,
            credits: 7,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 152",
            code: "PRG152",
            nqf: 5,
            credits: 13,
            prerequisites: "PRG151",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 151",
            code: "WPR151",
            nqf: 5,
            credits: 13,
            prerequisites: "PRG151",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Business Management 151",
            code: "BUM151",
            nqf: 5,
            credits: 7,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Entrepreneurship 151",
            code: "ENT151",
            nqf: 5,
            credits: 7,
            prerequisites: "",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
      },
    },
    //db
    certificateITDatabase: {
      name:'National Certificate :Database Development',
      description: `<p>The amount of data in the world is increasing at an exponential rate. The emergence of big data has completely transformed how companies do business and understand their customers, with companies using large volumes of data to identify trends and patterns and predict future consumer behaviour. With the above in mind, it is not surprising that the demand for skilled data experts with advanced database skills is ever-increasing. This qualification will give you these skills and allow you to enter the job market quickly. The knowledge and skills you gain will equip you to solve operational business problems in the data science space, allowing you to thrive in today’s business environment.</p>`,
      specializations: [
        {
          name: "Diploma in IT",
          description:
            "",
        },
        {
          name: "Bachelor of Information Technology",
          description:
            "",
        },
        {
            name: "Bachelor of Computing",
            description:
              "",
          },
      ],
      years: {
        first: [
          {
            subject: "Mathematics 151",
            code: "MAT151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Computer Architecture 151",
            code: "COA151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 151",
            code: "DBD151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "End User Computing 151",
            code: "EUC151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "English Communication 151",
            code: "ENG151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Information Systems 151",
            code: "INF151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 101",
            code: "INL101",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 102",
            code: "INL102",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Network Development 151",
            code: "NWD151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 151",
            code: "PRG151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 152",
            code: "PRG152",
            nqf: 5,
            prerequisites: "PRG151",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 151",
            code: "WPR151",
            nqf: 5,
            prerequisites: "PRG151",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Business Management 151",
            code: "BUM151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Entrepreneurship 151",
            code: "ENT151",
            nqf: 5,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
        second: [
          {
            subject: "Information Systems 251",
            code: "INF251",
            nqf: 6,
            prerequisites: "INF122",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Innovation and Leadership 201",
            code: "INL201",
            nqf: 6,
            prerequisites: "INL102",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Operating Systems 251",
            code: "OPS251",
            nqf: 6,
            prerequisites: "INF121",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project 251",
            code: "PRJ251",
            nqf: 6,
            prerequisites: "PMM251",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Project Management 251",
            code: "PMM251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Security 251",
            code: "SEC251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Development 251",
            code: "DBD251",
            nqf: 6,
            prerequisites: "DBD251",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Database Models 251",
            code: "DBM251",
            nqf: 5,
            prerequisites: "DBM251",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 251",
            code: "PRG251",
            nqf: 6,
            prerequisites: "PRG122",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Programming 252",
            code: "PRG252",
            nqf: 6,
            prerequisites: "DBD251, PRG251",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 251",
            code: "WPR251",
            nqf: 6,
            prerequisites: "DBM251, PRG121, WPR121",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Web Programming 252",
            code: "WPR252",
            nqf: 6,
            prerequisites: "WPR251",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Enterprise Systems 251",
            code: "ERP251",
            nqf: 6,
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
          {
            subject: "Internet of Things 251",
            code: "IOT251",
            nqf: 6,
            prerequisites: "WPR251, PRG121",
            guide: download="download/Study-Guide.pdf",
            video: "https://www.youtube.com/watch?v=elAeisKOrFA",
          },
        ],
      },
    },
  };

  //search course and dynamic
  document.addEventListener("DOMContentLoaded", function () {
    // Search Elements
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.cards');
    const toggleSpecializationsBtn = document.querySelector("#toggleSpecializationsBtn");
    const toggleTableBtns = document.querySelectorAll(".year-button");
  
    // Event Listeners for Search
    searchInput.addEventListener("input", function () {
      const searchQuery = searchInput.value.trim();
      filterIcons(searchQuery);
    });
  
    cards.forEach(card => {
      card.addEventListener('click', function () {
        const selectedCourse = card.getAttribute('data-value');
        updateCourseInfo(selectedCourse);
      });
    });
  
    const navSearch = document.getElementById('navSearch');
    navSearch.addEventListener('click', function (event) {
      event.preventDefault();
      searchInput.focus();
    });
  
    toggleSpecializationsBtn.addEventListener("click", toggleSpecializations);
    toggleTableBtns.forEach((btn) =>
      btn.addEventListener("click", function () {
        toggleTable(this.dataset.year);
      })
    );
  
    function updateCourseInfo(selectedCourse) {
      const course = courseData[selectedCourse];
      document.querySelector(".Bcomp").innerHTML = course.name;
      document.querySelector(".coursedescription").innerHTML = course.description;
  
      const specializationsContainer = document.querySelector("#specializations");
      specializationsContainer.innerHTML = "";
      course.specializations.forEach((specialization) => {
        const div = document.createElement("div");
        div.classList.add("specialization");
        div.innerHTML = `
          <h3>${specialization.name}</h3>
          <p>${specialization.description}</p>
        `;
        specializationsContainer.appendChild(div);
      });
  
      function createTable(yearData) {
        let tableContent = `
          <thead>
            <tr>
              <th>Subject</th>
              <th>Code</th>
              <th>NQF</th>
              <th>Guide</th>
              <th>Video link</th>
            </tr>
          </thead>
          <tbody>
        `;
        yearData.forEach((item) => {
          tableContent += `
            <tr>
              <td>${item.subject}</td>
              <td>${item.code}</td>
              <td>${item.nqf}</td>
              <td><a href="${item.guide}" target="_blank">Download</a></td>
              <td><a href="${item.video}" target="_blank">Watch</a></td>
            </tr>
          `;
        });
        tableContent += "</tbody>";
        return tableContent;
      }
  
      document.querySelector("#table-first").innerHTML = createTable(course.years.first);
      document.querySelector("#table-second").innerHTML = createTable(course.years.second);
      document.querySelector("#table-third").innerHTML = createTable(course.years.third);
      document.querySelector("#table-forth").innerHTML = createTable(course.years.forth);
    }
  
    function toggleSpecializations() {
      const specializations = document.querySelector("#specializations");
      const btnText = specializations.style.display === "none"
        ? "Hide Specializations"
        : "Show Specializations";
      specializations.style.display = specializations.style.display === "none" ? "block" : "none";
      toggleSpecializationsBtn.textContent = btnText;
    }
  
    function toggleTable(year) {
      const table = document.querySelector(`#table-${year}`);
      const btn = document.querySelector(`.year-button[data-year="${year}"]`);
      const btnText = table.style.display === "none" ? "Hide Table" : "Show Table";
      table.style.display = table.style.display === "none" ? "table" : "none";
      btn.textContent = btnText;
    }
  
    function filterIcons(searchQuery) {
      const nothingfound = document.getElementById("nothing-alert");
      let number = 0;
      cards.forEach(function (card) {
        const name = card.querySelector("h2").textContent.toLowerCase();
        if (name.includes(searchQuery.toLowerCase())) {
          nothingfound.style.display = "none";
          card.style.display = "flex";
          number++;
        } else {
          card.style.display = "none";
        }
      });
      if (number === 0) {
        nothingfound.style.display = "block";
      }
    }
  });

  //searchbar hide and show
  document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.cards');
    const dynamicContent = document.getElementById('dynamicContent');
  
    cards.forEach(card => {
      card.addEventListener('click', function () {
        // Hide all cards and alert message
       // document.getElementById('selectCourse').style.display = 'none';
        document.getElementById('nothing-alert').style.display = 'none';
        
        // Show the dynamic content
        dynamicContent.style.display = 'block';
      });
    });
  });
  
  
