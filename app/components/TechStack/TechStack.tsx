import React from 'react';
import { Section, Container, Text } from '../atoms';
import styles from './TechStack.module.css';

interface Tech {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const techStack: Tech[] = [
  // Programming Languages
  { name: 'HTML', icon: <TechIconHTML />, category: 'Programming Languages' },
  { name: 'CSS', icon: <TechIconCSS />, category: 'Programming Languages' },
  { name: 'JavaScript', icon: <TechIconJavaScript />, category: 'Programming Languages' },
  { name: 'TypeScript', icon: <TechIconTypeScript />, category: 'Programming Languages' },
  
  // Frameworks & Libraries
  { name: 'React', icon: <TechIconReact />, category: 'Frameworks & Libraries' },
  { name: 'Next.js', icon: <TechIconNextJS />, category: 'Frameworks & Libraries' },
  { name: 'Node.js', icon: <TechIconNodeJS />, category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', icon: <TechIconTailwind />, category: 'Frameworks & Libraries' },
  { name: 'Bootstrap', icon: <TechIconBootstrap />, category: 'Frameworks & Libraries' },
  { name: 'Styled Components', icon: <TechIconStyledComponents />, category: 'Frameworks & Libraries' },
  { name: 'Styled System', icon: <TechIconStyledSystem />, category: 'Frameworks & Libraries' },
  { name: 'GraphQL', icon: <TechIconGraphQL />, category: 'Frameworks & Libraries' },
  
  // DB & Backend / Deployment
  { name: 'MongoDB', icon: <TechIconMongoDB />, category: 'DB & Backend / Deployment' },
  { name: 'MySQL', icon: <TechIconMySQL />, category: 'DB & Backend / Deployment' },
  { name: 'Firebase', icon: <TechIconFirebase />, category: 'DB & Backend / Deployment' },
  { name: 'Render', icon: <TechIconRender />, category: 'DB & Backend / Deployment' },
  { name: 'NameCheap', icon: <TechIconNameCheap />, category: 'DB & Backend / Deployment' },
  { name: 'Hostinger', icon: <TechIconHostinger />, category: 'DB & Backend / Deployment' },
  { name: 'Vercel', icon: <TechIconVercel />, category: 'DB & Backend / Deployment' },
  { name: 'Netlify', icon: <TechIconNetlify />, category: 'DB & Backend / Deployment' },
  
  // Digital and Creative Skills
  { name: 'Canva', icon: <TechIconCanva />, category: 'Digital and Creative Skills' },
  { name: 'Figma', icon: <TechIconFigma />, category: 'Digital and Creative Skills' },
  { name: 'Shopify', icon: <TechIconShopify />, category: 'Digital and Creative Skills' },
  { name: 'WordPress', icon: <TechIconWordPress />, category: 'Digital and Creative Skills' },
  { name: 'SEO', icon: <TechIconSEO />, category: 'Digital and Creative Skills' },
  { name: 'SEO Tools', icon: <TechIconSEOTools />, category: 'Digital and Creative Skills' },
  { name: 'Google Analytics', icon: <TechIconGoogleAnalytics />, category: 'Digital and Creative Skills' },
  { name: 'Google Tag Manager', icon: <TechIconGoogleTagManager />, category: 'Digital and Creative Skills' },
  { name: 'Google Search Console', icon: <TechIconGoogleSearchConsole />, category: 'Digital and Creative Skills' },
  { name: 'Semrush', icon: <TechIconSemrush />, category: 'Digital and Creative Skills' },
  
  // General & Soft Skills
  { name: 'Git', icon: <TechIconGit />, category: 'General & Soft Skills' },
  { name: 'GitHub', icon: <TechIconGitHub />, category: 'General & Soft Skills' },
  { name: 'APIs', icon: <TechIconAPIs />, category: 'General & Soft Skills' },
  { name: 'Responsive Design', icon: <TechIconResponsive />, category: 'General & Soft Skills' },
  { name: 'MS Office', icon: <TechIconMSOffice />, category: 'General & Soft Skills' },
  { name: 'Communication', icon: <TechIconCommunication />, category: 'General & Soft Skills' },
];

// SVG Icon Components
function TechIconHTML() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" fill="#E44D26"/>
      <path d="M64 116.8l36.378-10.086 8.559-95.878H64z" fill="#F16529"/>
      <path d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 40.02l-.061.017-12.629-3.433-.807-9.04H38.896l1.585 17.759 23.256 6.453.063-.017z" fill="#EBEBEB"/>
      <path d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l23.259-6.439.206-2.325 3.233-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" fill="#fff"/>
    </svg>
  );
}

