<a id="readme-top"></a>

<br />
<div align="center">
  <a href="https://ggtaxprep.com">
    <img src="https://github.com/user-attachments/assets/bcd95f96-2441-459c-905c-7843c7812bf6" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">ggtaxprep.com</h3>

  <p align="center">
    <a href="https://ggtaxprep.com/">View Live</a> •
    <a href="https://github.com/les1g/ggtaxprep.com/issues/new">Report Issue</a>
  </p>
</div>

---

## About The Project

This website was developed for **GG Tax Services, LLC** to provide clients with an intuitive and secure platform for tax preparation services.

### Pages
- **Home** – Interactive overview of services and key features  
- **About** – Company mission, credentials, and client testimonials  
- **Services** – Detailed breakdown of offerings and pricing  
- **Scheduling** – Step-by-step onboarding and appointment booking  
- **Contact** – Business hours, contact methods, and inquiry form  

### Features
- Secure client document upload portal  
- Refund tracking with estimator  
- Appointment scheduling (in-person & phone)  
- Service pricing transparency  
- Educational resources and tax guides  
- Terms of Service & Privacy Policy pages  

### Appointment booking setup

Online booking uses the existing Supabase and Brevo environment variables.
Before enabling bookings, run [the appointments schema](./frontend/supabase/appointments.sql)
in the Supabase SQL Editor. The table keeps appointment slots reserved and
prevents overlapping bookings. The deployment must also have
`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `BREVO_API_KEY`,
`BREVO_SENDER_EMAIL`, `BREVO_SENDER_NAME`, and `ADMIN_EMAIL` configured for
availability and booking emails.

---

## Build Information

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

---

## Run Locally

### Prerequisites
- Node.js 18.x or higher  
- npm, yarn, pnpm, or bun  

### Installation

```sh
git clone https://github.com/les1g/ggtaxprep.com.git
cd frontend