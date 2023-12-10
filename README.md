<div align="center">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github.com/xAlpharax/FreeFlow/blob/master/assets/FreeFlowLogo.png">
  <img alt="FreeFlow Logo" src="https://github.com/xAlpharax/FreeFlow/blob/master/assets/FreeFlowLogo.png" height="200px">
</picture>
<br>
Enhancing Learning Resources for University Students
</div>

# FreeFlow
My team's Code and Notes throughout BEST Brasov Hackathon @ https://hackathon.bestbrasov.ro/

FreeFlow - Learn free with a different flow.

# Description / Proposition

FreeFlow is a comprehensive e-learning platform designed to enhance the learning experience for university students. Built on a powerful combination of Node.js and React, FreeFlow adopts the xAPI and LTI paradigms, providing a seamless and intuitive interface for both students and educators. This platform aims to offer a rich learning environment, making it easier for students to access relevant resources and for educators to deliver content in a structured manner.

## Features

xAPI Integration: FreeFlow utilizes the xAPI (Experience API) to track and analyze student interactions with learning resources, enabling a personalized and adaptive learning experience.

LTI Support: Leveraging the Learning Tools Interoperability standard, FreeFlow seamlessly integrates with various educational tools, creating a unified learning ecosystem.

Node.js Backend: The backend is powered by Node.js, ensuring scalability, efficiency, and a robust server infrastructure.

React Frontend: The frontend is built with React, providing a responsive and dynamic user interface for an optimal user experience within a single page application soon to be PWA.

Resource Recommendation: FreeFlow employs intelligent algorithms to recommend learning resources based on user behavior, preferences, and academic progress with the help of Artificial Intelligence.

# Documentation

FreeFlow comes with a simple and straight forward work-*flow* .

## Requirements

- Node.js
- npm
- MySQL
- Prisma
- React

## Installation & Usage

Clone the repository:

```bash
git clone git@github.com:xAlpharax/FreeFlow.git
```

Navigate to the project directory:

```bash
cd FreeFlow
```

Install dependencies in each respective directories:

```bash
npm install
```

Configure environment variables:

Create a .env file in the root directory.
- Define the required environment variables. (DATABASE_URL="mysql://dbuser:passwd@ip:3306/freeflow")
- Refer to .env.example for guidance.

Optionally, populate the database with toy data:

```bash
# npx prisma migrate dev
# node populate_prisma.js
```

Start the application:

```bash
node index.js
```

Visit http://localhost:12000 in your browser.

Feel free to extend it to your deployment solution or other means of serving the application to a wider audience.

## Contribuiting

We welcome contributions from the community! To contribute to FreeFlow, follow these steps:

Fork the repository.
Create a new branch for your feature or bug fix.
Make your changes and commit them with descriptive messages.
Push your changes to your fork.
Submit a pull request with a detailed description to this repo.

And thank you! We will look forward to implementing your changes.

## License

FreeFlow is software released under the GNU Affero General Public License (AGPL) , you can learn more about it [here](https://www.gnu.org/licenses/agpl-3.0.en.html).