function TechIconCSS() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" fill="#1572B6"/>
      <path d="M64.001 117.062l36.559-10.141 8.601-96.354H64.001v106.495z" fill="#33A9DC"/>
      <path d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429zm0 64.785l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.312 7.851.063-.018z" fill="#fff"/>
      <path d="M63.944 51.431v13.967h30.326l-.281 3.154-.631 7.112-.331 3.716h-29.083V93.45h17.096l-.969 10.849-16.127 4.354v14.234l28.369-7.863.207-2.325 2.424-27.171.256-2.824.178-1.992 1.297-14.536.167-1.876z" fill="#EBEBEB"/>
    </svg>
  );
}

function TechIconJavaScript() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
      <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.402-3.498 9.163-5.81-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-1.499-6.592-3.308-9.139-6.948l-9.507 5.498c1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
    </svg>
  );
}

function TechIconTypeScript() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v125.75c0 .623.502 1.125 1.125 1.125h125.75c.623 0 1.125-.502 1.125-1.125V1.125C128 .502 127.498 0 126.875 0zm17.113 113.752H14.834V47.717H9.552V34.895h26.375v12.822h-5.282v66.035zm34.642-60.184c0-6.314-2.577-10.585-7.732-12.81 2.791-1.396 4.939-3.215 6.446-5.458 1.506-2.243 2.259-4.886 2.259-7.93 0-.78-.063-1.626-.188-2.537-.126-.911-.346-1.929-.66-3.056-.314-1.126-.754-2.435-1.32-3.926-.565-1.492-1.308-3.227-2.229-5.207l-8.45 3.563c.783 1.776 1.389 3.354 1.815 4.733.427 1.38.739 2.696.935 3.95.196 1.252.294 2.478.294 3.674 0 2.405-.466 4.422-1.397 6.052-.932 1.629-2.199 2.681-3.8 3.156v.188c2.199.469 3.856 1.624 4.971 3.465 1.115 1.84 1.673 4.286 1.673 7.337v30.295h-10.738zm52.071 28.46c-1.724 4.053-3.923 7.15-6.597 9.29-2.674 2.141-6.084 3.211-10.229 3.211-2.821 0-5.213-.536-7.176-1.608-1.963-1.072-3.465-2.451-4.506-4.138-1.041-1.687-1.562-3.508-1.562-5.463 0-2.029.467-3.756 1.402-5.18.935-1.425 2.35-2.638 4.246-3.64 1.895-1.001 4.278-1.869 7.149-2.602 2.871-.733 6.24-1.465 10.106-2.196 3.866-.731 7.885-1.669 12.058-2.813v-3.38c0-4.84-1.077-8.277-3.23-10.311-2.155-2.033-5.573-3.05-10.255-3.05-4.624 0-9.547 1.168-14.769 3.506l-3.38-8.826c2.784-1.334 5.872-2.387 9.264-3.156 3.392-.769 6.978-1.154 10.756-1.154 4.996 0 9.194.886 12.594 2.658 3.4 1.772 5.918 4.293 7.556 7.563 1.637 3.27 2.456 7.149 2.456 11.637v44.171h-10.737z" fill="#007ACC"/>
    </svg>
  );
}

