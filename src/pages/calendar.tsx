import React from 'react';
import '../styles/calendar.css';

const CalendarsSection: React.FC = () => {
  const handleCalendarClick = (calendarType: string, url: string) => {
    console.log(`Clicked on: ${calendarType}`);
    
    // Opción 1: Redirigir en la misma pestaña
    window.location.href = url;
    
    // Opción 2: Abrir en nueva pestaña (comenta la línea de arriba y descomenta esta)
    // window.open(url, '_blank');
    
    // Opción 3: Si usas React Router (comenta las líneas de arriba y descomenta esta)
    // navigate(url);
  };

  return (
    <div>
      {/* Banner de Calendarios Institucionales */}
      <div className="calendars-banner">
        Calendarios Institucionales
      </div>

      {/* Contenido de calendarios */}
      <div className="calendars-content">
        <div className="calendars-container">
          {/* Enlaces de calendarios */}
          <ul className="calendars-list">
            <li className="calendar-item">
              <button
                onClick={() => handleCalendarClick('Calendario Institucional 2026', 'https://www.utn.ac.cr/sites/default/files/page/field_archivos_adjuntos_todo_tipo/Calendario%20Institucional%202026%20V.3_Modificado%20Acuerdo%20CU%2021-14-2026.pdf')}
                className="calendar-link"
              >
                • Calendario Institucional 2026
              </button>
            </li>
            
            <li className="calendar-item">
              <button
                onClick={() => handleCalendarClick('Calendario Institucional 2026 Por Procesos', 'https://www.utn.ac.cr/sites/default/files/page/field_archivos_adjuntos_todo_tipo/Calendario%20Institucional%202026%20Por%20Procesos%20V.3.pdf')}
                className="calendar-link"
              >
                • Calendario Institucional 2026 Por Procesos
              </button>
            </li>

            <li className="calendar-item spaced">
              <button
                onClick={() => handleCalendarClick('Calendario de Extensión y Acción Social', 'https://www.utn.ac.cr/sites/default/files/page/field_archivos_adjuntos_todo_tipo/Calendario%20Institucional%202026%20Extension.pdf')}
                className="calendar-link"
              >
                • Calendario de Extensión y Acción Social
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarsSection;