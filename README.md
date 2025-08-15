# Remote Owner Advisors Website

A modern, mobile-responsive React website for Remote Owner Advisors, a real estate company specializing in landlord sales, investor guidance, and full-service listings across the Eastside market.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design focused on conversions
- **Lead Capture**: Contact form with property valuation requests
- **Service Showcase**: Four main service areas with detailed descriptions
- **Client Testimonials**: Social proof from satisfied clients
- **Team Profiles**: Information about co-lead agents CL Tang and Lan Kim
- **Contact Information**: Easy access to email and phone contact details

## Sections

1. **Hero Section**: Company tagline and call-to-action
2. **Services**: Four service cards (Landlord Sales, Investor Guidance, Full-Service Listings, Home Buyer Representation)
3. **Lead Form**: Property valuation request form
4. **Testimonials**: Client reviews and ratings
5. **About**: Company description and team member profiles
6. **Contact**: Contact information and business hours
7. **Footer**: Copyright and social media links

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd eastside-solutions-realty
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx           # Hero section
│   ├── Services.jsx       # Services showcase
│   ├── LeadForm.jsx       # Contact form
│   ├── Testimonials.jsx   # Client testimonials
│   ├── About.jsx          # About section
│   ├── Contact.jsx        # Contact information
│   └── Footer.jsx         # Footer
├── App.jsx                # Main app component
├── main.jsx              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary colors: Blue tones for brand identity
- Secondary colors: Gray tones for text and backgrounds

### Content
Update the content in each component file to match your specific needs:
- Company information in `Header.jsx` and `Footer.jsx`
- Service descriptions in `Services.jsx`
- Team member information in `About.jsx`
- Contact details in `Contact.jsx`

### Styling
The website uses Tailwind CSS utility classes. Custom styles can be added to `src/index.css` or by extending the Tailwind configuration.

## Form Handling

The lead capture form currently logs submissions to the console. To integrate with a backend service:

1. Update the `handleSubmit` function in `LeadForm.jsx`
2. Add form validation as needed
3. Connect to your preferred form handling service (e.g., Formspree, Netlify Forms, or custom API)

## Deployment

The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use the `gh-pages` package
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

For questions about this website or Remote Owner Advisors services:

- Email: info@eastsidesolutionsrealty.com
- Phone: 206-250-7930
- Service Areas: Greater Seattle Area 