function TechIconReact() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
      <path d="M64 19.2c-18.2 0-36.4 3.6-50.1 10.8-6.8 3.6-12 8.4-15.6 14.4-3.6 6-5.4 13.2-5.4 20.4s1.8 14.4 5.4 20.4c3.6 6 8.8 10.8 15.6 14.4 13.7 7.2 31.9 10.8 50.1 10.8s36.4-3.6 50.1-10.8c6.8-3.6 12-8.4 15.6-14.4 3.6-6 5.4-13.2 5.4-20.4s-1.8-14.4-5.4-20.4c-3.6-6-8.8-10.8-15.6-14.4C100.4 22.8 82.2 19.2 64 19.2z" stroke="#61DAFB" strokeWidth="2.4" fill="none"/>
      <ellipse cx="64" cy="64" rx="64" ry="11.4" stroke="#61DAFB" strokeWidth="2.4" fill="none" transform="rotate(-60 64 64)"/>
      <ellipse cx="64" cy="64" rx="64" ry="11.4" stroke="#61DAFB" strokeWidth="2.4" fill="none" transform="rotate(60 64 64)"/>
    </svg>
  );
}

function TechIconNextJS() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 0L123.712 106.667H4.288L64 0z" fill="#000"/>
      <path d="M64 64l45.238 78H18.762L64 64z" fill="none" stroke="#fff" strokeWidth="8"/>
      <path d="M84 64l20 34.667H64V64h20z" fill="#fff"/>
    </svg>
  );
}

function TechIconNodeJS() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#83CD29"/>
      <path d="M64 20c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44z" fill="#3E863D"/>
      <text x="64" y="75" fontSize="36" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="Arial">N</text>
    </svg>
  );
}

function TechIconTailwind() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 32c-17 0-27 8.5-30 25.5 6-8.5 13-11.7 21-9.6 4.6 1.1 7.9 4.3 11.6 7.9 5.7 5.7 12.3 12.3 26.4 12.3 17 0 27-8.5 30-25.5-6 8.5-13 11.7-21 9.6-4.6-1.1-7.9-4.3-11.6-7.9C82.1 44.3 75.5 32 64 32zm-30 39c-17 0-27 8.5-30 25.5 6-8.5 13-11.7 21-9.6 4.6 1.1 7.9 4.3 11.6 7.9 5.7 5.7 12.3 12.3 26.4 12.3 17 0 27-8.5 30-25.5-6 8.5-13 11.7-21 9.6-4.6-1.1-7.9-4.3-11.6-7.9C52.1 83.3 45.5 71 34 71z" fill="#38BDF8"/>
    </svg>
  );
}

function TechIconBootstrap() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.589 18.993h70.823c5.302 0 9.588 4.295 9.588 9.588v70.823c0 5.302-4.286 9.588-9.588 9.588H28.589c-5.293 0-9.588-4.286-9.588-9.588V28.581c0-5.293 4.295-9.588 9.588-9.588z" fill="#7952B3"/>
      <path d="M64 32c8.837 0 16 7.163 16 16v8c5.523 0 10 4.477 10 10s-4.477 10-10 10v10c8.837 0 16 7.163 16 16s-7.163 16-16 16H48c-8.837 0-16-7.163-16-16V48c0-8.837 7.163-16 16-16h16zm-8 16v16h8c2.209 0 4-1.791 4-4s-1.791-4-4-4h-8zm8 32v16h8c2.209 0 4-1.791 4-4s-1.791-4-4-4h-8z" fill="#fff"/>
    </svg>
  );
}

function TechIconStyledComponents() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#DB7093"/>
      <path d="M64 20L84 44H64V64h28v20H44V64h20V44H44L64 20z" fill="#fff"/>
    </svg>
  );
}

function TechIconStyledSystem() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#000"/>
      <circle cx="64" cy="64" r="40" fill="none" stroke="#fff" strokeWidth="4"/>
      <circle cx="64" cy="64" r="25" fill="none" stroke="#fff" strokeWidth="4"/>
      <circle cx="64" cy="64" r="10" fill="#fff"/>
    </svg>
  );
}

