import React, { useState } from 'react';
import { LogOut, Menu, X, BarChart3, FileText, MessageSquare, Phone, Trophy, Image, BookOpen, Building2, Settings } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { toast } from 'sonner';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function AdminLayout({ children, title }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [location] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
    toast.success('Logged out successfully');
    window.location.href = '/';
  };

  const menuItems = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: BarChart3 },
    { href: '/admin/admissions', label: 'Admissions', icon: FileText },
    { href: '/admin/enquiries', label: 'Enquiries', icon: MessageSquare },
    { href: '/admin/contacts', label: 'Contacts', icon: Phone },
    { href: '/admin/scholarship', label: 'Scholarship', icon: Trophy },
    { href: '/admin/gallery', label: 'Gallery', icon: Image },
    { href: '/admin/courses', label: 'Courses', icon: BookOpen },
    { href: '/admin/branches', label: 'Branches', icon: Building2 },
    { href: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  const isActive = (href: string) => location === href;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-gray-900 text-white transition-all duration-300 overflow-hidden flex flex-col fixed left-0 top-0 h-screen z-40`}
      >
        <div className="p-6 border-b border-gray-700 flex items-center justify-center">
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663486477596/YvGxk5M77aGQy6jNB99hVn/logo-rise_-removebg-preview_9e745d82.png" 
            alt="Rise Academy Bansur Logo" 
            className="w-28 h-auto object-contain drop-shadow-lg"
            style={{ filter: 'brightness(1.1) contrast(1.2)' }}
          />
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition ${
                    isActive(item.href)
                      ? 'bg-purple-600 text-white'
                      : 'hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{item.label}</span>
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-600 rounded-lg transition text-white"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`${sidebarOpen ? 'ml-64' : 'ml-0'} flex-1 flex flex-col transition-all duration-300`}>
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
