import React, { useEffect } from 'react';

const SalesNotification: React.FC = () => {
  useEffect(() => {
    const names = ['José','João','Antonio','Francisco','Carlos','Paulo','Pedro','Lucas','Luiz','Marcos','Gabriel','Rafael','Daniel','Bruno','Maria','Ana','Francisca','Juliana','Fernanda','Patrícia','Camila','Amanda','Bruna','Leticia','Julia','Mariana','Beatriz'];
    const cities = [['São Paulo','SP'],['Rio de Janeiro','RJ'],['Belo Horizonte','MG'],['Salvador','BA'],['Brasília','DF'],['Curitiba','PR'],['Fortaleza','CE'],['Manaus','AM'],['Recife','PE'],['Porto Alegre','RS'],['Belém','PA'],['Goiânia','GO'],['Guarulhos','SP'],['Campinas','SP'],['São Luís','MA'],['Maceió','AL'],['Natal','RN'],['Teresina','PI'],['João Pessoa','PB'],['Campo Grande','MS'],['Cuiabá','MT'],['Florianópolis','SC'],['Aracaju','SE'],['Vitória','ES'],['Porto Velho','RO'],['Rio Branco','AC'],['Palmas','TO']];

    const r = (a: any[]) => a[Math.floor(Math.random() * a.length)];

    const createNotification = () => {
      const [city, uf] = r(cities);
      const name = r(names);

      const wrapper = document.createElement('div');
      wrapper.id = 'sales-notification';
      wrapper.style.cssText = `
        position: fixed;
        bottom: 1rem;
        left: 1rem;
        z-index: 1000;
        max-width: 260px;
        transition: opacity 0.3s ease, transform 0.3s ease;
        opacity: 0;
        transform: translateY(1rem);
        pointer-events: none;
      `;

      wrapper.innerHTML = `
        <div style="
          background: #ffffff;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1);
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
          padding: 0.625rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        ">
          <div style="
            background: #10B981;
            border-radius: 9999px;
            padding: 0.375rem;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="#ffffff"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
          </div>
          <div style="min-width: 0;">
            <p style="
              color: #111827;
              font-size: 0.75rem;
              font-weight: 500;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              margin: 0;
              line-height: 1.4;
              font-family: sans-serif;
            ">
              <span style="font-weight: 700;">${name}</span>
              de
              <span style="font-weight: 700;">${city}/${uf}</span>
            </p>
            <p style="
              color: #10B981;
              font-size: 0.625rem;
              font-weight: 600;
              margin: 0;
              line-height: 1.4;
              font-family: sans-serif;
            ">comprou agora!</p>
          </div>
        </div>
      `;

      document.body.appendChild(wrapper);

      // entrada
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          wrapper.style.opacity = '1';
          wrapper.style.transform = 'translateY(0)';
        });
      });

      // saída
      setTimeout(() => {
        wrapper.style.opacity = '0';
        wrapper.style.transform = 'translateY(1rem)';
        setTimeout(() => wrapper.remove(), 300);
      }, 4000);
    };

    const initialDelay = setTimeout(createNotification, 5000);
    const interval = setInterval(createNotification, 12000);
    
    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
      const existing = document.getElementById('sales-notification');
      if (existing) existing.remove();
    };
  }, []);

  return null;
};

export default SalesNotification;