function TechIconGraphQL() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.785 107.871L4 82.784l16.785-25.087h33.569L4 32.61 20.785 7.524h33.569L107.215 95.938H73.646l-13.93-20.785-13.931 20.785H20.785z" fill="#E10098"/>
      <path d="M64 20.129L80.785 45.216H47.216L64 20.129zM47.216 82.784h33.569L64 107.871 47.216 82.784z" fill="#E10098"/>
    </svg>
  );
}

function TechIconMongoDB() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M88.398 38.352c-2.112-14.378-8.67-26.49-18.304-35.669-.388-.463-1.018-.463-1.406 0C59.053 11.862 52.495 23.974 50.383 38.352c-1.378 9.376-1.035 18.133.734 26.724 2.896 14.138 8.576 27.224 15.789 39.194.388.659 1.413.659 1.801 0 7.213-11.97 12.893-25.056 15.789-39.194 1.769-8.591 2.112-17.348.734-26.724z" fill="#47A248"/>
      <path d="M64 100.535c-.388 0-.776-.194-.97-.582-6.715-12.866-12.156-25.761-14.915-39.718-1.769-8.59-2.112-17.348-.734-26.724.582-3.96 1.552-7.727 2.896-11.301.194-.582.776-.97 1.36-.776 6.327 2.112 12.47 3.378 18.42 3.378 5.951 0 12.093-1.266 18.42-3.378.584-.194 1.166.194 1.36.776 1.344 3.574 2.314 7.34 2.896 11.301 1.378 9.376 1.035 18.133-.734 26.724-2.759 13.957-8.2 26.852-14.915 39.718-.194.388-.582.582-.97.582z" fill="#47A248"/>
    </svg>
  );
}

function TechIconMySQL() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 20c-24.3 0-44 19.7-44 44v20h88V64c0-24.3-19.7-44-44-44z" fill="#4479A1"/>
      <path d="M20 84v20c0 24.3 19.7 44 44 44s44-19.7 44-44V84H20z" fill="#00758F"/>
      <circle cx="64" cy="54" r="8" fill="#fff"/>
      <path d="M52 74h24v4H52zm0 8h24v4H52z" fill="#fff"/>
    </svg>
  );
}

function TechIconFirebase() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 20L20 100l44-60-20 20 20-60 20 60-20-20z" fill="#FFCA28"/>
      <path d="M84 100l24-80L64 40l20 60z" fill="#FFA000"/>
      <path d="M20 100l24-80 20 60-44 20z" fill="#F57C00"/>
    </svg>
  );
}

function TechIconRender() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#46E3B7"/>
      <path d="M32 40h64v48H32z" fill="#000"/>
      <circle cx="48" cy="64" r="8" fill="#46E3B7"/>
      <circle cx="80" cy="64" r="8" fill="#46E3B7"/>
    </svg>
  );
}

function TechIconNameCheap() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#DE3723"/>
      <text x="64" y="80" fontSize="24" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="Arial">NC</text>
    </svg>
  );
}

function TechIconHostinger() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#673DE6"/>
      <text x="64" y="80" fontSize="20" fontWeight="bold" fill="#fff" textAnchor="middle" fontFamily="Arial">H</text>
    </svg>
  );
}

function TechIconVercel() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#000"/>
      <path d="M64 20l44 76H20L64 20z" fill="#fff"/>
    </svg>
  );
}

function TechIconNetlify() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#00AD9F"/>
      <path d="M64 20L20 80h44V60h24v20h24L64 20z" fill="#fff"/>
    </svg>
  );
}

function TechIconCanva() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#00C4CC"/>
      <circle cx="64" cy="64" r="30" fill="#fff"/>
      <circle cx="64" cy="64" r="20" fill="#FF5440"/>
    </svg>
  );
}

