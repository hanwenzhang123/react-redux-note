Client(Browser) - React - Presentation/UI
   Requests  || Responses
   (Data => JSON Format)
Server - Node/Express - Business Logic, File Storage
   Database Queries ||  Credentials would not be exposed in client-side code: huge security issue
Database Server - MongoDB - Persistent Data Storage


The Frontend (client) 
- React SPA
  - Routes (with react-router-dom) - Route Config + Page Components
  - State Management (Hooks, Redux) - Redux Logic, React Hooks, Custom Hooks
  - Components + Styling (CSS) - Utility/UI Components - Styles + some componnets will be provided
  
The Backend (Server)
- Decoupled Ends
- Backend built by API (expose entry points - control over actions)
  
