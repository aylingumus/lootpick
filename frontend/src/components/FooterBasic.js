import React, { useContext } from 'react';
import { MyContext } from 'context/CurrentPageContext';

import {
  Gamepad2,
  Twitter,
  Github,
  Linkedin,
  Heart,
  Mail,
  MessageCircle,
  Zap,
  Users,
  Star,
} from 'lucide-react';

function FooterBasic() {
  const { setPage } = useContext(MyContext);

  const sections = [
    {
      title: 'Explore',
      icon: <Zap className="w-4 h-4" />,
      links: [
        { label: 'Game Filter', page: 'filter' },
        { label: 'Recommendations', page: 'recommend' },
        { label: 'Compare Games', page: 'compare' },
        { label: 'My Wishlist', page: 'wishlist' },
      ],
    },
    {
      title: 'Community',
      icon: <Users className="w-4 h-4" />,
      links: [
        { label: 'Discord Server' },
        { label: 'Reddit Community' },
        { label: 'Gaming Forums' },
        { label: 'Leaderboards' },
      ],
    },
    {
      title: 'Support & Legal',
      icon: <MessageCircle className="w-4 h-4" />,
      links: [
        { label: 'Help Center' },
        { label: 'Contact Us' },
        // { label: "Bug Reports" },
        // { label: "Feature Requests" },
        { label: 'Terms of Service' },
        { label: 'Privacy Policy' },
        // { label: "Cookie Policy" },
        // { label: "DMCA" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, label: 'Twitter', href: '#' },
    { icon: <Github className="h-5 w-5" />, label: 'GitHub', href: '#' },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: '#',
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'Discord',
      href: '#',
    },
  ];

  return (
    <footer
      className="relative bg-gradient-to-br from-lp-dark via-lp-dark
        to-lp-darker text-white overflow-hidden border-t border-white/10"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-6">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8"
        >
          {/* Brand Section - First Column */}
          <div className="flex flex-col gap-4 col-span-2">
            <div className="flex flex-row items-center gap-2">
              <div
                className="p-1.5 bg-lp-light
                   rounded-xl shadow-lg"
              >
                <Gamepad2 className="w-9 h-9 text-lp-" />
              </div>
              <span
                className="text-4xl font-bold bg-gradient-to-r from-lp-light to-lp-purple-light bg-clip-text
                  text-transparent"
              >
                LootPick
              </span>
            </div>
            <p className="text-gray-300 max-w-md">
              Your ultimate destination for discovering, comparing, and finding
              the perfect video games. Powered by AI recommendations and
              comprehensive game data.
            </p>
            <div className="flex flex-row gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20
                    transition-all duration-200 transform hover:scale-110
                    backdrop-blur-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Remaining Three Columns */}
          {sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <div className="flex items-center justify-start gap-2 mb-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  {section.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.page ? () => setPage(link.page) : undefined}
                      className="group text-gray-300 hover:text-white
                        transition-all duration-200 hover:translate-x-1
                        text-left"
                    >
                      <span
                        className="group-hover:text-white-300 transition-colors"
                      >
                        {link.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section - Full width below the main grid */}
        {/* <div className=" bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-2xl p-6 mb-8 backdrop-blur-sm border border-white/10 ">
                    
                    <div className="flex flex-row items-center gap-6 ">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Stay in the Game
                            </h3>
                            <p className="text-gray-300">
                                Get the latest game releases, reviews, and
                                exclusive deals delivered to your inbox.
                            </p>
                        </div>

                        <div className="flex flex-row gap-3 flex-1 ">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>

                         
                       

                    </div>
                </div>   */}

        {/* Bottom Section */}
        <div
          className="flex flex-row items-center justify-between pt-6 border-t
            border-white/10"
        >
          <div className="flex items-center gap-6 mb-0">
            <p className="text-sm text-slate-400 flex items-center">
              © 2025 LootPick. Made with{' '}
              <Heart className="inline text-slate-400 mx-1" size={16} />
              for gamers.
            </p>
          </div>

          <div className="flex flex-row items-center gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Status
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Careers
            </a>
            <a
              href="#"
              className="flex flex-row items-center gap-1 text-slate-400
                hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>hello@lootpick.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBasic;
