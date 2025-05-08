"use client"

import { useState } from "react"
import {
  Bell,
  Calendar,
  ChevronDown,
  Filter,
  Home,
  Mail,
  MessageSquare,
  PieChart,
  Search,
  Settings,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function Dashboard() {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Topbar */}
      <div className="w-full h-16 border-b flex items-center justify-between px-4 bg-black z-10 relative">
        <div className="flex items-center space-x-6">
          <span className="font-bold text-xl text-white">CMS</span>
          <nav className="md:flex items-center space-x-4">
  <button className="text-sm font-medium text-white bg-transparent">Dashboard</button>
  <button className="text-sm font-medium text-white bg-transparent">Contacts</button>
  <button className="text-sm font-medium text-white bg-transparent">Companies</button>
  <button className="text-sm font-medium text-white bg-transparent">Projects</button>
  <button className="text-sm font-medium text-white bg-transparent">Tasks</button>
  <button className="text-sm font-medium text-white bg-transparent">Reports</button>
</nav>

        </div>

        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8 bg-white" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Calendar className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2 border-l pl-4">
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
            <span className="text-sm font-medium hidden md:inline-block">John Doe</span>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="flex flex-1">
      
        <div className="w-16  border-r bg-white z-0 flex flex-col">
          <div className="p-4 space-y-4">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="h-5 w-5 mr-2" />
             
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="h-5 w-5 mr-2" />
              
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <MessageSquare className="h-5 w-5 mr-2" />
              
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <PieChart className="h-5 w-5 mr-2" />
            
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Settings className="h-5 w-5 mr-2" />
              
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 bg-gray-50">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 flex justify-between items-center border-b">
              <h2 className="text-lg font-semibold">Contacts</h2>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search contacts..."
                    className="pl-8 w-64"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="w-10 p-4">
                      <Checkbox />
                    </th>
                    <th className="p-4 text-left font-medium text-gray-500 text-sm">Name</th>
                    <th className="p-4 text-left font-medium text-gray-500 text-sm">Email</th>
                    <th className="p-4 text-left font-medium text-gray-500 text-sm">Contact Number</th>
                    <th className="p-4 text-left font-medium text-gray-500 text-sm">Owner Number</th>
                    <th className="p-4 text-left font-medium text-gray-500 text-sm">Primary Company</th>
                    <th className="p-4 text-left font-medium text-gray-500 text-sm">Latest Activities</th>
                  </tr>
                </thead>
                <tbody>
                  {contactsData.map((contact, index) => (
                    <tr key={index} className="border-t hover:bg-gray-50">
                      <td className="p-4">
                        <Checkbox />
                      </td>
                      <td className="p-4 font-medium">{contact.name}</td>
                      <td className="p-4 text-gray-600">{contact.email}</td>
                      <td className="p-4 text-gray-600">{contact.contactNumber}</td>
                      <td className="p-4 text-gray-600">{contact.ownerNumber}</td>
                      <td className="p-4 text-gray-600">{contact.primaryCompany}</td>
                      <td className="p-4 text-gray-600">{contact.latestActivity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t flex justify-between items-center">
              <div className="text-sm text-gray-500">Showing 1-5 of 25 contacts</div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data for the table
const contactsData = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    contactNumber: "+1 (555) 123-4567",
    ownerNumber: "ON-1234",
    primaryCompany: "Acme Inc.",
    latestActivity: "Email sent 2 hours ago",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    contactNumber: "+1 (555) 987-6543",
    ownerNumber: "ON-2345",
    primaryCompany: "TechCorp",
    latestActivity: "Meeting scheduled yesterday",
  },
  {
    name: "Michael Brown",
    email: "m.brown@example.com",
    contactNumber: "+1 (555) 456-7890",
    ownerNumber: "ON-3456",
    primaryCompany: "Global Solutions",
    latestActivity: "Call completed 3 days ago",
  },
  {
    name: "Emily Davis",
    email: "emily.d@example.com",
    contactNumber: "+1 (555) 234-5678",
    ownerNumber: "ON-4567",
    primaryCompany: "Innovate LLC",
    latestActivity: "Note added 1 week ago",
  },
  {
    name: "Robert Wilson",
    email: "r.wilson@example.com",
    contactNumber: "+1 (555) 876-5432",
    ownerNumber: "ON-5678",
    primaryCompany: "Future Systems",
    latestActivity: "Task completed today",
  },
]
