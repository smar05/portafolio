# Frontend for Personal Portfolio

This is the frontend of my personal portfolio, developed with React and Vite, which connects to a backend to manage information and authentication. It allows the display of my portfolio and the modification of its content through an admin interface.

## Installation and configuration

### Prerequisites
Before starting, make sure you have:

  - [Node.js v20.0.0](https://nodejs.org/)
  - A running backend, [portafolioback](https://github.com/smar05/portafolio-back)

### Develop enviroment
1. **Clone the repository**
   
  ```bash
  git clone https://github.com/smar05/portfolio.git
  cd portfolio
  ```

2. **Install dependencies**
   
  Install the dependencies with:
  ```bash
  npm install
  ```

3. **Environment Variables**
   
  Create a .env file in the root directory with the following content:
  ```bash
  VITE_BACK_URL=https://portafolioback-latest.onrender.com/db/
  ```

  This file sets the backend URL for API requests.

4. **Run in Development Mode**

   To start the development server, run:
   ```bash
   npm run dev
   ```

  This will start the app on port 3001. You can access it at:
  ```bash
  http://localhost:3001
  ```

### Production Deployment
To generate the production build, run:
```bash
npm run build
```
This will create a public folder with the static files ready for deployment.

#### Hosting on Netlify
The frontend of this portfolio is hosted on [Netlify](https://app.netlify.com/). After generating the production files, you can upload the public folder to Netlify or any other hosting service. The portfolio is publicly available at this [Link](https://phenomenal-beignet-f02fb3.netlify.app)

## Technologies Used
- React
- Vite
- TypeScript
- Netlify (for hosting)

## Contact Me

If you have any questions or suggestions, feel free to reach out to me via email:

📧 **[mantillasanchezr@gmail.com](mailto:mantillasanchezr@gmail.com)**