function TechIconFigma() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 64c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z" fill="#0ACF83"/>
      <path d="M24 104c0-11.046 8.954-20 20-20h20v20c0 11.046-8.954 20-20 20s-20-8.954-20-20z" fill="#A259FF"/>
      <path d="M64 24v40H84c11.046 0 20-8.954 20-20S95.046 24 84 24H64z" fill="#F24E1E"/>
      <path d="M24 64c0-11.046 8.954-20 20-20h20v40H44c-11.046 0-20-8.954-20-20z" fill="#FF7262"/>
      <path d="M24 24c0-11.046 8.954-20 20-20h20v40H44c-11.046 0-20-8.954-20-20z" fill="#1ABCFE"/>
    </svg>
  );
}

function TechIconShopify() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#95BF47"/>
      <path d="M64 30l-20 10v48l20 10 20-10V40L64 30z" fill="#fff"/>
      <circle cx="64" cy="54" r="4" fill="#95BF47"/>
    </svg>
  );
}

function TechIconWordPress() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="60" fill="#21759B"/>
      <path d="M64 24c22.091 0 40 17.909 40 40s-17.909 40-40 40-40-17.909-40-40 17.909-40 40-40z" fill="#fff"/>
      <circle cx="64" cy="64" r="20" fill="#21759B"/>
    </svg>
  );
}

function TechIconSEO() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#4285F4"/>
      <circle cx="64" cy="54" r="16" fill="#fff"/>
      <path d="M48 80h32v8H48zm0 12h24v8H48z" fill="#fff"/>
    </svg>
  );
}

function TechIconSEOTools() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#34A853"/>
      <path d="M40 40h48v48H40z" fill="#fff"/>
      <circle cx="64" cy="64" r="12" fill="#34A853"/>
    </svg>
  );
}

function TechIconGit() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0c-2.842-2.844-3.545-7.019-2.105-10.52L68.574 60.58l-.002 27.767c.932.459 1.819 1.028 2.644 1.85a9.677 9.677 0 010 13.683 9.677 9.677 0 01-13.683 0 9.677 9.677 0 010-13.683c.825-.821 1.712-1.39 2.644-1.851V59.733c-.932-.459-1.819-1.028-2.644-1.85a9.677 9.677 0 01-6.844-2.843L36.558 41.568 3.264 74.861c-3.175 3.177-3.175 8.325 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858c3.175-3.176 3.175-8.327-.001-11.499z" fill="#F05032"/>
    </svg>
  );
}

function TechIconGitHub() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.3 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.34-7.125-20.34-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.52-6.705-27.52-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19 4.817-1.338 9.983-2.009 15.115-2.033 5.132.024 10.302.696 15.128 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.262-30.622 41.262-57.294C124.388 32.14 97.35 5.104 64 5.104z" fill="#181717"/>
      <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.189.44.197.69.61.538.91zm2.446 2.729c-.294.267-.871.143-1.232-.28-.396-.42-.47-.984-.172-1.255.298-.266.884-.14 1.24.28.394.426.472.99.164 1.255zm2.382 3.477c-.377.258-.984.028-1.354-.49-.372-.516-.372-1.183.01-1.44.373-.258.977-.03 1.35.488.372.517.372 1.19-.006 1.442zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.266 1.564.23.527.486.686 1.18.33 1.544zm4.5 1.951c-.147.473-.825.69-1.507.49-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.49.683.206 1.13.756.984 1.237zm4.943.361c.015.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.305.88zm4.598-.979c.086.486-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.662z" fill="#fff"/>
    </svg>
  );
}

function TechIconAPIs() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#FF6B6B"/>
      <path d="M32 40h64v48H32z" fill="#fff"/>
      <circle cx="48" cy="64" r="6" fill="#FF6B6B"/>
      <circle cx="64" cy="64" r="6" fill="#FF6B6B"/>
      <circle cx="80" cy="64" r="6" fill="#FF6B6B"/>
    </svg>
  );
}

