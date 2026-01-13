'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Globe,
  MessageSquare,
  BarChart3,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Search,
  Bell,
  Settings,
  Plus,
  Send,
  Image as ImageIcon,
  Type,
  Layout
} from 'lucide-react';
import { useState } from 'react';

export default function DesignShowcase() {
  return (
    <section className="relative bg-[#1E1E1E] py-20 lg:py-32 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#D8F209]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-32 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content (4 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D8F209]/20 bg-[#D8F209]/5">
              <div className="w-2 h-2 bg-[#D8F209] rounded-full animate-pulse" />
              <span className="text-[#D8F209] uppercase tracking-wider font-medium text-xs">
                What We Create
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-white font-bold text-[clamp(32px,5vw,48px)] leading-tight">
              Design & Develop
              <span className="block text-[#D8F209]">Digital Products</span>
            </h2>

            {/* Description */}
            <p className="text-[#FBFFDE]/70 text-lg leading-relaxed">
              We craft intuitive dashboards, responsive websites, and seamless chat experiences that transform ideas into powerful digital solutions.
            </p>

            {/* Feature List */}
            <div className="space-y-4 pt-4">
              {[
                'Analytics dashboards',
                'Website builders',
                'Chat applications',
                'Data visualization'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 bg-[#D8F209] rounded-full" />
                  <span className="text-[#FBFFDE]/80 text-base">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Dashboard Demo (8 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <DashboardDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardDemo() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Website', icon: Globe },
    { name: 'Chat', icon: MessageSquare },
    { name: 'Analytics', icon: BarChart3 },
  ];

  return (
    <div className="relative">
      {/* DESKTOP VERSION - Hidden on mobile */}
      <div className="hidden md:block">
        <div className="relative bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 overflow-hidden shadow-2xl">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-[#D8F209]/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
            </div>
            <span className="text-[#FBFFDE]/40 text-xs font-mono">{activeTab.toLowerCase()}.theladder.app</span>
            <div className="w-20" />
          </div>

          {/* Dashboard Content */}
          <div className="flex h-[600px]">
            {/* Sidebar */}
            <div className="w-20 bg-[#0D0D0D] border-r border-[#D8F209]/10 py-8 flex flex-col items-center gap-6">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-3 rounded-xl transition-all duration-200 ${
                      activeTab === item.name
                        ? 'bg-[#D8F209]/20 text-[#D8F209]'
                        : 'text-[#FBFFDE]/40 hover:text-[#FBFFDE]/70 hover:bg-[#1A1A1A]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {activeTab === item.name && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#D8F209]/10 rounded-xl -z-10 border border-[#D8F209]/30"
                        transition={{ type: 'spring', duration: 0.5 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#0D0D0D] overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 'Dashboard' && <DashboardView key="dashboard" />}
                {activeTab === 'Website' && <WebsiteBuilderView key="website" />}
                {activeTab === 'Chat' && <ChatView key="chat" />}
                {activeTab === 'Analytics' && <AnalyticsView key="analytics" />}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION - Simplified cards showcase */}
      <div className="md:hidden">
        <MobileShowcase />
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#D8F209]/20 to-[#D8F209]/10 rounded-xl blur-xl -z-10" />
    </div>
  );
}

// Simplified Mobile Showcase
function MobileShowcase() {
  return (
    <div className="space-y-4">
      {/* Dashboard Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6 overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#D8F209]/20 rounded-lg">
            <LayoutDashboard className="w-5 h-5 text-[#D8F209]" />
          </div>
          <h3 className="text-white font-semibold text-lg">Analytics Dashboard</h3>
        </div>
        
        {/* Mini stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { label: 'Revenue', value: '$48.5K', icon: DollarSign, color: '#28CA42' },
            { label: 'Users', value: '2,847', icon: Users, color: '#D8F209' }
          ].map((stat, i) => (
            <div key={i} className="bg-[#1A1A1A] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                <span className="text-[#FBFFDE]/50 text-xs">{stat.label}</span>
              </div>
              <div className="text-white font-bold text-xl">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Mini chart */}
        <div className="flex items-end gap-1.5 h-20 bg-[#1A1A1A] rounded-lg p-3">
          {[40, 60, 45, 70, 55, 80, 65, 75].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="flex-1 bg-gradient-to-t from-[#D8F209] to-[#D8F209]/40 rounded-t"
            />
          ))}
        </div>
      </motion.div>

      {/* Chat Preview Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6 overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#3B82F6]/20 rounded-lg">
            <MessageSquare className="w-5 h-5 text-[#3B82F6]" />
          </div>
          <h3 className="text-white font-semibold text-lg">Chat Application</h3>
        </div>

        {/* Chat preview */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-[#1A1A1A] rounded-lg">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D8F209] to-[#D8F209]/60 flex items-center justify-center text-[#1E1E1E] font-bold">
              S
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white font-medium text-sm">Sarah Chen</div>
              <div className="text-[#FBFFDE]/50 text-xs truncate">Hey! How is the project...</div>
            </div>
            <div className="w-2 h-2 bg-[#28CA42] rounded-full" />
          </div>

          <div className="flex justify-end">
            <div className="bg-[#D8F209] text-[#1E1E1E] rounded-2xl px-4 py-2 max-w-[80%]">
              <p className="text-sm">Great! Just finished the design.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Website Builder Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6 overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#A855F7]/20 rounded-lg">
            <Globe className="w-5 h-5 text-[#A855F7]" />
          </div>
          <h3 className="text-white font-semibold text-lg">Website Builder</h3>
        </div>

        {/* Builder preview */}
        <div className="bg-white rounded-lg p-4 space-y-3">
          <div className="h-6 bg-gradient-to-r from-[#D8F209]/20 to-transparent rounded" />
          <div className="h-16 bg-gray-100 rounded flex items-center justify-center">
            <Globe className="w-8 h-8 text-gray-300" />
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-gray-200 rounded w-3/4" />
            <div className="h-3 bg-gray-200 rounded w-1/2" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-12 bg-gray-100 rounded" />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Analytics Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="bg-[#0D0D0D] rounded-xl border border-[#D8F209]/20 p-6 overflow-hidden"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-[#3B82F6]/20 rounded-lg">
            <BarChart3 className="w-5 h-5 text-[#3B82F6]" />
          </div>
          <h3 className="text-white font-semibold text-lg">Analytics View</h3>
        </div>

        {/* Traffic sources */}
        <div className="space-y-3">
          {[
            { source: 'Direct', value: 45, color: '#D8F209' },
            { source: 'Social', value: 30, color: '#3B82F6' },
            { source: 'Search', value: 25, color: '#A855F7' },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[#FBFFDE]/70 text-sm">{item.source}</span>
                <span className="text-white font-semibold text-sm">{item.value}%</span>
              </div>
              <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// Desktop Dashboard View (unchanged)
function DashboardView() {
  const stats = [
    { label: 'Total Revenue', value: '$48,574', change: '+12.5%', icon: DollarSign, color: '#28CA42' },
    { label: 'Active Users', value: '2,847', change: '+8.2%', icon: Users, color: '#D8F209' },
    { label: 'Orders', value: '1,423', change: '+23.1%', icon: ShoppingCart, color: '#3B82F6' },
    { label: 'Growth Rate', value: '94.6%', change: '+5.4%', icon: TrendingUp, color: '#A855F7' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="p-8 h-full overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-white font-bold text-2xl mb-1">Dashboard Overview</h3>
          <p className="text-[#FBFFDE]/50 text-sm">Welcome back, here's your summary</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] transition-colors">
            <Bell className="w-5 h-5 text-[#FBFFDE]/40" />
          </button>
          <button className="p-2 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] transition-colors">
            <Settings className="w-5 h-5 text-[#FBFFDE]/40" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-[#1A1A1A] rounded-xl p-5 border border-[#D8F209]/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-2.5 rounded-lg"
                  style={{ backgroundColor: `${stat.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <span className="text-[#28CA42] text-xs font-semibold px-2 py-1 bg-[#28CA42]/10 rounded">{stat.change}</span>
              </div>
              <div className="text-white font-bold text-2xl mb-1">{stat.value}</div>
              <div className="text-[#FBFFDE]/40 text-sm">{stat.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Chart */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#D8F209]/10">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-white font-semibold text-lg">Revenue Analytics</h4>
          <select className="bg-[#0D0D0D] text-[#FBFFDE]/70 text-sm px-3 py-2 rounded-lg border border-[#D8F209]/10">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>

        <div className="flex items-end gap-3 h-48">
          {[65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 70, 88].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="flex-1 bg-gradient-to-t from-[#D8F209] to-[#D8F209]/40 rounded-t-lg hover:from-[#D8F209]/80 hover:to-[#D8F209]/60 transition-all cursor-pointer"
            />
          ))}
        </div>

        <div className="flex justify-between mt-3 px-1">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
            <span key={month} className="text-[#FBFFDE]/30 text-xs">{month}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Desktop Website Builder View (unchanged)
function WebsiteBuilderView() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex h-full"
    >
      {/* Tools Sidebar */}
      <div className="w-64 bg-[#0D0D0D] border-r border-[#D8F209]/10 p-6">
        <h4 className="text-white font-semibold mb-6">Elements</h4>
        <div className="space-y-2">
          {[
            { icon: Type, label: 'Text' },
            { icon: ImageIcon, label: 'Image' },
            { icon: Layout, label: 'Container' },
            { icon: Plus, label: 'Button' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={index}
                whileHover={{ x: 5 }}
                className="w-full flex items-center gap-3 p-3 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] text-[#FBFFDE]/70 hover:text-[#D8F209] transition-all"
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="bg-white rounded-lg p-8 min-h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="h-12 bg-gradient-to-r from-[#D8F209]/20 to-transparent rounded" />
            <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
              <Globe className="w-12 h-12 text-gray-300" />
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 bg-gray-100 rounded" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Desktop Chat View (unchanged)
function ChatView() {
  const messages = [
    { user: 'Sarah Chen', message: 'Hey! How is the project coming along?', time: '2:30 PM', isOwn: false },
    { user: 'You', message: 'Great! Just finished the dashboard design.', time: '2:32 PM', isOwn: true },
    { user: 'Sarah Chen', message: 'Awesome! Can you send me a preview?', time: '2:33 PM', isOwn: false },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="flex h-full"
    >
      {/* Conversations List */}
      <div className="w-80 bg-[#0D0D0D] border-r border-[#D8F209]/10">
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FBFFDE]/40" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full bg-[#1A1A1A] text-[#FBFFDE]/70 pl-10 pr-4 py-2.5 rounded-lg text-sm border border-[#D8F209]/10 focus:border-[#D8F209]/30 outline-none"
            />
          </div>
        </div>
        <div className="space-y-1 px-2">
          {['Sarah Chen', 'Mike Wilson', 'Design Team'].map((name, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 4 }}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                i === 0 ? 'bg-[#D8F209]/10 border border-[#D8F209]/20' : 'hover:bg-[#1A1A1A]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D8F209] to-[#D8F209]/60 flex items-center justify-center text-[#1E1E1E] font-bold">
                  {name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-medium text-sm">{name}</span>
                    <span className="text-[#FBFFDE]/30 text-xs">2:33 PM</span>
                  </div>
                  <p className="text-[#FBFFDE]/50 text-xs truncate">Awesome! Can you send...</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-6 border-b border-[#D8F209]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D8F209] to-[#D8F209]/60 flex items-center justify-center text-[#1E1E1E] font-bold">
              S
            </div>
            <div>
              <h4 className="text-white font-semibold">Sarah Chen</h4>
              <p className="text-[#28CA42] text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-[#28CA42] rounded-full" />
                Online
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-auto">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] ${msg.isOwn ? 'bg-[#D8F209] text-[#1E1E1E]' : 'bg-[#1A1A1A] text-white'} rounded-2xl px-4 py-3`}>
                {!msg.isOwn && <p className="text-[#D8F209] text-xs font-semibold mb-1">{msg.user}</p>}
                <p className="text-sm">{msg.message}</p>
                <p className={`text-xs mt-1 ${msg.isOwn ? 'text-[#1E1E1E]/60' : 'text-[#FBFFDE]/40'}`}>{msg.time}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-[#D8F209]/10">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-[#1A1A1A] text-white px-4 py-3 rounded-xl border border-[#D8F209]/10 focus:border-[#D8F209]/30 outline-none"
            />
            <button className="p-3 bg-[#D8F209] rounded-xl hover:bg-[#D8F209]/90 transition-colors">
              <Send className="w-5 h-5 text-[#1E1E1E]" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Desktop Analytics View (unchanged)
function AnalyticsView() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="p-8 h-full overflow-auto"
    >
      <h3 className="text-white font-bold text-2xl mb-8">Analytics Overview</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#D8F209]/10">
          <h4 className="text-white font-semibold mb-6">Traffic Sources</h4>
          <div className="space-y-4">
            {[
              { source: 'Direct', value: 45, color: '#D8F209' },
              { source: 'Social Media', value: 30, color: '#3B82F6' },
              { source: 'Search', value: 25, color: '#A855F7' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#FBFFDE]/70 text-sm">{item.source}</span>
                  <span className="text-white font-semibold text-sm">{item.value}%</span>
                </div>
                <div className="h-2 bg-[#0D0D0D] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ duration: 1, delay: i * 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* User Activity */}
        <div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#D8F209]/10">
          <h4 className="text-white font-semibold mb-6">User Activity</h4>
          <div className="flex items-end gap-2 h-32">
            {[40, 70, 55, 85, 65, 90, 75].map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex-1 bg-gradient-to-t from-[#3B82F6] to-[#3B82F6]/40 rounded-t"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
