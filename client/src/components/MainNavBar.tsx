import { useState } from 'react';
import { ChevronDown, Menu, X, Video, Moon, Sun } from 'lucide-react';
import { Link } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';

export default function MainNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Organized submenu structure for Courses
  const coursesSubmenu = {
    schools: [
      { label: 'Pre-Primary', href: '/courses/pre-primary' },
      { label: 'Primary Schools', href: '/courses/primary' },
      { label: 'High School', href: '/courses/high-school' },
      { label: 'Olympiads', href: '/courses/olympiads' },
      { label: 'Champion AITS', href: '/courses/champion-aits' },
    ],
    colleges: [
      { label: 'JEE (Main & Advanced)', href: '/courses/jee' },
      { label: 'NEET UG', href: '/courses/neet' },
      { label: 'National Engineering', href: '/courses/national-engineering' },
      { label: 'Intermediate', href: '/courses/intermediate' },
      { label: 'Sri Chaitanya Academy', href: '/courses/sri-chaitanya-academy' },
      { label: 'Sri Chaitanya ACHARYA', href: '/courses/acharya' },
    ],
    professional: [
      { label: 'UPSC Services', href: '/courses/upsc' },
      { label: 'CLAT Program', href: '/courses/clat' },
      { label: 'IPM Program', href: '/courses/ipm' },
      { label: 'SAT Program', href: '/courses/sat' },
    ],
  };

  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'About',
      href: '#',
      submenu: [
        { label: 'About School', href: '/about' },
        { label: 'Message from Director', href: '/director-message' },
        { label: 'Faculty', href: '/faculty' },
      ]
    },
    {
      label: 'Branches',
      href: '#',
      submenu: [
        { label: 'Apex Public School', href: '/branches/apex' },
        { label: 'Shiv Bharti Senior Secondary School', href: '/branches/shiv-bharti' },
      ]
    },
    {
      label: 'Courses',
      href: '#',
      // Custom submenu with three columns
      customSubmenu: true,
    },
    {
      label: 'Results',
      href: '#',
      submenu: [
        { label: 'Navodaya Result', href: '/results/navodaya' },
        { label: 'Military School Result', href: '/results/military' },
        { label: 'Sainik School Result', href: '/results/sainik' },
        { label: 'Class 5 Board Result', href: '/results/class5' },
        { label: 'Class 8 Board Result', href: '/results/class8' },
        { label: 'Class 10 Board Result', href: '/results/class10' },
      ]
    },
    {
      label: 'Scholarship',
      href: '#',
      submenu: [
        { label: 'Scholarship Registration', href: '/scholarship' },
        { label: 'Percentage-Based Scholarship', href: '/scholarship/percentage-based' },
      ]
    },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Admission', href: '/admission' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-40 transition-colors ">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Campus Tour */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <div className="flex items-center cursor-pointer hover:opacity-80 transition">
                <img
                  src="https://res.cloudinary.com/djtvxmttf/image/upload/v1776073440/Sri_Chaitanya_Logo_pjwpl3.png"
                  alt="Rise Academy Bansur Logo"
                  className="w-40 h-20 object-contain drop-shadow-lg"
                />
                <h2 className=' font-mono font-bold'>
                  <span className=' text-purple-900 font-extrabold text-4xl text-nowrap'>SRI CHEITANYA </span><br />
                  <span className='text-nowrap text-gray-400'> EDUCATIONAL INSTITUTIONS</span>
                </h2>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 ">
            {navItems.map((item) => (
              <div key={item.label} className="relative group font-sans">
                <Link href={item.href || '#'}>
                  <button className="px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition flex items-center gap-1">
                    {item.label}
                    {(item.submenu || item.customSubmenu) && <ChevronDown size={16} className="group-hover:rotate-180 transition" />}
                  </button>
                </Link>

                {/* Desktop Dropdown - Custom for Courses */}
                {item.customSubmenu && (
                  <div className="absolute left-0 font-sans mt-0 w-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-4 grid grid-cols-3 gap-4">
                      {/* Schools Column */}
                      <div>
                        <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-2 border-b border-purple-200 dark:border-purple-700 pb-1">Schools</h3>
                        <ul className="space-y-1">
                          {coursesSubmenu.schools.map((item) => (
                            <li key={item.label}>
                              <Link href={item.href}>
                                <div className="px-2 py-1  hover:bg-purple-50 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 transition cursor-pointer text-sm">
                                  {item.label}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Colleges Column */}
                      <div>
                        <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-2 border-b border-purple-200 dark:border-purple-700 pb-1">Colleges</h3>
                        <ul className="space-y-1">
                          {coursesSubmenu.colleges.map((item) => (
                            <li key={item.label}>
                              <Link href={item.href}>
                                <div className="px-2 py-1 hover:bg-purple-50 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 transition cursor-pointer text-sm">
                                  {item.label}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* Professional Courses Column */}
                      <div>
                        <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-2 border-b border-purple-200 dark:border-purple-700 pb-1">Professional Courses</h3>
                        <ul className="space-y-1">
                          {coursesSubmenu.professional.map((item) => (
                            <li key={item.label}>
                              <Link href={item.href}>
                                <div className="px-2 py-1 hover:bg-purple-50 dark:hover:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:text-purple-600 transition cursor-pointer text-sm">
                                  {item.label}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Desktop Dropdown for regular submenu */}
                {item.submenu && !item.customSubmenu && (
                  <div className="absolute left-0 mt-0 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.label} href={subitem.href}>
                        <div className="px-4 py-3 hover:bg-purple-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition cursor-pointer border-b dark:border-gray-700 last:border-b-0">
                          {subitem.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
          
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 border-t dark:border-gray-700 pt-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => (item.submenu || item.customSubmenu) && toggleDropdown(item.label)}
                  className="w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-gray-800 transition flex items-center justify-between"
                >
                  {item.label}
                  {(item.submenu || item.customSubmenu) && (
                    <ChevronDown
                      size={16}
                      className={`transition ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </button>

                {/* Mobile Dropdown for Courses (custom) */}
                {item.customSubmenu && openDropdown === item.label && (
                  <div className="bg-purple-50 dark:bg-gray-800 p-3 space-y-3">
                    <div>
                      <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-1">Schools</h3>
                      {coursesSubmenu.schools.map((subitem) => (
                        <Link key={subitem.label} href={subitem.href}>
                          <div
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
                          >
                            {subitem.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-1">Colleges</h3>
                      {coursesSubmenu.colleges.map((subitem) => (
                        <Link key={subitem.label} href={subitem.href}>
                          <div
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
                          >
                            {subitem.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-700 dark:text-purple-400 mb-1">Professional Courses</h3>
                      {coursesSubmenu.professional.map((subitem) => (
                        <Link key={subitem.label} href={subitem.href}>
                          <div
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 transition"
                          >
                            {subitem.label}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mobile Dropdown for regular submenu */}
                {item.submenu && !item.customSubmenu && openDropdown === item.label && (
                  <div className="bg-purple-50 dark:bg-gray-800">
                    {item.submenu.map((subitem) => (
                      <Link key={subitem.label} href={subitem.href}>
                        <div
                          onClick={() => setIsOpen(false)}
                          className="px-8 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-gray-700 transition cursor-pointer"
                        >
                          {subitem.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}