function TechIconResponsive() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="24" y="32" width="80" height="64" rx="8" fill="none" stroke="#4ECDC4" strokeWidth="4"/>
      <rect x="32" y="40" width="40" height="48" rx="4" fill="#4ECDC4"/>
      <rect x="80" y="52" width="16" height="24" rx="2" fill="#4ECDC4"/>
    </svg>
  );
}

function TechIconMSOffice() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#EB3C00"/>
      <path d="M32 32h64v64H32z" fill="#fff"/>
      <path d="M40 40h16v48H40zm24 0h16v48H64z" fill="#EB3C00"/>
    </svg>
  );
}

function TechIconCommunication() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 24c22.091 0 40 17.909 40 40 0 8.837-2.865 17.008-7.727 23.64L104 104l-16.36-7.273C81.008 102.135 72.837 105 64 105c-22.091 0-40-17.909-40-40s17.909-40 40-40z" fill="#9B59B6"/>
      <circle cx="52" cy="64" r="4" fill="#fff"/>
      <circle cx="64" cy="64" r="4" fill="#fff"/>
      <circle cx="76" cy="64" r="4" fill="#fff"/>
    </svg>
  );
}

function TechIconGoogleAnalytics() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#F9AB00"/>
      <path d="M64 20c24.3 0 44 19.7 44 44s-19.7 44-44 44-44-19.7-44-44 19.7-44 44-44z" fill="#E37400"/>
      <path d="M44 64h20v20H44V64zm24-12h20v32H68V52zm24 18h12v14h-12V70z" fill="#fff"/>
      <circle cx="64" cy="64" r="8" fill="#4285F4"/>
    </svg>
  );
}

function TechIconGoogleTagManager() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#4285F4"/>
      <path d="M64 24l20 20-20 20-20-20 20-20z" fill="#34A853"/>
      <path d="M84 44l20 20-20 20-20-20 20-20z" fill="#FBBC04"/>
      <path d="M44 64l20 20-20 20-20-20 20-20z" fill="#EA4335"/>
      <circle cx="64" cy="64" r="12" fill="#fff"/>
      <text x="64" y="70" fontSize="14" fontWeight="bold" fill="#4285F4" textAnchor="middle" fontFamily="Arial">GTM</text>
    </svg>
  );
}

function TechIconGoogleSearchConsole() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#4285F4"/>
      <circle cx="64" cy="64" r="40" fill="none" stroke="#34A853" strokeWidth="4"/>
      <circle cx="64" cy="64" r="28" fill="none" stroke="#FBBC04" strokeWidth="4"/>
      <circle cx="64" cy="64" r="16" fill="#EA4335"/>
      <path d="M64 24v20M64 84v20M24 64h20M84 64h20" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

function TechIconSemrush() {
  return (
    <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#FF6C37"/>
      <path d="M32 40h64v48H32z" fill="#fff"/>
      <path d="M40 52h48v4H40zm0 8h40v4H40zm0 8h48v4H40zm0 8h36v4H40z" fill="#FF6C37"/>
      <circle cx="96" cy="60" r="8" fill="#FF6C37"/>
    </svg>
  );
}

export const TechStack: React.FC = () => {
  const categories = Array.from(new Set(techStack.map(tech => tech.category)));
  
  return (
    <>
      <Section id="techstack" className={styles.techStack}>
        <Container className={styles.techStackContainer}>
          <div className={styles.techStackWrapper}>
            <Text variant="h2" className={styles.techStackTitle}>
              TECHNOLOGIES I WORK WITH
            </Text>
            <div className={styles.techStackGrid}>
              {techStack.map((tech, index) => (
                <div key={index} className={styles.techItem}>
                  <div className={styles.techIcon}>
                    {tech.icon}
                  </div>
                  <Text variant="bodySmall" className={styles.techName}>
                    {tech.name}
                  </Text>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
      <hr className={styles.techStackDivider} />
    </>
  );
};

