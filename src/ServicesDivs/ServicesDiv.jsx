import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import './ServicesDiv.css';

export default function ServicesDiv() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const navigate = useNavigate();


  const services = [
    {
      services1: {
        en: "Tankinox specialize at production optimization, which includes a full range of services:",
        ru: "Tankinox специализируется на оптимизации производства, что включает в себя полный спектр услуг:",
        ro: "Tankinox se specializează în optimizarea producției, care include întreaga gamă de servicii:",
      },
      key: {
        en: 'ENGINEERING',
        ru: 'ИНЖИНИРИНГ',
        ro: 'INGINERIE'
      },
      details: {
        en: 'Engineering and reengineering of equipment and the entire enterprise.',
        ru: 'Инжиниринг и реинжиниринг оборудования и всего предприятия.',
        ro: 'Inginerie și reinginerie a echipamentelor și a întregii întreprinderi.'
      },
      route: '/TankinoxX/services/engineering'
    },
    {
      key: {
        en: 'CUTTING AND STAMPING',
        ru: 'РЕЗКА И ШТАМПОВКА',
        ro: 'TĂIERE ȘI ȘTANȚARE'
      },
      details: {
        en: ['Plasma cutting', 'Oxygen cutting', 'Stamping / Punching', 'Bending and Roll forming'],
        ru: ['Плазменная резка', 'Кислородная резка', 'Штамповка / Перфорация', 'Гибка и формовка'],
        ro: ['Tăiere cu plasmă', 'Tăiere cu oxigen', 'Ștanțare / Perforare', 'Îndoire și formare pe role']
      },
      route: '/TankinoxX/services/cutting-and-stamping'
    },
    {
      key: {
        en: 'EQUIPMENT PRODUCTION',
        ru: 'ПРОИЗВОДСТВО ОБОРУДОВАНИЯ',
        ro: 'PRODUCȚIA ECHIPAMENTELOR'
      },
      details: {
        en: 'Production of capacitive and auxiliary equipment, heads and bottoms for industrial purposes.',
        ru: 'Производство емкостного и вспомогательного оборудования, днищ и крышек для промышленных нужд.',
        ro: 'Producția de echipamente capacitive și auxiliare, capace și funduri pentru scopuri industriale.'
      },
      route: '/TankinoxX/services/equipment'
    },
    {
      key: {
        en: 'WELDING',
        ru: 'СВАРКА',
        ro: 'SUDARE'
      },
      details: {
        en: ['TIG/WIG Welding', 'MIG/MAG Welding', 'Plasma Welding'],
        ru: ['Сварка TIG/WIG', 'Сварка MIG/MAG', 'Плазменная сварка'],
        ro: ['Sudură TIG/WIG', 'Sudură MIG/MAG', 'Sudură cu plasmă']
      },
      route: '/TankinoxX/services/welding'
    },
    {
      key: {
        en: 'INSTALLATION & ASSEMBLY',
        ru: 'МОНТАЖ И СБОРКА',
        ro: 'INSTALARE ȘI ASAMBLARE'
      },
      details: {
        en: [
          'Start-up works',
          'Installation supervision',
          'Installation works and piping of process equipment, heat exchangers and pipelines',
          'EC&I'
        ],
        ru: [
          'Пуско-наладочные работы',
          'Надзор за установкой',
          'Монтажные работы и обвязка технологического оборудования, теплообменников и трубопроводов',
          'Электрооборудование и контроль'
        ],
        ro: [
          'Lucrări de punere în funcțiune',
          'Supravegherea instalării',
          'Lucrări de instalare și conducte ale echipamentelor de proces, schimbătoare de căldură și conducte',
          'EC&I'
        ]
      },
      route: '/TankinoxX/services/assembly'
    },
    {
      key: {
        en: 'THERMAL INSULATION',
        ru: 'ТЕПЛОИЗОЛЯЦИЯ',
        ro: 'IZOLAȚIE TERMICĂ'
      },
      details: {
        en: 'Thermal insulation works of tanks, pipelines and heat exchange equipment.',
        ru: 'Работы по термоизоляции резервуаров, трубопроводов и теплообменного оборудования.',
        ro: 'Lucrări de izolație termică a rezervoarelor, conductelor și echipamentelor de schimb de căldură.'
      },
      route: '/TankinoxX/services/thermal'
    }
  ];

  return (
    <>
    <div className="services-container">
      <h1 className="services-h1">
      {t('services11')}<span>{t('services11span')}</span>{t('services11nospan')}
      </h1>
      <div className="services-items">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="services-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            onClick={() => navigate(service.route)}
          >
            <h1>{service.key[currentLang]}</h1>
            <div className="services-details">
              {Array.isArray(service.details[currentLang]) ? (
                <ul>
                  {service.details[currentLang].map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              ) : (
                <p>{service.details[currentLang]}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
