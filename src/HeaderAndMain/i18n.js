import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      about: 'About us',
      technologies: 'Technologies',
      fifth : {
        engineering: "ENGINEERING",
        welding: "WELDING",
        assembly: "ASSEMBLY",
        thermal: "THERMAL INSULATION",
        stamping: "CUTTING AND STAMPING",
        equipmentProduction: "EQUIPMENT PRODUCTION"
      },
      products: 'Products',
      services: 'Services',
      careers: 'Careers',
      assemblyPage: {
        title: "Assembly and Installation | TANKİNOX",
        subtitle: "Works",
        mainTitle: "Assembly and Installation",
        cards: {
          c1: {
            title: "Commissioning and Start-Up Works",
            description: "This is the final stage of assembly works. Our specialists perform complex technical testing and equipment servicing prior to commissioning."
          },
          c2: {
            title: "Supervisor Assembly of Storage and Auxiliary Equipment",
            description: "Supervisor assembly includes comprehensive quality control and adherence to technical standards. This ensures fully operational equipment."
          }
        },
        safety: {
          title: "Production Safety",
          description: "Installation meets sanitary-technological norms and ensures ecological production and worker safety."
        },
        installation: {
          title: "Installation and Piping",
          description: "Request installation and piping services with ARTINOX™ - we guarantee timely service and affordable rates!",
          items: [
            "Industrial tanks and reservoirs",
            "Technological pipelines",
            "Heat exchange equipment",
            "Auxiliary elements"
          ]
        },
        efficiency: {
          title: "High Efficiency",
          description: "Supervisor assembly and commissioning require careful calibration, ensuring equipment is functioning properly, and errors are rectified."
        },
        testing: "We conduct not only installation works but also testing for the integrity of welded joints.",
        kipia: {
          title: "Works on Control and Measuring Instruments",
          description1: "Engineering system development and implementation require properly planned KIPiA works.",
          description2: "ARTINOX offers professional services from experienced specialists with years of expertise.",
          items: [
            "Development of technical assignment",
            "KIPiA design and calculations",
            "Specification and material selection",
            "Construction and installation works",
            "Installation of KIPiA and commissioning"
          ],
          tracking: "Using KIPiA tools, we track:",
          trackingItems: [
            "Working medium temperature",
            "Concentration of explosive substances",
            "Concentration of toxic substances",
            "Flow rate",
            "Radiation intensity",
            "Liquid levels",
            "Density, strength, and other material properties"
          ],
          equipment: "We can equip storage systems with:",
          equipmentItems: [
            "Temperature sensors",
            "Pressure sensors",
            "Level sensors",
            "Other measuring instruments"
          ]
        }
      },
  
      contacts: 'Contacts',
      language: 'Language',
      highQualityTitle: "HIGH-QUALITY STAINLESS TANKS FOR INDUSTRIAL APPLICATIONS",
      brandTitle: "TANKİNOX BRAND",
      brandText: "The accumulated experience, well-coordinated team, and know-how allow us to be sure that every element manufactured under the TANKİNOX brand will be of high quality.",
      weldingTitle: "Innovative technology of automatic argon arc welding",
      weldingText: "The concept of this technology lies in the simultaneous execution of additional processes, which ensures the highest quality and reduces production time compared to the classical method.",
      outputProductTitle: "OUTPUT PRODUCT",
      outputProductText: "Cylindrical tank with a conical bottom and perfectly smooth internal and external surfaces. Suitable for storing and transporting liquids or bulk materials.",
      ourProducts: 'OUR PRODUCTS',
        weldingPage: {
          title: "Welding | TANKİNOX",
          title1: "Welding Services",
          services: {
            title: "TANKİNOX provides professional industrial welding services:",
            description: "Our advanced equipment allows us to handle projects of any complexity and size.",
            metalsTitle: "We work with the following metals:",
            metal1: "Stainless steel",
            metal2: "Non-ferrous metals and their alloys",
            metal3: "Cast iron",
            metal4: "Carbon steel"
          },
          advantages: {
            title: "Our key strengths are personalized service and professional expertise."
          },
          tigWig: {
            title: "TIG/WIG Welding with Argon",
            description: "This method is ideal for processing non-ferrous metals and alloy steels.",
            types: "There are three types of TIG/WIG welding:",
            manual: "Manual",
            semiauto: "Semi-automatic",
            auto: "Automatic"
          },
          mig: {
            migTitle: "Semi-automatic Welding (MIG/MAG)",
            migDescription: "MIG/MAG welding (Metal Inert/Active Gas) uses a melting electrode in a protective gas environment.",
            migAdvantages: "Why choose MIG/MAG welding by TANKİNOX:",
            advantage1: "High working speed",
            advantage2: "Wide range of tasks",
            advantage3: "Even and high-quality seams",
            advantage4: "Continuous operation"
          },
          plasmaWelding: {
            mainText: "With modern equipment and a skilled team, we ensure excellent results!",
            title: "Plasma Welding",
            description: "This technology allows deep metal penetration, suitable for sheets up to 9mm thick.",
            advantages: "Key benefits of plasma welding:",
            advantage1: "Clean and aesthetic seams",
            advantage1Description: "Welds are nearly invisible and very tidy.",
            advantage2: "Eco-friendly process",
            advantage2Description: "Minimized waste and clean production practices.",
            advantage3: "Minimal deformation",
            advantage3Description: "Maximum strength and quality of finished products."
          }
        },
      stainlessSteelTanks: 'STAINLESS STEEL TANKS',
      tanksXXL: 'TANKS XXL',
      asepticTanks: 'ASEPTIC TANKS',
      processStorageTanks: 'PROCESS / STORAGE TANKS',
      cipStations: 'CIP STATIONS',
      tankinoxProviding: "TANKİNOX providing",
      services: "Services",
        itemDetails: {
          title1: "Stainless Steel Tanks",
          description1: "High-quality stainless steel tanks for various uses.",
          image1: "path_to_image",
          title2: "XXL Tanks",
          description2: "Large capacity tanks designed for industrial use.",
          image2: "path_to_image",
        },
      engineering: "ENGINEERING",
      welding: "WELDING",
      assembly: "ASSEMBLY",
      thermal: "THERMAL",
      stamping: "STAMPING",
      aboutTankinox: "ABOUT TANKİNOX",
      clientApproach: "Despite the diversity of partner organizations, the TANKİNOX team guarantees an individual approach to each Client.",
      costFunctionalityRatio: "We attract the best specialists to ensure that the ratio between your costs and the functionality of the final product is perfect.",
      footerDescription: "TANKİNOX is a specialized company focused on the design and manufacturing of high-quality stainless steel tanks for a wide range of industrial applications. With extensive experience in the industry, we deliver excellence.",
      aboutUsfooter: "ABOUT US",
      careersfooter: "CAREERS",
      contactsfooter: "CONTACTS",
      servicesfooter: "SERVICES",
      winemaking: "Winemaking",
      brewing: "Brewing",
      chemicalStorage: "Chemical Storage",
      productsfooter: "PRODUCTS",
      steelTanks: "Steel Tanks",
      pressureVessels: "Pressure Vessels",
      customSolutions: "Custom Solutions",
      industries: "INDUSTRIES",
      foodBeverage: "Food & Beverage",
      pharmaceutical: "Pharmaceutical",
      energy: "Energy",
      addressLine1: "str. Industriale 1,",
      addressLine2: "st. Măgdăcești, rn. Criuleni, Republic of Moldova, MD-4829",
      phone: "+373",
      email: "Example@inox.ro",
      copyright: "© 2024 TANKİNOX. All rights reserved.",
      whoWeAre: "Who we are?",
      whoWeAreText: "At TANKİNOX, we specialize in designing and manufacturing top-quality stainless steel tanks for a diverse range of industries. Founded with a commitment to quality and innovation, we have grown into a leading provider of storage solutions for the food and beverage, pharmaceutical, chemical, and energy sectors. Our tanks are designed to meet the highest standards of durability, safety, and hygiene, ensuring reliable performance for our clients worldwide.",
      ourMission: "Our Mission",
      ourMissionText: "To deliver advanced, high-quality tank solutions that empower our clients to store and process materials safely and efficiently, while meeting the specific needs of their industries. We strive to combine cutting-edge technology with exceptional craftsmanship to create products that stand the test of time.",
      whyTankinox: "Why TANKİNOX?",
      precisionQuality: "Precision and Quality",
      precisionQualityText: "Every TANKİNOX product is crafted with meticulous attention to detail. Our skilled engineers use advanced manufacturing techniques and high-grade stainless steel to deliver products that meet rigorous industry standards and client specifications.",
      innovationDriven: "Innovation-Driven",
      engineering: {
        title: "Engineering",
        subtitle: "and creative design",
        extra: {
          title: "Cutting-edge Industrial Analytics",
          description: "Our team leverages advanced data analysis and AI-driven insights to optimize production workflows and identify areas for improvement, ensuring your operations stay ahead of the competition."
        },
        cards: {
          title: "Advanced Engineering and Design",
          subtitle: "by TANKİNOX",
          description: "Through a personalized approach for every client, we ensure the highest standards of quality. Our engineering services include integrating cutting-edge technological systems into production processes.",
          card1: {
            title: "Comprehensive Engineering Services",
            description: "We offer solutions to upgrade your production or perform a complete process overhaul. Expect to see a minimum 100% boost in economic performance. Choose the optimization plan, and our technical team will handle all calculations and project planning."
          },
          card2: {
            title: "Turnkey Solutions",
            description: "From the moment you submit a request, we take full control of production resources. You can monitor progress and receive regular consultations from industry experts throughout the project."
          },
          card3: {
            title: "Automated Process Integration",
            description: "We specialize in integrating automation into existing production lines, significantly reducing downtime and enhancing operational efficiency. Tailored solutions ensure seamless compatibility with your equipment."
          },
          card4: {
            title: "Custom Industrial Solutions",
            description: "We collaborate with clients to develop unique, tailored solutions that meet the specific needs of their production processes, ensuring maximum efficiency and innovation."
          }
        }
      },
      innovationDrivenText: "Innovation is at the heart of what we do. We continually invest in research and development to improve our designs, enhance our production processes, and ensure that our tanks are built to handle the latest industry challenges and standards.",
      customSolutions: "Custom Solutions",
      customSolutionsText: "We understand that every business has unique needs. Our team works closely with clients to design and build tanks that fit their specific operational requirements, providing custom solutions for any industry.",
      comprehensiveServices: "Comprehensive Services",
      comprehensiveServicesText: "Beyond manufacturing, we offer a full suite of services, including installation, maintenance, and consulting. Our goal is to provide end-to-end support that helps our clients get the most out of their equipment.",
      ourTeam: "Our Team",
      ourTeamText: "Our team of experienced engineers, technicians, and customer support professionals brings years of expertise and passion to every project. We are dedicated to understanding each client’s needs and providing solutions that exceed expectations.",
      ourValues: "Our Values",
      quality: "Quality",
      animatedText: {
        staticText: "We also create custom equipment",
        animatedParts: [
          "for the food industry.",
          "for the chemical industry.",
          "for the pharmaceutical industry."
        ]
      },
      qualityText: "We believe in delivering only the best. Quality control is an integral part of our process at every stage, from design to final installation.",
      reliability: "Reliability",
      reliabilityText: "Our products are built to last, providing reliable performance even in the most demanding industrial environments.",
      customerFocus: "Customer Focus",
      customerFocusText: "We put our clients first, ensuring they receive personalized service and support tailored to their unique needs.",
      sustainability: "Sustainability",
      sustainabilityText: "TANKİNOX is committed to environmentally responsible practices. We work to reduce waste and energy usage in our production processes and strive to offer sustainable solutions whenever possible.",
      ourFacilities: "Our Facilities",
      moreproducts: "MORE PRODUCTS",
      automation: {
        title: "Automation of Production Processes",
        subtitle: "By implementing next-generation technological systems, we make automation simple and efficient. Our services are highly valued because they enable:",
        point1: "Upgrading and modernizing technological equipment.",
        point2: "Reducing maintenance costs for auxiliary and storage equipment.",
        point3: "Minimizing manual labor and eliminating 'human factors.'",
        point4: "Boosting overall production efficiency and output.",
        point5: "Improving energy efficiency across operations.",
        point6: "Enhancing workplace safety and environmental sustainability."
      },    
      ourFacilitiesText: "Our state-of-the-art manufacturing facilities are equipped with the latest technologies in welding, polishing, and quality control. This enables us to produce tanks that not only meet industry standards but exceed them. From small-scale orders to large industrial projects, we have the capacity and capability to handle it all.",
      lookingToTheFuture: "Looking to the Future",
      TechnologiesTankinox: "TECHNOLOGIES AT TANKİNOX",
      lookingToTheFutureText: "As industries evolve, so do we. TANKİNOX remains dedicated to pushing the boundaries of what’s possible in tank manufacturing, ensuring that our clients have access to the best technology and most reliable solutions in the market.",
      tankinoxPartner: "TANKİNOX – Your Partner in Stainless Steel Excellence",
      tankinoxPartnerText: "Contact us today to learn more about how we can help you achieve your goals with high-quality, custom stainless steel tanks.",
      overThePast: "We continually reinvest in our production equipment and improve our operational efficiency by implementing industry best practices and advanced methodologies.",
      manufacturingTitle: "Advanced Welding Techniques",
      tankinox: {
        main: "TANKİNOX GUARANTEES ",
        span: "QUALITY"
      },
      manufacturingDescription: "Precision manufacturing is crucial for the strength and longevity of stainless steel tanks, especially for industries requiring sterile or high-pressure environments. We utilize state-of-the-art techniques, including automated systems and high-tech machinery.",
      mainadvantageheader: "Main advantages of automatic argon arc welding by TANKİNOX",
      advantage1Title: "High-Quality Welds",
      advantage1Description: "Produces clean, smooth, and defect-free welds with minimal oxidation.",
      advantage2Title: "Precision and Consistency",
      advantage2Description: "Automated control ensures accurate, repeatable welds, ideal for high-standard industries.",
      advantage3Title: "Material Versatility",
      advantage3Description: "Suitable for stainless steel, aluminum, titanium, and more.",
      advantage4Title: "Minimal Distortion",
      galleryTitle: "Explore Our Gallery",
      equipment: {
        title: "Equipment",
        subtitle: "Production",
        methods: {
          title: "We offer you two production methods",
          subtitle: "from TANKİNOX:"
        },
        cards: {
          card1: {
            title: "Production",
            highlight: "at TANKİNOX factory",
            description: "We have a well-established comprehensive production. Our engineering and technical department handles the design, engineering, and production of equipment."
          },
          card2: {
            title: "Assembly and installation",
            highlight: "on your site",
            description: "Modern equipment and a team of specialists allow us to manufacture tanks of various sizes on your site in a fairly short time. Pre-prepared materials and components are delivered to the site in special containers."
          }
        },
        info: {
          title: "Why choose us?",
          description: "TANKİNOX guarantees top-quality equipment and services tailored to your unique needs. With state-of-the-art technology and a highly skilled team, we ensure reliable and efficient production."
        }
      },
      advantage4Description: "Controlled heat input reduces material distortion and preserves integrity.",
      advantage5Title: "Less Cleanup",
      advantage5Description: "Minimal spatter and slag mean faster, easier post-weld finishing.",
      moreservices: "MORE SERVICES",
      item: {
        not_found: "Item not found",
        products_unique: "Each of our products is unique.",
        tankinox_info_part_1: "TANKİNOX designs and manufactures process equipment strictly according to technical specifications and the client’s specific project. We approach every project with attention to detail, ensuring that our solutions are always customized and never standardized.",
        tankinox_info_part_2: "in our dictionary.",
        title: {
          stainless_steel_tanks: "Stainless Steel Tanks",
          xxl_tanks: "XXL Tanks",
          aseptic_tanks: "Aseptic Tanks",
          insulated_tanks: "Insulated Tanks",
          alcohol_tanks: "Alcohol Storage Tanks",
          pharmaceutical_tanks: "Pharmaceutical Tanks",
          chemical_tanks: "Chemical Tanks",
          cip_tanks: "CIP Station Tanks",
          heat_cool_tanks: "Heat and Cooling Tanks",
          flat_tanks: "Flat Bottom Tanks",
          conical_tanks: "Conical Tanks",
          torospheric_tanks: "Torospheric Tanks"
        },
        description: {
          stainless_steel_tanks: "High-quality stainless steel tanks designed for durability and versatility.",
          xxl_tanks: "Large-capacity XXL tanks suitable for industrial-scale storage and processing.",
          aseptic_tanks: "Aseptic tanks ensuring sterile storage for sensitive materials.",
          insulated_tanks: "Thermally insulated tanks for maintaining temperature consistency.",
          alcohol_tanks: "Specialized tanks for safe storage and handling of alcohol products.",
          pharmaceutical_tanks: "Precision-engineered tanks for pharmaceutical manufacturing.",
          chemical_tanks: "Tanks designed to safely store and process chemical substances.",
          cip_tanks: "Tanks optimized for Cleaning-In-Place (CIP) systems, ensuring hygiene.",
          heat_cool_tanks: "Tanks equipped with heating and cooling systems for precise temperature control.",
          flat_tanks: "Flat bottom tanks ideal for efficient storage in confined spaces.",
          conical_tanks: "Conical tanks designed for optimal drainage and material flow.",
          torospheric_tanks: "Torospheric tanks offering robust construction for high-pressure storage."
        },
        material: {
          title: "Material:",
          details: "or other stainless steel types based on requirements."
        },
        surface: {
          title: "Surface finishing:",
          options: {
            twob: "2B (IIc)",
            twor: "2R (IIId, BA)",
            grinding: "Grinding (2G)",
            satin: "Satin polishing (2K)",
            decorative: "Decorative"
          }
        }
      },
      contactus: "Contact us",
      services11: "TANKİNOX specialize ",
      aboutPage: {
        title: "About us | TANKİNOX"
      },
      services11span: "at production optimization, ",
      services11nospan: "which includes a full range of services:",
      productFirst: {
        title: "Each TANKİNOX product is fully customizable to meet industry-specific requirements, with options for automation, monitoring, and temperature control. Our tanks are built for durability, hygiene, and optimal performance across various applications.",
        item1: "STAINLESS STEEL TANKS",
        item2: "XXL TANKS",
        item3: "ASEPTIC TANKS",
        item4: "THERMALLY INSULATED TANKS",
        technologyTitle: "Innovative Technology",
        technologyDescription: "Precision welding is crucial for the strength and longevity of stainless steel tanks, especially for industries requiring sterile or high-pressure environments. We utilize state-of-the-art welding techniques, including TIG (Tungsten Inert Gas).",
        processTitle: "PROCESS / STORAGE TANKS",
        processItem1: "ALCOHOL STORAGE TANKS",
        processItem2: "PHARMA / COSMETICS",
        processItem3: "CHEMICAL / PHARMA REACTORS",
        processItem4: "CIP CLEANING SYSTEMS",
        processItem5: "WITH HEATING / COOLING JACKET",
        processItem6: "WITH FLAT BOTTOM",
        processItem7: "WITH CONICAL BOTTOM",
        processItem8: "TORISPHERICAL/ELLIPTICAL BOTTOM",
        advantagesTitle: "Our products have the following advantages:",
        advantage1Title: "Argon Arc Welding",
        advantage1Description: "Due to the spiral welding technology, TANKİNOX produces innovative tanks and containers.",
        advantage2Title: "High-Quality Welds",
        advantage2Description: "Produces clean, smooth, and defect-free welds with minimal oxidation.",
        advantage3Title: "Minimal Distortion",
        advantage3Description: "Controlled heat input reduces material distortion and maintains integrity.",
        rightDescription: "TANKİNOX produces custom-made non-standard equipment, considering operational conditions.",
        rightFactorsTitle: "The following factors are taken into account:",
        factor1: "➩ Automation of the technical process",
        factor2: "➩ Level of mechanization",
        factor3: "➩ Dimensions of workshops, etc.",
      },
      services1: {
        engineering: "ENGINEERING",
        welding: "WELDING",
        assembly: "ASSEMBLY",
        thermal: "THERMAL",
        stamping: "STAMPING",
      },
      careers1: {
        vacancies: "VACANCIES",
        internships: "and internships",
        joinTeam: "Join the TANKİNOX team and be part of a leading company in stainless steel tank manufacturing.",
        whyWorkAtTankinox: "Why Work at TANKİNOX?",
        careerGrowth: "Career Growth",
        careerGrowthText: "We invest in our employees' professional development through training and advancement opportunities.",
        competitiveCompensation: "Competitive Compensation",
        competitiveCompensationText: "Our salaries and benefits are designed to attract and retain top talent in the industry.",
        innovation: "Innovation-Focused Environment",
        innovationText: "At TANKİNOX, you’ll work on exciting projects with the latest technology.",
        quality: "Commitment to Quality and Safety",
        qualityText: "We prioritize high-quality production and a safe work environment for all team members.",
        endMessage: "If you're ready to be part of a team TANKİNOX that shapes the future of industrial solutions, join us at TANKİNOX and take the next step in your career!",
      },
      otherContacts: "Other contacts:",
      phonecontacts: "Our Phone:",
      workingHours: "How we work:",
      workingTime: "10:00-18:00",
      address: "Our Address:",
      cuttingPage: {
        cuttingp: "Cutting",
        cuttingpbr: "and stamping",
        title: "Cutting and Stamping | TANKİNOX",
        mainTitle: "TANKİNOX offers a wide range of metal processing services:",
        guillotineTitle: "Guillotine Metal Cutting",
        guillotineDescription: "Guillotine cutting is a reliable and inexpensive cutting method, primarily used for serial production of metal products. The main advantage of this technology is its high productivity.",
        guillotinemaxTitle: "Maximum Guillotine Cutting Thickness:",
        guillotineItems: {
          item1: "STAINLESS STEEL",
          item2: "CARBON STEEL",
          item3: "GALVANIZED STEEL",
          item4: "ALUMINUM ALLOYS",
          to8mm: "up to 8 mm"
        },
        guillotineTitle1: "Maximum sheet metal dimensions:",
        guillotinemax4: "up to 4 meters",
        guillotinemax3: "up to 3 meters",
        coordinatemainTitle: "Coordinate Punching",
        coordinatemainDescription: "We perform a variety of operations on metal blanks: through-hole punching, perforation, part punching, burr removal, and much more.",
        coordinateMax: "Maximum thickness:",
        coordinateitemP: "METAL",
        coordinateitemSpan: "up to 3 mm",
        plasmamainTitle: "Plasma Metal Cutting",
        plasmamainDescription: "Plasma metal cutting is considered one of the most energy-efficient methods. The technology is based on melting the metal sheet with plasma gas.",
        coordinatemaxspan1: "up to 30 mm",
        coordinatemaxspan2: "up to 40 mm",
        coordinatemax2 : "up to 2 meters",
        coordinatemax1 : "up to 1 meters",
        plasmamax1: "up to 6 meters",
        plasmamax2: "up to 3 meters",
        oxygenmainTitle: "Oxygen Metal Cutting",
        oxygenmainDescription: "The technology of oxygen cutting involves intense oxidation of the metal surface. Technically pure oxygen eliminates the oxides formed during the process.",
        oxygenItems: {
          item1p: "CUTTING WITH A LANCE",
          item1small: "Creating holes in thick metal.",
          item2p: "SEPARATION",
          item2small: "Complete sheet separation into two or more parts.",
          item3p: "SURFACE CUTTING",
          item3small: "Part of the top layer is removed to create a specified depth."
        },
        stampingmainTitle: "Bending and Rolling of Sheet Metal",
        stampingmainDescription: "Bending and rolling are used in the production of volumetric metal products from sheet material and metal profiles. ARTINOX™, as a leading company in its region, guarantees the highest quality turnkey services.",
        stampingTitle: "METAL BENDING",
        stampingTitle1: "The bending technology allows shaping the part without affecting the material's integrity or properties. During this processing, no seams or defects remain.",
        stampingItems: {
          item1p: "C-shaped",
          item1small: "Maximum thickness up to 4 mm at a sheet length of up to 4000 mm.",
          item2p: "Arbitrary",
          item2small: "Maximum thickness up to 6 mm at a sheet length of up to 2000 mm.",
          item3p: "J-shaped",
          item3small: "Maximum thickness up to 5 mm at a sheet length of up to 3000 mm."
        }
      },
      
      addressDetails: "str. Industriale 1, st. Măgdăcești, rn. Criuleni, Republic of Moldova, MD-4829",
      onMaps: "We are on maps:",
      instagram: "Instagram: @Tankinox",
      telegram: "Telegram: @Tankinox",
      youtube: "YouTube: @Tankinox",
      whatsapp: "WhatsApp: @Tankinox",
        thermal: {
          title: "Thermal Insulation",
          subtitle: "and Stamping",
          temperatureControl: "Temperature control is one of the basic aspects of the safe operation of storage equipment.",
          description: "It is impossible to meet the necessary standards and requirements without high-quality thermal insulation of tanks. You can order thermal insulation services for storage, heat exchange equipment, and pipelines at TANKİNOX!",
          materials: "TANKİNOX performs thermal insulation work with the following materials:",
          materialsList: {
            item1: "Perlite, vermiculite.",
            item2: "Foamed synthetic rubber.",
            item3: "Polyurethane foam (PUF).",
            item4: "Mineral wool."
          },
          additionalInfo: "In addition to storage equipment, we insulate heat exchange equipment and technological pipelines.",
          cladding: {
            title: "Stamping at TANKİNOX",
            description: "To protect the thermal insulation layer, an outer stamping with a protective metal coating is performed:",
            materials: {
              item1: "Stainless steel sheet",
              item2: "Aluminum sheet",
              item3: "Galvanized sheet with polymer coating"
            }
          }
        },
      

    },
  },
  ru: {
    translation: {
      about: 'О нас',
      technologies: 'Технологии',
      products: 'Продукция',
      services: 'Услуги',
      careers: 'Карьера',
      fifth: {
        engineering: "ИНЖИНИРИНГ",
        welding: "СВАРКА",
        assembly: "МОНТАЖ И СБОРКА",
        thermal: "ТЕПЛОИЗОЛЯЦИЯ",
        stamping: "РЕЗКА И ШТАМПОВКА",
        equipmentProduction: "ПРОИЗВОДСТВО ОБОРУДОВАНИЯ"
      },
      contacts: 'Контакты',
      weldingPage: {
        title: "Сварка | TANKİNOX",
        title1: "Сварочные услуги",
        services: {
          title: "TANKİNOX предоставляет профессиональные услуги промышленной сварки:",
          description: "Современное оборудование позволяет нам справляться с задачами любой сложности и масштаба.",
          metalsTitle: "Для производства мы используем следующие металлы:",
          metal1: "Нержавеющая сталь",
          metal2: "Цветные металлы и их сплавы",
          metal3: "Чугун",
          metal4: "Углеродистая сталь"
        },
        advantages: {
          title: "Наши главные преимущества — индивидуальный подход и профессионализм."
        },
        tigWig: {
          title: "Аргонодуговая сварка (TIG/WIG)",
          description: "Идеальный метод для работы с цветными металлами и легированными сталями.",
          types: "Существует три метода TIG/WIG сварки:",
          manual: "Ручной",
          semiauto: "Полуавтоматический",
          auto: "Автоматический"
        },
        mig: {
          migTitle: "Полуавтоматическая сварка (MIG/MAG)",
          migDescription: "MIG/MAG сварка (Metal Inert/Active Gas) — это процесс, при котором используется плавящийся электрод в защитной газовой среде.",
          migAdvantages: "Почему выбирают MIG/MAG сварку от TANKİNOX:",
          advantage1: "Высокая скорость работы",
          advantage2: "Широкий спектр выполняемых задач",
          advantage3: "Качественные и ровные швы",
          advantage4: "Непрерывность процесса"
        },
        plasmaWelding: {
          mainText: "С нами вы можете быть уверены в результате: современное оборудование и квалифицированная команда!",
          title: "Плазменная сварка",
          description: "Этот метод позволяет добиться глубокого проплавления металла, идеально подходящего для сварки листов толщиной до 9 мм.",
          advantages: "Основные преимущества плазменной сварки:",
          advantage1: "Аккуратные и эстетичные швы",
          advantage1Description: "Швы после плазменной сварки практически незаметны и выглядят очень аккуратно.",
          advantage2: "Экологичность процесса",
          advantage2Description: "Производственный процесс остается чистым и минимизирует отходы.",
          advantage3: "Минимальные деформации",
          advantage3Description: "Прочность изделий остается на высшем уровне."
        }
      },
      language: 'Язык',
      highQualityTitle: "ВЫСОКОКАЧЕСТВЕННЫЕ НЕРЖАВЕЮЩИЕ ЕМКОСТИ ДЛЯ ПРОМЫШЛЕННОГО ПРИМЕНЕНИЯ",
      brandTitle: "БРЕНД TANKİNOX",
      services11: "TANKİNOX специализируется ",
      services11span: "на оптимизации производства, ",
      services11nospan: "что включает в себя полный спектр услуг:",
      brandText: "Накопленный опыт, слаженная команда и ноу-хау позволяют нам быть уверенными, что каждый элемент, изготовленный под брендом TANKİNOX, будет высокого качества.",
      weldingTitle: "Инновационная технология автоматической аргонодуговой сварки",
      weldingText: "Идея данной технологии заключается в одновременном выполнении дополнительных процессов, что обеспечивает высочайшее качество и сокращает время производства по сравнению с классическим методом.",
      outputProductTitle: "ВЫХОДНОЙ ПРОДУКТ",
      outputProductText: "Цилиндрическая емкость с коническим дном и идеально гладкой внутренней и внешней поверхностью. Подходит для хранения и транспортировки жидкостей или сыпучих материалов.",
      ourProducts: 'Наша продукция',

      equipment: {
        title: "Производство",
        subtitle: "оборудования",
        methods: {
          title: "Мы предлагаем вам два метода производства",
          subtitle: "от TANKİNOX:"
        },
        cards: {
          card1: {
            title: "Производство",
            highlight: "на заводе TANKİNOX",
            description: "У нас хорошо организованное и комплексное производство. Наш инженерно-технический отдел занимается проектированием, разработкой и производством оборудования."
          },
          card2: {
            title: "Сборка и установка",
            highlight: "на вашем объекте",
            description: "Современное оборудование и команда специалистов позволяют нам производить резервуары различного размера на вашем объекте в довольно короткие сроки. Предварительно подготовленные материалы и компоненты доставляются на объект в специальных контейнерах."
          }
        },
        info: {
          title: "Почему выбирают нас?",
          description: "TANKİNOX гарантирует высококачественное оборудование и услуги, адаптированные к вашим индивидуальным потребностям. С передовыми технологиями и высококвалифицированной командой мы обеспечиваем надежное и эффективное производство."
        }
      }, 
      stainlessSteelTanks: 'Нержавеющие стальные баки',
      tanksXXL: 'Емкости XXL',
      item: {
        not_found: "Элемент не найден",
        products_unique: "Каждый из наших продуктов обладает уникальными характеристиками.",
        tankinox_info_part_1: "TANKİNOX занимается проектированием и производством оборудования для технологических процессов, строго следуя техническим спецификациям и индивидуальным проектам клиентов. Мы подходим к каждому проекту с вниманием к деталям, поэтому в наших разработках невозможно встретить однотипные решения.",
        title: {
          stainless_steel_tanks: "Нержавеющие емкости",
          xxl_tanks: "Емкости XXL",
          aseptic_tanks: "Ацептические емкости",
          insulated_tanks: "Изолированные емкости",
          alcohol_tanks: "Емкости для хранения алкоголя",
          pharmaceutical_tanks: "Фармацевтические емкости",
          chemical_tanks: "Химические емкости",
          cip_tanks: "CIP станции",
          heat_cool_tanks: "Теплообменные емкости",
          flat_tanks: "Емкости с плоским дном",
          conical_tanks: "Конические емкости",
          torospheric_tanks: "Торосферические емкости"
        },
        description: {
          stainless_steel_tanks: "Высококачественные емкости из нержавеющей стали для долговечности и универсальности.",
          xxl_tanks: "Емкости большого объема для промышленного хранения и переработки.",
          aseptic_tanks: "Ацептические емкости для стерильного хранения чувствительных материалов.",
          insulated_tanks: "Изолированные емкости для поддержания стабильной температуры.",
          alcohol_tanks: "Специализированные емкости для безопасного хранения алкоголя.",
          pharmaceutical_tanks: "Точные емкости для фармацевтической промышленности.",
          chemical_tanks: "Емкости для безопасного хранения и обработки химических веществ.",
          cip_tanks: "Емкости для систем CIP, обеспечивающих гигиену.",
          heat_cool_tanks: "Емкости с системой нагрева и охлаждения для контроля температуры.",
          flat_tanks: "Емкости с плоским дном для эффективного хранения.",
          conical_tanks: "Конические емкости для оптимального слива материалов.",
          torospheric_tanks: "Торосферические емкости для высоконадежного хранения под давлением."
        },
        material: {
          title: "Материал:",
          details: "или другие типы нержавеющей стали по требованиям."
        },
        surface: {
          title: "Отделка поверхности:",
          options: {
            twob: "2B (IIc)",
            twor: "2R (IIId, BA)",
            grinding: "Шлифовка (2G)",
            satin: "Сатиновая полировка (2K)",
            decorative: "Декоративная отделка"
          }
        }
      },
      asepticTanks: 'Асептические емкости',
      processStorageTanks: 'Баки для Процессов/Хранения',
      cipStations: 'CIP Станции',
      tankinoxProviding: "TANKİNOX предоставляет",
      services: "Услуги",
      
      engineering: "ИНЖЕНЕРИЯ",
      tankinox: {
        main: "TANKİNOX ГАРАНТИРУЕТ ",
        span: "КАЧЕСТВО"
      },
      welding: "СВАРКА",
      assembly: "СБОРКА",
      galleryTitle: "Исследуйте нашу галерею",
      thermal: "ТЕПЛОВАЯ",
      stamping: "ШТАМПОВКА",
      clientApproach: "Несмотря на разнообразие партнерских организаций, команда TANKİNOX гарантирует индивидуальный подход к каждому клиенту.",
      costFunctionalityRatio: "Мы привлекаем лучших специалистов, чтобы обеспечить идеальное соотношение между вашими затратами и функциональностью конечного продукта.",
      footerDescription: "TANKİNOX — это специализированная компания, ориентированная на проектирование и производство высококачественных нержавеющих баков для широкого спектра промышленных применений. С богатым опытом в отрасли мы гарантируем отличное качество.",
      aboutUsfooter: "О нас",
      careersfooter: "Карьера",
      contactsfooter: "Контакты",
      servicesfooter: "УСЛУГИ",
      aboutPage: {
        title: "О нас | TANKİNOX"
      },
      winemaking: "Виноделие",
      brewing: "Пивоварение",
      chemicalStorage: "Химическое хранилище",
      productsfooter: "ПРОДУКЦИЯ",
      steelTanks: "Стальные баки",
      pressureVessels: "Сосуды под давлением",
      customSolutions: "Индивидуальные решения",
      industries: "ОТРАСЛИ",
      foodBeverage: "Пищевая и напитковая промышленность",
      pharmaceutical: "Фармацевтика",
      energy: "Энергетика",
      addressLine1: "str. Industriale 1,",
      addressLine2: "st. Măgdăcești, rn. Criuleni, Republic of Moldova, MD-4829",
      phone: "+373",
      email: "Example@inox.ro",
      copyright: "© 2024 TANKİNOX. Все права защищены.",
      whoWeAre: "Кто мы?",
      whoWeAreText: "В компании TANKİNOX мы специализируемся на проектировании и производстве высококачественных нержавеющих баков для различных отраслей. Основанная с обязательством к качеству и инновациям, мы стали ведущим поставщиком решений для хранения для пищевой и напитковой, фармацевтической, химической и энергетической отраслей. Наши баки разработаны с учетом самых высоких стандартов прочности, безопасности и гигиены, что обеспечивает надежную работу для наших клиентов по всему миру.",
      ourMission: "Наша миссия",
      ourMissionText: "Нашей целью является предоставление современных, высококачественных решений для хранения, которые позволяют нашим клиентам безопасно и эффективно хранить и обрабатывать материалы, удовлетворяя специфические потребности их отраслей. Мы стремимся сочетать передовые технологии с исключительным мастерством для создания продуктов, которые выдержат испытание временем.",
      whyTankinox: "Почему TANKİNOX?",
      precisionQuality: "Точность и качество",
      precisionQualityText: "Каждый продукт TANKİNOX создается с тщательным вниманием к деталям. Наши опытные инженеры используют передовые методы производства и высококачественную нержавеющую сталь для создания продукции, которая соответствует строгим отраслевым стандартам и требованиям клиентов.",
      innovationDriven: "Движущая сила - инновации",
      innovationDrivenText: "Инновации являются основой того, что мы делаем. Мы постоянно инвестируем в исследования и разработки, чтобы улучшать наши проекты, улучшать производственные процессы и обеспечивать, чтобы наши емкости соответствовали самым современным требованиям отрасли.",
      customSolutions: "Индивидуальные решения",
      customSolutionsText: "Мы понимаем, что каждый бизнес имеет уникальные потребности. Наша команда тесно работает с клиентами, чтобы проектировать и строить емкости, которые соответствуют их специфическим операционным требованиям, предлагая индивидуальные решения для любой отрасли.",
      comprehensiveServices: "Комплексные услуги",
      comprehensiveServicesText: "Помимо производства, мы предлагаем полный спектр услуг, включая установку, обслуживание и консалтинг. Наша цель - предоставить всестороннюю поддержку, которая поможет нашим клиентам извлечь максимум из их оборудования.",
      ourTeam: "Наша команда",
      ourTeamText: "Наша команда опытных инженеров, техников и специалистов по поддержке клиентов привносит годы опыта и страсти в каждый проект. Мы стремимся понять потребности каждого клиента и предоставить решения, которые превосходят ожидания.",
      ourValues: "Наши ценности",
      quality: "Качество",
      contactus: "Свяжитесь с нами",
      qualityText: "Мы верим в поставку только лучшего. Контроль качества является неотъемлемой частью нашего процесса на каждом этапе, от проектирования до окончательной установки.",
      reliability: "Надежность",
      reliabilityText: "Наша продукция создана для долгосрочной эксплуатации, обеспечивая надежную работу даже в самых сложных промышленных условиях.",
      customerFocus: "Ориентированность на клиента",
      customerFocusText: "Мы ставим наших клиентов на первое место, обеспечивая персонализированное обслуживание и поддержку, соответствующие их уникальным потребностям.",
      sustainability: "Устойчивость",
      sustainabilityText: "TANKİNOX привержен экологически ответственным практикам. Мы работаем над снижением отходов и энергопотребления в нашем производственном процессе и стремимся предложить устойчивые решения, когда это возможно.",
      ourFacilities: "Наши производственные мощности",
      ourFacilitiesText: "Наши современные производственные мощности оснащены новейшими технологиями сварки, полировки и контроля качества. Это позволяет нам производить баки, которые не только соответствуют отраслевым стандартам, но и превосходят их. От малых заказов до крупных промышленных проектов — у нас есть возможности и мощности для всего.",
      lookingToTheFuture: "Смотрим в будущее",
      lookingToTheFutureText: "С развитием отраслей развиваемся и мы. TANKİNOX продолжает расширять границы возможного в производстве емкостей, обеспечивая своим клиентам доступ к лучшим технологиям и наиболее надежным решениям на рынке.",
      tankinoxPartner: "TANKİNOX – Ваш партнер в производстве нержавеющей стали",
      tankinoxPartnerText: "Свяжитесь с нами сегодня, чтобы узнать, как мы можем помочь вам достичь ваших целей с помощью высококачественных, индивидуальных емкостей из нержавеющей стали.",
      overThePast: "Мы постоянно реинвестируем в наше производственное оборудование и повышаем операционную эффективность, внедряя лучшие практики отрасли и современные методологии.",
      manufacturingTitle: "Современные техники сварки",
      manufacturingDescription: "Точное производство критично для прочности и долговечности нержавеющих стальных емкостей, особенно в отраслях, требующих стерильных или высоконапорных условий. Мы используем передовые технологии, включая автоматизированные системы и высокотехнологичное оборудование.",
      mainadvantageheader: "Основные преимущества автоматической аргоновой дуговой сварки от TANKİNOX",
      advantage1Title: "Высококачественные сварные швы",
      advantage1Description: "Создает чистые, гладкие и бездефектные сварные швы с минимальным окислением.",
      advantage2Title: "Точность и последовательность",
      advantage2Description: "Автоматизированный контроль обеспечивает точные и повторяемые сварные швы, идеально подходящие для высоких стандартов промышленности.",
      advantage3Title: "Универсальность материалов",
      advantage3Description: "Подходит для нержавеющей стали, алюминия, титана и других материалов.",
      advantage4Title: "Минимальные искажения",
      advantage4Description: "Контролируемый тепловой ввод снижает искажения материала и сохраняет его целостность.",
      advantage5Title: "Меньше очистки",
      advantage5Description: "Минимальное количество брызг и шлака означает более быструю и легкую отделку после сварки.",
      moreservices: "БОЛЬШЕ УСЛУГ",
      aboutTankinox: "О TANKİNOX",
      automation: {
        title: "Автоматизация производственных процессов",
        subtitle: "Внедряя технологические системы нового поколения, мы делаем автоматизацию простой и эффективной. Наши услуги высоко ценятся, так как позволяют:",
        point1: "Модернизировать технологическое оборудование.",
        point2: "Сократить расходы на обслуживание вспомогательного и емкостного оборудования.",
        point3: "Минимизировать ручной труд и исключить 'человеческий фактор'.",
        point4: "Повысить общую эффективность и производительность предприятия.",
        point5: "Улучшить энергоэффективность на всех этапах.",
        point6: "Повысить уровень безопасности и экологичности производства."
    },   
      engineering: {
        title: "Инжиниринг",
        subtitle: "и креативное проектирование",
        extra: {
          title: "Передовая промышленная аналитика",
          description: "Мы используем анализ данных и искусственный интеллект для оптимизации рабочих процессов и выявления возможностей для улучшения, сохраняя вашу компанию на шаг впереди."
        },
        cards: {
          title: "Современный инжиниринг и дизайн",
          subtitle: "от TANKİNOX",
          description: "Благодаря индивидуальному подходу к каждому клиенту, мы обеспечиваем высочайший уровень качества. Наши услуги включают внедрение современных технологических систем в производственные процессы.",
          card1: {
            title: "Комплексные инженерные услуги",
            description: "Мы предлагаем решения для модернизации производства или полного реинжиниринга процессов. Экономическая эффективность производства увеличивается минимум на 100%. Вы выбираете план оптимизации, а наша команда выполняет расчеты и планирование проекта."
          },
          card2: {
            title: "Решения под ключ",
            description: "С момента подачи заявки мы берем производственные ресурсы под полный контроль. Вы можете следить за ходом работ и регулярно получать консультации от наших специалистов."
          },
          card3: {
            title: "Интеграция автоматизированных процессов",
            description: "Мы специализируемся на внедрении автоматизации в существующие производственные линии, что позволяет существенно сократить простои и повысить эффективность работы. Индивидуальные решения гарантируют совместимость с вашим оборудованием."
          },
          card4: {
            title: "Индивидуальные промышленные решения",
            description: "Мы разрабатываем уникальные проекты в сотрудничестве с клиентами, обеспечивая адаптацию под их производственные задачи для максимальной эффективности и инновационности."
          }
        }
      },
      animatedText: {
        staticText: "Мы также создаем нестандартное оборудование",
        animatedParts: [
          "в направлении пищевой промышленности.",
          "для химической промышленности.",
          "для фармацевтической промышленности."
        ]
      },
      TechnologiesTankinox: "ТЕХНОЛОГИИ В TANKİNOX",
      moreproducts: "БОЛЬШЕ ПРОДУКЦИИ",
      productFirst: {
        item1: "Емкости из нержавеющей стали",
        item2: "Емкости XXL",
        item3: "Емкости асептические",
        item4: "Емкости теплоизолированные",
        title: "Каждый продукт TANKİNOX полностью настраиваем под отраслевые требования, с возможностями автоматизации, мониторинга и контроля температуры. Наши емкости созданы для долговечности, гигиены и оптимальной работы в различных приложениях.",
        technologyTitle: "Инновационные технологии",
        technologyDescription: "Прецизионная сварка имеет важное значение для прочности и долговечности нержавеющих емкостей, особенно для отраслей, требующих стерильной или высоконапряженной среды. Мы используем новейшие технологии сварки, включая TIG (сварка в среде инертного газа).",
        processTitle: "Продукция / Хранение",
        rightDescription: "TANKİNOX производит нестандартное оборудование, учитывая условия эксплуатации.",
        rightFactorsTitle: "Учитываются следующие факторы:",
        factor1: "➩ Автоматизация технологического процесса",
        factor2: "➩ Уровень механизации",
        factor3: "➩ Размеры цехов и другие параметры",
        processItem1: "Емкости для спиртохранилищ",
        processItem2: "Специальные емкости для фармации и косметики",
        processItem3: "Химические / фармацевтические реакторы",
        processItem4: "Системы мойки CIP",
        processItem5: "С рубашкой нагрева / охлаждения",
        processItem6: "С плоским днищем",
        processItem7: "С коническим днищем",
        processItem8: "С торосферическим/эллиптическим днищем",
        moreproducts: "БОЛЬШЕ ПРОДУКЦИИ",
        moreservices: "БОЛЬШЕ УСЛУГ",
        advantagesTitle: "Наша продукция имеет следующие преимущества:",
        advantage1Title: "Аргонодуговая сварка",
        advantage1Description: "Благодаря технологии спиральной сварки TANKİNOX производит инновационные емкости и контейнеры.",
        advantage2Title: "Высококачественные сварные швы",
        advantage2Description: "Чистые, гладкие и бездефектные сварные швы с минимальной окислением.",
        advantage3Title: "Минимальное искажение",
        advantage3Description: "Контролируемое тепловое воздействие снижает искажение материала и сохраняет его целостность.",
      },
      services1: {
        engineering: "ИНЖЕНЕРИЯ",
        welding: "СВАРКА",
        assembly: "СБОРКА",
        thermal: "ТЕПЛОВАЯ ОБРАБОТКА",
        stamping: "ШТАНЦЕВАНИЕ",
      },
      careers1: {
        vacancies: "ВАКАНСИИ",
        internships: "и стажировки",
        joinTeam: "Присоединяйтесь к команде TANKİNOX и станьте частью ведущей компании по производству нержавеющих емкостей.",
        whyWorkAtTankinox: "Почему нужно работать в TANKİNOX?",
        careerGrowth: "Карьерный рост",
        careerGrowthText: "Мы инвестируем в профессиональное развитие наших сотрудников через обучение и возможности для карьерного роста.",
        competitiveCompensation: "Конкурентоспособная оплата труда",
        competitiveCompensationText: "Наши зарплаты и льготы рассчитаны на привлечение и удержание лучших специалистов отрасли.",
        innovation: "Ориентированность на инновации",
        innovationText: "В TANKİNOX вы будете работать над увлекательными проектами с использованием новейших технологий.",
        quality: "Приверженность качеству и безопасности",
        qualityText: "Мы придаем большое значение качественному производству и обеспечению безопасных условий труда для всех членов команды.",
        endMessage: "Если вы готовы стать частью команды TANKİNOX, которая формирует будущее промышленных решений, присоединяйтесь к нам в TANKİNOX и сделайте следующий шаг в своей карьере!",
    },
    otherContacts: "Другие контакты:",
    phonecontacts: "Наш телефон:",
    workingHours: "Как мы работаем:",
    workingTime: "10:00-18:00",
    address: "Наш адрес:",
    assemblyPage: {
      title: "Монтажно-сборочные работы | TANKİNOX",
      mainTitle: "Монтажно-сборочные",
      subtitle: "работы",
      cards: {
        c1: {
          title: "Пуско-наладочные процедуры",
          description: "Это завершающий этап подготовки оборудования. Наши специалисты проводят проверку и настройку, чтобы гарантировать надежность и готовность к эксплуатации."
        },
        c2: {
          title: "Монтаж и проверка оборудования",
          description: "Монтаж оборудования проводится с особым вниманием к качеству и стандартам, чтобы техника работала бесперебойно и эффективно."
        }
      },
      safety: {
        title: "Безопасность на производстве",
        description: "Наши монтажные работы соответствуют современным стандартам безопасности и экологическим нормам, обеспечивая безопасные условия труда и минимальное воздействие на окружающую среду."
      },
      installation: {
        title: "Монтаж и подключение трубопроводов",
        description: "Предлагаем высококачественные услуги по монтажу и подключению трубопроводов и оборудования по разумной стоимости. Все заказы выполняются точно в срок.",
        items: [
          "Промышленные резервуары и хранилища",
          "Трубопроводы для технологических процессов",
          "Теплообменники",
          "Дополнительные вспомогательные системы"
        ]
      },
      efficiency: {
        title: "Оптимизация производительности",
        description: "Проведение проверок и тестов позволяет убедиться в исправности оборудования и оптимальной настройке всех систем."
      },
      testing: "Мы проводим детальные тесты, чтобы убедиться в надежности и герметичности соединений и сварных швов.",
      kipia: {
        title: "Системы контроля и измерений",
        description1: "Создание и настройка инженерных систем требуют точного планирования и профессионального выполнения.",
        description2: "TANKİNOX предлагает профессиональные услуги от опытных специалистов, имеющих многолетний опыт в области контроля и измерений.",
        items: [
          "Сборка технической документации и спецификаций",
          "Проектирование и расчетные расчеты КИПиА",
          "Выбор материалов и составление спецификаций",
          "Монтаж и подготовительные строительно-монтажные работы",
          "Тестирование и проверка систем КИПиА"
        ],
        tracking: "Контроль и мониторинг данных с помощью КИПиА позволяет отслеживать:",
        trackingItems: [
          "Температурные параметры среды",
          "Концентрация опасных веществ",
          "Уровень токсичных паров",
          "Объем и расход",
          "Интенсивность излучений",
          "Уровень жидкости в резервуарах",
          "Физические свойства материалов"
        ],
        equipment: "Возможность оснащения оборудованием для контроля:",
        equipmentItems: [
          "Датчики температуры",
          "Датчики давления",
          "Датчики уровня",
          "Другие контрольные системы"
        ]
      }
    },
    addressDetails: "ул. Индустриале 1, с. Мэгдэчешть, р-н Криулень, Республика Молдова, MD-4829",
    onMaps: "Мы на картах:",
    instagram: "Instagram: @Tankinox",
    telegram: "Telegram: @Tankinox",
    thermal: {
      title: "Теплоизоляция",
      subtitle: "и обшивка",
      temperatureControl: "Контроль температурного режима – один из базовых аспектов безопасной эксплуатации емкостного оборудования.",
      description: "Соблюсти необходимые нормы и требования без качественной теплоизоляции резервуаров невозможно. Заказать услуги по теплоизоляции емкостного, теплообменного оборудования и трубопроводов вы можете в TANKINOX!",
      materials: "TANKİNOX проводит теплоизоляционные работы следующими материалами:",
      materialsList: {
        item1: "Перлитом, вермикулитом.",
        item2: "Вспененным каучуком синтетического происхождения.",
        item3: "Пенополиуретаном (ППУ).",
        item4: "Минеральной ватой."
      },
      additionalInfo: "Кроме емкостного оборудования, мы теплоизолируем теплообменное оборудование и технологические трубопроводы.",
      cladding: {
        title: "Обшивка в компании TANKİNOX",
        description: "В качестве защиты слоя теплоизоляции выполняется наружная обшивка защитным металлическим покрытием:",
        materials: {
          item1: "Нержавеющим листом",
          item2: "Алюминиевым листом",
          item3: "Оцинкованным листом с полимерным покрытием"
        }
      }
    },
    youtube: "YouTube: @Tankinox",
    whatsapp: "WhatsApp: @Tankinox",

    cuttingPage: {
      cuttingp: "Резка",
      cuttingpbr: "и штамповка",
      title: 'Резка и Штамповка | TANKİNOX',
      mainTitle: "TANKİNOX предлагает широкий выбор услуг по металлообработке:",
      guillotineTitle: "Гильотинная резка металла",
      guillotineDescription: "Резка гильотиной – это надежный и недорогой способ резки. Прежде всего эта резка нужна для серийного производства металлической продукции. Ведь, помимо прочих преимуществ, главный плюс технологии – высокая производительность.",
      guillotinemaxTitle: "Максимальная толщина гильотинной резки:",
      guillotineItems: {
       item1 : "НЕРЖАВЕЮЩАЯ СТАЛЬ",
       item2 : "УГЛЕРОДИСТАЯ СТАЛЬ",
       item3 : "ОЦИНКОВАННАЯ СТАЛЬ",
       item4 : "АЛЮМИНИЕВЫЕ СПЛАВЫ",
       to8mm : "до 8 мм",
      },
      guillotineTitle1: "Максимальные параметры металлического листа:",
      guillotinemax4 : "до 4 метров",
      guillotinemax3 : "до 3 метров",
      coordinatemainTitle: "Координатно-высечная штамповка",
      coordinatemainDescription: "Мы проводим самые разные манипуляции по обработке металлических заготовок: сквозную пробивку, перфорацию, вырубку деталей, зачистку заусенцев и многое другое.",
      coordinateMax: "Максимальная толщина:",
      coordinateitemP: "МЕТАЛЛ",
      coordinateitemSpan: "до 3 мм",
      coordinatemax2 : "до 2 метров",
      coordinatemax1 : "до 1 метра",
      plasmamainTitle: "Плазменная резка металла",
      plasmamainDescription: "Плазменная резка металла признана одним из самых энергоэффективных методов. Технология основана на расплавлении металлического листа при помощи плазмообразующего газа.",
      coordinatemaxspan1 : "до 30 мм",
      coordinatemaxspan2 : "до 40 мм",
      plasmamax1: "до 6 метров",
      plasmamax2: "до 3 метров",
      oxygenmainTitle: "Кислородная резка металла",
      oxygenmainDescription: "Технология кислородной резки заключается в интенсивном окислении металлической поверхности. На материал воздействует поток технически чистого кислорода. Он же ликвидирует оксиды, выделяющиеся в ходе реакции.",
      oxygenItems: {
        item1p: "РЕЗКА КОПЬЕМ",
        item1small: "Проделывание отверстий в металле большой толщины.",
        item2p: "РАЗДЕЛИТЕЛЬНАЯ",
        item2small: "Сквозной раскрой, полное разделение листового материала на две и более частей.",
        item3p: "ПОВЕРХНОСТНАЯ",
        item3small: "С металлической детали «снимается» часть верхнего слоя, образуя слой заданной глубины.",
      },
      stampingmainTitle: "Гибка и вальцовка листового металла",
      stampingmainDescription: "Гибка и вальцовка используются при производстве объемных металлических изделий из листового материала и профилей из металла. ARTINOX™, как лидирующая в своем регионе компания, гарантирует наивысшее качество услуг «под ключ»",
      stampingTitle: "ГИБКА МЕТАЛЛА",
      stampingTitle1: "Технология гибки позволяет придать детали нужную форму, никак не влияя на целостность и свойства материала. В ходе такой обработки на изделии не остается швов и прочих дефектов.",
      stampingItems: {
        item1p : "П-образный",
        item1small: "При длине листа до 4000 мм, максимальная толщина должна быть до 4 мм.",
        item2p : "Произвольный",
        item2small: "При длине листа до 2000 мм, максимальная толщина должна быть до 6 мм.",
        item3p : "J-образный",
        item3small: "При длине листа до 3000 мм, максимальная толщина должна быть до 5 мм.",
      },

     },

    },
  },
  ro: {
    translation: {
      about: 'Despre noi',
      technologies: 'Tehnologii',
      products: 'Produse',
      fifth: {
        engineering: "INGINERIE",
        welding: "SUDARE",
        assembly: "MONTAJ ȘI ASAMBLARE",
        thermal: "IZOLAȚIE TERMICĂ",
        stamping: "TĂIERE ȘI ȘTANȚARE",
        equipmentProduction: "PRODUCȚIE DE ECHIPAMENTE"
      },
      services: 'Servicii',
      weldingPage: {
        title: "Sudură | TANKİNOX",
        title1: "Servicii de sudură",
        services: {
          title: "TANKİNOX oferă servicii profesionale de sudură industrială:",
          description: "Echipamentele moderne ne permit să gestionăm proiecte de orice complexitate și dimensiune.",
          metalsTitle: "Folosim următoarele metale pentru producție:",
          metal1: "Oțel inoxidabil",
          metal2: "Metale colorate și aliajele lor",
          metal3: "Fontă",
          metal4: "Oțel carbon"
        },
        advantages: {
          title: "Principalele noastre avantaje sunt abordarea personalizată și profesionalismul."
        },
        tigWig: {
          title: "Sudură TIG/WIG cu arc de argon",
          description: "O metodă ideală pentru prelucrarea metalelor colorate și a oțelurilor aliate.",
          types: "Există trei tipuri de sudură TIG/WIG:",
          manual: "Manuală",
          semiauto: "Semi-automată",
          auto: "Automată"
        },
        mig: {
          migTitle: "Sudură semi-automată (MIG/MAG)",
          migDescription: "Sudura MIG/MAG (Metal Inert/Active Gas) utilizează un electrod care se topește în mediu de gaz protector.",
          migAdvantages: "De ce să alegi sudura MIG/MAG de la TANKİNOX:",
          advantage1: "Viteză mare de lucru",
          advantage2: "Versatilitate în sarcini",
          advantage3: "Cusături uniforme și de calitate",
          advantage4: "Proces continuu"
        },
        plasmaWelding: {
          mainText: "Cu echipamente moderne și o echipă calificată, succesul este garantat!",
          title: "Sudură cu plasmă",
          description: "Această tehnologie permite topirea profundă a metalelor și este potrivită pentru foi de până la 9 mm grosime.",
          advantages: "Principalele beneficii ale sudurii cu plasmă:",
          advantage1: "Cusături estetice și precise",
          advantage1Description: "Cusăturile rezultate sunt aproape invizibile și foarte îngrijite.",
          advantage2: "Proces ecologic",
          advantage2Description: "Minimizarea deșeurilor și menținerea curățeniei în procesul de producție.",
          advantage3: "Deformații minime",
          advantage3Description: "Rezistența produselor este garantată."
        }
      },
      careers: 'Cariere',
      equipment: {
        title: "Echipamente",
        subtitle: "Producție",
        methods: {
          title: "Vă oferim două metode de producție",
          subtitle: "de la TANKİNOX:"
        },
        cards: {
          card1: {
            title: "Producție",
            highlight: "la fabrica TANKİNOX",
            description: "Avem o producție bine stabilită și completă. Departamentul nostru tehnic și de inginerie se ocupă de proiectarea, ingineria și producția echipamentului."
          },
          card2: {
            title: "Asamblare și instalare",
            highlight: "la fața locului",
            description: "Echipamentele moderne și echipa de specialiști ne permit să fabricăm rezervoare de diverse dimensiuni la locația dumneavoastră într-un timp relativ scurt. Materialele și componentele sunt transportate pe șantier în containere speciale."
          }
        },
        info: {
          title: "De ce să ne alegeți?",
          description: "TANKİNOX garantează echipamente și servicii de cea mai înaltă calitate, adaptate la nevoile dumneavoastră. Cu tehnologie de ultimă generație și o echipă extrem de calificată, asigurăm o producție fiabilă și eficientă."
        }
      },      
      contacts: 'Contacte',
      language: 'Limbă',
      highQualityTitle: "REZERVOR STAINLESS DE ÎNALTĂ CALITATE PENTRU APLICAȚII INDUSTRIALE",
      brandTitle: "BRANDUL TANKİNOX",
      services11: "TANKİNOX se specializează ",
      services11span:"în optimizarea producției, ",
      assemblyPage: {
      title: "Montaj și Asamblare | TANKİNOX",
  mainTitle: "Lucrari de asamblare",
  subtitle: "si montaj",
  cards: {
    c1: {
      title: "Proceduri de Punere în Funcțiune",
      description: "Echipa noastră testează și pregătește echipamentele înainte de punerea lor în funcțiune pentru a garanta performanța și funcționarea corectă."
    },
    c2: {
      title: "Asamblare și Inspecție Tehnică",
      description: "Asamblarea și verificările tehnice sunt esențiale pentru a asigura funcționarea fără întreruperi și conformitatea cu standardele tehnice."
    }
  },
  safety: {
    title: "Siguranța la Locul de Muncă",
    description: "Respectăm normele de siguranță și reglementările ecologice pentru a proteja personalul și pentru a asigura condiții de lucru sigure și eficiente."
  },
  installation: {
    title: "Instalare și Conectare Conducte",
    description: "Oferim servicii de înaltă calitate pentru instalarea și conectarea sistemelor tehnologice la prețuri accesibile și în termenul stabilit.",
    items: [
      "Rezervoare pentru stocare industrială",
      "Conducte tehnologice",
      "Schimbătoare de căldură",
      "Elemente auxiliare"
    ]
  },
  efficiency: {
    title: "Maximizarea Eficienței",
    description: "Procesul de testare și verificare ne asigură că toate componentele sunt configurate corect și funcționează optim."
  },
  testing: "Realizăm teste detaliate pentru a ne asigura că echipamentele sunt sigure și fără scurgeri.",
  kipia: {
    title: "Sisteme de Monitorizare și Control",
    description1: "Planificarea și implementarea sistemelor de inginerie necesită o abordare detaliată și profesionistă.",
    description2: "TANKİNOX oferă asistență profesională din partea inginerilor cu experiență vastă în acest domeniu.",
    items: [
      "Elaborarea documentației tehnice",
      "Proiectarea sistemelor și calcule tehnice",
      "Selectarea materialelor și crearea specificațiilor",
      "Realizarea lucrărilor de montaj și construcție",
      "Testarea și punerea în funcțiune a sistemelor"
    ],
    tracking: "Folosim sisteme de monitorizare pentru a urmări următoarele:",
    trackingItems: [
      "Temperatura mediului de lucru",
      "Concentrația substanțelor periculoase",
      "Concentrația substanțelor toxice",
      "Debitul și presiunea sistemului",
      "Intensitatea radiațiilor",
      "Nivelul fluidelor",
      "Proprietățile fizice ale materialelor"
    ],
    equipment: "Echipamentele pot fi dotate cu următoarele dispozitive:",
    equipmentItems: [
      "Senzori de temperatură",
      "Senzori de presiune",
      "Senzori de nivel",
      "Alte echipamente de monitorizare"
    ]
  },
},
      services11nospan:"care include întreaga gamă de servicii:",
      cuttingPage: {
        cuttingp: "Tăiere",
        cuttingpbr: "și perforare",
        title: "Tăiere și Perforare | TANKİNOX",
        mainTitle: "TANKİNOX oferă o gamă largă de servicii de prelucrare a metalului:",
        guillotineTitle: "Tăierea metalului cu ghilotină",
        guillotineDescription: "Tăierea cu ghilotină este o metodă de tăiere fiabilă și ieftină, utilizată în principal pentru producția în serie a produselor din metal. Principalul avantaj al acestei tehnologii este productivitatea ridicată.",
        guillotinemaxTitle: "Grosimea maximă a tăierii cu ghilotină:",
        guillotineItems: {
          item1: "OȚEL INOXIDABIL",
          item2: "OȚEL CARBONIC",
          item3: "OȚEL GALVANIZAT",
          item4: "ALIAJE DE ALUMINIU",
          to8mm: "până la 8 mm"
        },
        guillotineTitle1: "Dimensiunile maxime ale foii de metal:",
        guillotinemax4: "până la 4 metri",
        guillotinemax3: "până la 3 metri",
        coordinatemainTitle: "Perforarea coordonată",
        coordinatemainDescription: "Realizăm o varietate de operațiuni asupra semifabricatelor din metal: perforarea, perforarea prin găuri, tăierea pieselor, eliminarea bavurilor și multe altele.",
        coordinateMax: "Grosimea maximă:",
        coordinateitemP: "METAL",
        coordinateitemSpan: "până la 3 mm",
        plasmamainTitle: "Tăierea metalului cu plasmă",
        plasmamainDescription: "Tăierea cu plasmă este considerată una dintre cele mai eficiente metode din punct de vedere energetic. Tehnologia se bazează pe topirea foii de metal cu gaz plasmatic.",
        coordinatemaxspan1: "până la 30 mm",
        coordinatemaxspan2: "până la 40 mm",
        coordinatemax2 : "până la 2 metri",
        coordinatemax1 : "până la 1 metri",
        plasmamax1: "până la 6 metri",
        plasmamax2: "până la 3 metri",
        oxygenmainTitle: "Tăierea metalului cu oxigen",
        oxygenmainDescription: "Tehnologia tăierii cu oxigen implică oxidarea intensă a suprafeței metalului. Oxigenul tehnic pur elimină oxizii formați în timpul procesului.",
        oxygenItems: {
          item1p: "TĂIERE CU LANCE",
          item1small: "Crearea de găuri în metalul de mari grosimi.",
          item2p: "SEPARARE",
          item2small: "Separarea completă a foii metalice în două sau mai multe părți.",
          item3p: "TĂIERE PE SUPRAFAȚĂ",
          item3small: "O parte din stratul superior este eliminată pentru a crea o adâncime specificată."
        },
        stampingmainTitle: "Îndoire și rulare de foi metalice",
        stampingmainDescription: "Îndoirea și rularea sunt utilizate pentru producția de produse metalice volumetrice din materiale foi și profiluri de metal. ARTINOX™, ca lider în regiune, garantează cea mai înaltă calitate a serviciilor la cheie.",
        stampingTitle: "ÎNDOIEREA METALULUI",
        stampingTitle1: "Tehnologia de îndoire permite modelarea pieselor fără a afecta integritatea sau proprietățile materialului. Nu rămân suduri sau defecte în timpul acestui proces.",
        stampingItems: {
          item1p: "În formă de U",
          item1small: "Grosimea maximă până la 4 mm la o lungime de până la 4000 mm.",
          item2p: "Arbitrară",
          item2small: "Grosimea maximă până la 6 mm la o lungime de până la 2000 mm.",
          item3p: "În formă de J",
          item3small: "Grosimea maximă până la 5 mm la o lungime de până la 3000 mm."
        }
      },
      brandText: "Experiența acumulată, echipa bine coordonată și know-how-ul ne permit să fim siguri că fiecare element fabricat sub marca TANKINOX va fi de înaltă calitate.",
      weldingTitle: "Tehnologia inovativă de sudare cu arc de argon automatizat",
      weldingText: "Ideea acestei tehnologii constă în executarea simultană a proceselor suplimentare, asigurând o calitate superioară și reducând timpul de producție în comparație cu metoda clasică.",
      outputProductTitle: "PRODUSUL FINAL",
      aboutPage: {
        title: "Despre noi | TANKİNOX"
      },
      outputProductText: "Recipient cilindric cu fund conic și suprafață interioară și exterioară perfect netedă. Ideal pentru depozitarea și transportul lichidelor sau materialelor vrac.",
      ourProducts: 'PRODUSELE NOASTRE',
      stainlessSteelTanks: 'REZERVOARE DIN OŢEL INOXIDABIL',
      tanksXXL: 'REZERVOARE XXL',
      automation: {
        title: "Automatizarea proceselor de producție",
        subtitle: "Prin implementarea sistemelor tehnologice de ultimă generație, facem ca automatizarea să fie simplă și eficientă. Serviciile noastre sunt foarte apreciate deoarece permit:",
        point1: "Modernizarea și actualizarea echipamentelor tehnologice.",
        point2: "Reducerea costurilor de întreținere pentru echipamentele auxiliare și de depozitare.",
        point3: "Minimizarea muncii manuale și eliminarea 'factorilor umani'.",
        point4: "Creșterea eficienței generale și a productivității producției.",
        point5: "Îmbunătățirea eficienței energetice în toate operațiunile.",
        point6: "Îmbunătățirea siguranței la locul de muncă și a sustenabilității mediului."
    },
    
      item: {
        not_found: "Elementul nu a fost găsit",
        products_unique: "Fiecare dintre produsele noastre este unic.",
        tankinox_info_part_1: "TANKİNOX proiectează și produce echipamente pentru procese tehnologice, respectând cu strictețe specificațiile tehnice și proiectele individuale ale clienților. Abordăm fiecare proiect cu atenție la detalii, motiv pentru care soluțiile noastre sunt întotdeauna personalizate.",
        tankinox_info_part_2: "în dicționarul nostru.",
        title: {
          stainless_steel_tanks: "Rezervoare din oțel inoxidabil",
          xxl_tanks: "Rezervoare XXL",
          aseptic_tanks: "Rezervoare aseptice",
          insulated_tanks: "Rezervoare izolate",
          alcohol_tanks: "Rezervoare pentru alcool",
          pharmaceutical_tanks: "Rezervoare farmaceutice",
          chemical_tanks: "Rezervoare chimice",
          cip_tanks: "CIP stații",
          heat_cool_tanks: "Rezervoare de încălzire și răcire",
          flat_tanks: "Rezervoare cu fund plat",
          conical_tanks: "Rezervoare conice",
          torospheric_tanks: "Rezervoare torosferice"
        },
        description: {
          stainless_steel_tanks: "Rezervoare de oțel inoxidabil de înaltă calitate, concepute pentru durabilitate și versatilitate.",
          xxl_tanks: "Rezervoare cu capacitate mare, potrivite pentru stocarea și procesarea industrială.",
          aseptic_tanks: "Rezervoare aseptice pentru depozitarea sterilă a materialelor sensibile.",
          insulated_tanks: "Rezervoare izolate pentru menținerea temperaturii constante.",
          alcohol_tanks: "Rezervoare specializate pentru manipularea și stocarea alcoolului.",
          pharmaceutical_tanks: "Rezervoare de precizie pentru industria farmaceutică.",
          chemical_tanks: "Rezervoare pentru stocarea și procesarea în siguranță a substanțelor chimice.",
          cip_tanks: "Rezervoare pentru sistemele CIP, asigurând igiena.",
          heat_cool_tanks: "Rezervoare cu sisteme de încălzire și răcire pentru control precis al temperaturii.",
          flat_tanks: "Rezervoare cu fund plat, ideale pentru spații restrânse.",
          conical_tanks: "Rezervoare conice pentru scurgerea optimă a materialelor.",
          torospheric_tanks: "Rezervoare torosferice cu construcție solidă pentru stocarea sub presiune."
        },
        material: {
          title: "Material:",
          details: "sau alte tipuri de oțel inoxidabil în funcție de cerințe."
        },
        surface: {
          title: "Finisaj suprafață:",
          options: {
            twob: "2B (IIc)",
            twor: "2R (IIId, BA)",
            grinding: "Polizare (2G)",
            satin: "Polizare satinată (2K)",
            decorative: "Decorativ"
          }
        }
      },
      asepticTanks: 'REZERVOARE ASEPTICE',
      processStorageTanks: 'REZERVOARE PENTRU PROCESE/DEPOZITARE',
      cipStations: 'STAŢII CIP',
      tankinoxProviding: "TANKİNOX oferă",
      servicesfooter: "Servicii:",
      animatedText: {
        staticText: "De asemenea, creăm echipamente personalizate",
        animatedParts: [
          "pentru industria alimentară.",
          "pentru industria chimică.",
          "pentru industria farmaceutică."
        ]
      },
      engineering: "INGINERIE",
      TechnologiesTankinox: "TEHNOLOGII LA TANKİNOX",
      welding: "SUDURA",
      tankinox: {
        main: "TANKİNOX GARANTEAZĂ ",
        span: "CALITATEA"
      },
      assembly: "MONTAJ",
      thermal: "TERMIC",
      stamping: "STAMPARE",
      galleryTitle: "Explorați galeria noastră",
      clientApproach: "În ciuda diversității organizațiilor partenere, echipa TANKİNOX garantează o abordare individuală pentru fiecare client.",
      costFunctionalityRatio: "Atragem cei mai buni specialiști pentru a ne asigura că raportul dintre costurile dumneavoastră și funcționalitatea produsului final este perfect.",
      footerDescription: "TANKİNOX este o companie specializată, axată pe proiectarea și fabricarea de rezervoare din oțel inoxidabil de înaltă calitate pentru o gamă largă de aplicații industriale. Cu o experiență vastă în domeniu, livrăm excelență.",
      aboutUsfooter: "DESPRE NOI",
      careersfooter: "CARIERA",
      contactsfooter: "CONTACTE",
      servicesfooter: "SERVICII",
      thermal: {
        title: "Izolare termică",
        subtitle: "și placare",
        temperatureControl: "Controlul regimului de temperatură este unul dintre aspectele de bază ale exploatării sigure a echipamentelor de stocare.",
        description: "Respectarea normelor și cerințelor necesare este imposibilă fără izolația termică de calitate a rezervoarelor. Puteți comanda servicii de izolare termică pentru echipamente de stocare, schimbătoare de căldură și conducte la TANKINOX!",
        materials: "TANKİNOX efectuează lucrări de izolare termică cu următoarele materiale:",
        materialsList: {
          item1: "Perlit, vermiculit.",
          item2: "Cauciuc spumat de origine sintetică.",
          item3: "Spumă poliuretanică (PUF).",
          item4: "Lână minerală."
        },
        additionalInfo: "În afară de echipamentele de stocare, izolăm echipamentele de schimb de căldură și conductele tehnologice.",
        cladding: {
          title: "Placare la TANKİNOX",
          description: "Pentru protecția stratului de izolație termică, se realizează o placare exterioară cu un înveliș metalic de protecție:",
          materials: {
            item1: "Foaie de oțel inoxidabil",
            item2: "Foaie de aluminiu",
            item3: "Foaie galvanizată cu strat polimeric"
          }
        }
      },
      winemaking: "Vinificație",
      brewing: "Fabricarea berii",
      chemicalStorage: "Depozitare chimică",
      productsfooter: "PRODUSE",
      steelTanks: "Rezervoare din oțel",
      aboutTankinox: "DESPRE TANKİNOX",
      pressureVessels: "Vase sub presiune",
      customSolutions: "Soluții personalizate",
      industries: "INDUSTRII",
      moreproducts: "MAI MULTE PRODUSE",
      foodBeverage: "Alimente și băuturi",
      pharmaceutical: "Farmaceutic",
      energy: "Energie",
      addressLine1: "str. Industriale 1,",
      addressLine2: "st. Măgdăcești, rn. Criuleni, Republica Moldova, MD-4829",
      phone: "+373",
      email: "Example@inox.ro",
      copyright: "© 2024 TANKİNOX. Toate drepturile rezervate.",
      whoWeAre: "Cine suntem?",
      whoWeAreText: "La TANKİNOX, ne specializăm în proiectarea și fabricarea de rezervoare din oțel inoxidabil de înaltă calitate pentru o gamă largă de industrii. Fondată cu angajamentul de a oferi calitate și inovație, am crescut și am devenit un furnizor de top de soluții de stocare pentru sectoarele alimentar și de băuturi, farmaceutic, chimic și energetic. Rezervoarele noastre sunt concepute pentru a îndeplini cele mai înalte standarde de durabilitate, siguranță și igienă, asigurând performanță fiabilă pentru clienții noștri din întreaga lume.",
      ourMission: "Misiunea noastră",
      ourMissionText: "Scopul nostru este de a oferi soluții avansate și de înaltă calitate pentru rezervoare care permit clienților noștri să stocheze și să proceseze materiale în siguranță și eficiență, satisfăcând nevoile specifice ale industriilor lor. Ne străduim să combinăm tehnologia de vârf cu meșteșugul excepțional pentru a crea produse care rezistă testului timpului.",
      whyTankinox: "De ce TANKİNOX?",
      precisionQuality: "Precizie și calitate",
      precisionQualityText: "Fiecare produs TANKİNOX este fabricat cu o atenție meticuloasă la detalii. Inginerii noștri calificați utilizează tehnici avansate de fabricație și oțel inoxidabil de înaltă calitate pentru a livra produse care îndeplinesc standardele riguroase ale industriei și specificațiile clienților.",
      innovationDriven: "Inovație la baza noastră",
      innovationDrivenText: "Inovația este esențială pentru ceea ce facem. Investim continuu în cercetare și dezvoltare pentru a îmbunătăți design-urile noastre, a îmbunătăți procesele de producție și pentru a ne asigura că rezervoarele noastre sunt construite pentru a face față celor mai noi provocări și standarde ale industriei.",
      customSolutions: "Soluții personalizate",
      customSolutionsText: "Înțelegem că fiecare afacere are nevoi unice. Echipa noastră lucrează îndeaproape cu clienții pentru a proiecta și construi rezervoare care se potrivesc cerințelor lor operaționale specifice, oferind soluții personalizate pentru orice industrie.",
      comprehensiveServices: "Servicii complete",
      comprehensiveServicesText: "Dincolo de fabricație, oferim un pachet complet de servicii, inclusiv instalare, întreținere și consultanță. Scopul nostru este să oferim suport complet care ajută clienții să obțină cele mai bune rezultate din echipamentele lor.",
      ourTeam: "Echipa noastră",
      moreservices: "MAI MULTE SERVICII",
      ourTeamText: "Echipa noastră de ingineri experimentați, tehnicieni și profesioniști în suport pentru clienți aduc ani de expertiză și pasiune în fiecare proiect. Suntem dedicați să înțelegem nevoile fiecărui client și să oferim soluții care depășesc așteptările.",
      ourValues: "Valorile noastre",
      quality: "Calitate",
      qualityText: "Credem în livrarea celor mai bune produse. Controlul calității este o parte integrantă a procesului nostru în fiecare etapă, de la proiectare până la instalarea finală.",
      reliability: "Fiabilitate",
      reliabilityText: "Produsele noastre sunt construite pentru a dura, oferind performanță fiabilă chiar și în cele mai solicitante medii industriale.",
      customerFocus: "Focalizare pe client",
      customerFocusText: "Punem clienții noștri pe primul loc, asigurându-ne că aceștia beneficiază de servicii personalizate și suport adaptat nevoilor lor unice.",
      sustainability: "Sustenabilitate",
      sustainabilityText: "TANKİNOX este dedicată practicilor ecologice responsabile. Lucrăm pentru a reduce deșeurile și consumul de energie în procesele noastre de producție și ne străduim să oferim soluții sustenabile ori de câte ori este posibil.",
      ourFacilities: "Facilitățiile noastre",
      ourFacilitiesText: "Facilitățile noastre de producție de ultimă generație sunt echipate cu cele mai noi tehnologii de sudură, lustruire și control al calității. Acest lucru ne permite să producem rezervoare care nu doar că îndeplinesc standardele industriei, dar le depășesc. De la comenzi de mică amploare la proiecte industriale mari, avem capacitatea și competența de a le gestiona pe toate.",
      lookingToTheFuture: "Privind spre viitor",
      lookingToTheFutureText: "Pe măsură ce industriile evoluează, și noi evoluăm. TANKİNOX rămâne dedicată extinderii limitelor posibilului în fabricarea rezervoarelor, asigurându-se că clienții noștri au acces la cele mai bune tehnologii și cele mai fiabile soluții de pe piață.",
      tankinoxPartner: "TANKİNOX – Partenerul dumneavoastră în excelența oțelului inoxidabil",
      tankinoxPartnerText: "Contactați-ne astăzi pentru a afla mai multe despre cum vă putem ajuta să vă atingeți obiectivele cu rezervoare personalizate de oțel inoxidabil de înaltă calitate.",
      overThePast: "Reinvestim continuu în echipamentele noastre de producție și ne îmbunătățim eficiența operațională prin implementarea celor mai bune practici din industrie și metodologii avansate.",
      manufacturingTitle: "Tehnici avansate de fabricație",
      manufacturingDescription: "Fabricarea de precizie este esențială pentru rezistența și longevitatea rezervoarelor din oțel inoxidabil, în special pentru industriile care necesită medii sterile sau de înaltă presiune. Utilizăm tehnici de ultimă generație, inclusiv sisteme automatizate și echipamente de înaltă tehnologie.",
      mainadvantageheader: "Avantajele principale ale sudurii automatizate cu arc de argon de către TANKİNOX",
      advantage1Title: "Suduri de Înaltă Calitate",
      advantage1Description: "Produce suduri curate, netede și fără defecte, cu oxidare minimă.",
      advantage2Title: "Precizie și Consistență",
      advantage2Description: "Controlul automatizat asigură suduri precise și repetabile, ideale pentru industrii cu standarde înalte.",
      advantage3Title: "Versatilitate Materiale",
      advantage3Description: "Potrivit pentru oțel inoxidabil, aluminiu, titan și altele.",
      advantage4Title: "Deformare Minimă",
      contactus: "Contactaţi-ne",
      engineering: {
        title: "Inginerie",
        subtitle: "și design creativ",
        cards: {
          title: "Inginerie și design avansat",
          subtitle: "de la TANKİNOX",
          extra: {
            title: "Analitică industrială avansată",
            description: "Echipa noastră utilizează analiza avansată a datelor și informații bazate pe inteligență artificială pentru a optimiza fluxurile de lucru și a identifica oportunitățile de îmbunătățire, menținându-vă operațiunile în avangardă."
          },
          description: "Cu o abordare personalizată pentru fiecare client, garantăm cele mai înalte standarde de calitate. Serviciile noastre de inginerie includ integrarea sistemelor tehnologice de ultimă generație în procesele de producție.",
          card1: {
            title: "Servicii complete de inginerie",
            description: "Oferim soluții pentru optimizarea producției sau o reinginerie completă a proceselor. Performanța economică a producției crește cu cel puțin 100%. Alegeți planul de optimizare, iar echipa noastră tehnică se ocupă de calcule și planificarea proiectului."
          },
          card2: {
            title: "Soluții la cheie",
            description: "De la momentul depunerii cererii, preluăm controlul total asupra resurselor de producție. Puteți monitoriza progresul și primi consultații regulate de la experții noștri."
          },
          card3: {
            title: "Integrarea proceselor automatizate",
            description: "Suntem specializați în integrarea automatizării în liniile de producție existente, reducând semnificativ timpul de oprire și îmbunătățind eficiența operațională. Soluțiile personalizate asigură compatibilitatea perfectă cu echipamentele dvs."
          },
          card4: {
            title: "Soluții industriale personalizate",
            description: "Colaborăm cu clienții pentru a dezvolta proiecte personalizate, adaptate nevoilor specifice ale proceselor lor de producție, asigurând eficiență maximă și inovație."
          }
        }
      },
      advantage4Description: "Introducerea controlată a căldurii reduce deformarea materialului și păstrează integritatea acestuia.",
      advantage5Title: "Mai puțină curățare",
      advantage5Description: "Cantitatea minimă de stropi și zgură înseamnă o finisare post-sudare mai rapidă și mai ușoară.",

      productFirst: {
        title: "Fiecare produs TANKİNOX este complet personalizabil pentru a satisface cerințele specifice industriei, cu opțiuni pentru automatizare, monitorizare și control al temperaturii. Rezervoarele noastre sunt construite pentru durabilitate, igienă și performanță optimă în diverse aplicații.",
        item1: "REZERVOARE DIN OȚEL INOXIDABIL",
        item2: "REZERVOARE XXL",
        item3: "REZERVOARE ASEPTICE",
        item4: "REZERVOARE TERMOIZOLATE",
        technologyTitle: "Tehnologie Inovatoare",
        technologyDescription: "Sudura de precizie este esențială pentru rezistența și longevitatea rezervoarelor din oțel inoxidabil, mai ales pentru industriile care necesită medii sterile sau de înaltă presiune. Folosim tehnici de sudură de ultimă generație, inclusiv TIG (sudura cu gaz inert de tungsten).",
        processTitle: "PROCES / REZERVOARE DE STOCARE",
        processItem1: "REZERVOARE PENTRU DEPOZITAREA ALCOOLULUI",
        processItem2: "REZERVOARE SPECIALE PENTRU FARMACIE ȘI COSMETICE",
        processItem3: "REACTOARE CHIMICE / FARMACEUTICE",
        processItem4: "SISTEME DE CURĂȚARE CIP",
        processItem5: "CU MANTA DE ÎNCĂLZIRE / RĂCIRE",
        processItem6: "CU FUND PLAT",
        processItem7: "CU FUND CONIC",
        processItem8: "CU FUND TOROSFERIC/ELIPTIC",
        advantagesTitle: "Produsele noastre au următoarele avantaje:",
        advantage1Title: "Sudura cu Arc de Argon",
        advantage1Description: "Datorită tehnologiei de sudură în spirală, TANKİNOX produce rezervoare și recipiente inovative.",
        advantage2Title: "Suduri de Înaltă Calitate",
        advantage2Description: "Produce suduri curate, netede și fără defecte, cu oxidare minimă.",
        advantage3Title: "Deformare Minimă",
        advantage3Description: "Introducerea controlată a căldurii reduce deformarea materialului și păstrează integritatea acestuia.",
        rightFactorsTitle: "Se iau în considerare următorii factori:",
        factor1: "➩ Automatizarea procesului tehnic",
        factor2: "➩ Nivelul de mecanizare",
        factor3: "➩ Dimensiunile atelierelor și alte caracteristici",
      },
      services1: {
        engineering: "INGINERIE",
        welding: "SUDURA",
        assembly: "MONTARE",
        thermal: "TERMIC",
        stamping: "STANȚARE",
      },
      careers1: {
        vacancies: "LOCURI DE MUNCĂ",
        internships: "și stagii",
        joinTeam: "Alăturați-vă echipei TANKİNOX și fiți parte dintr-o companie de top în fabricarea rezervoarelor din oțel inoxidabil.",
        whyWorkAtTankinox: "De ce să lucrezi la TANKİNOX?",
        careerGrowth: "Dezvoltarea profesională",
        careerGrowthText: "Investim în dezvoltarea profesională a angajaților noștri prin formare și oportunități de avansare.",
        competitiveCompensation: "Compensație competitivă",
        competitiveCompensationText: "Salariile și beneficiile noastre sunt concepute pentru a atrage și a reține cei mai buni talente din industrie.",
        innovation: "Medii orientate spre inovație",
        innovationText: "La TANKİNOX veți lucra la proiecte interesante folosind cele mai noi tehnologii.",
        quality: "Angajament pentru calitate și siguranță",
        qualityText: "Punem un accent deosebit pe producția de calitate și asigurarea unui mediu de muncă sigur pentru toți membrii echipei.",
        endMessage: "Dacă sunteți gata să faceți parte dintr-o echipă TANKİNOX care modelează viitorul soluțiilor industriale, alăturați-vă nouă la Tankinox și faceți următorul pas în cariera dumneavoastră!",
      },
      otherContacts: "Alte contacte:",
      phonecontacts: "Telefonul nostru:",
      workingHours: "Cum lucrăm:",
      workingTime: "10:00-18:00",
      address: "Adresa noastră:",
      addressDetails: "str. Industriale 1, st. Măgdăcești, rn. Criuleni, Republica Moldova, MD-4829",
      onMaps: "Suntem pe hărți:",
      instagram: "Instagram: @Tankinox",
      telegram: "Telegram: @Tankinox",
      youtube: "YouTube: @Tankinox",
      whatsapp: "WhatsApp: @Tankinox"
    },
  },
  };


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
