"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { Modal, ConfirmModal } from "@/components/modal";
import { Input, Select } from "@/components/form";
import { useToastContext } from "@/components/toast-provider";
import { Search, Plus, MoreHorizontal, Mail, Phone, MapPin, Edit, Trash2 } from "lucide-react";

// Mock user data
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 hours ago",
    avatar: "JD"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
    lastActive: "1 day ago",
    avatar: "JS"
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
    lastActive: "1 week ago",
    avatar: "BJ"
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Moderator",
    status: "Active",
    lastActive: "3 hours ago",
    avatar: "AB"
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "User",
    status: "Active",
    lastActive: "5 minutes ago",
    avatar: "CW"
  }
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [userList, setUserList] = useState(users);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const toast = useToastContext();

  const filteredUsers = userList.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  const handleAddUser = (formData: any) => {
    const newUser = {
      id: userList.length + 1,
      name: formData.name,
      email: formData.email,
      role: formData.role,
      status: "Active",
      lastActive: "Just now",
      avatar: formData.name.split(' ').map((n: string) => n[0]).join('')
    };
    setUserList([...userList, newUser]);
    setIsAddModalOpen(false);
    toast.success("User added successfully", "The new user has been created.");
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      setUserList(userList.filter(user => user.id !== selectedUser.id));
      setIsDeleteModalOpen(false);
      setSelectedUser(null);
      toast.success("User deleted", "The user has been removed from the system.");
    }
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <p className="text-muted-foreground">
          Manage your users and their permissions
        </p>
      </div>

      {/* Actions */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="all">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Moderator">Moderator</option>
          <option value="User">User</option>
        </select>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>
            {filteredUsers.length} users found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-medium">
                    {user.avatar}
                  </div>
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{user.role}</p>
                    <p className="text-xs text-muted-foreground">{user.lastActive}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'Active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                        : 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                    }`}>
                      {user.status}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          setSelectedUser(user);
                          setIsDeleteModalOpen(true);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Add User Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New User"
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleAddUser({
            name: formData.get('name'),
            email: formData.get('email'),
            role: formData.get('role')
          });
        }} className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            placeholder="Enter full name"
            required
          />
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter email address"
            required
          />
          <Select
            label="Role"
            name="role"
            options={[
              { value: "User", label: "User" },
              { value: "Moderator", label: "Moderator" },
              { value: "Admin", label: "Admin" }
            ]}
            required
          />
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAddModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              Add User
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteUser}
        title="Delete User"
        message={`Are you sure you want to delete ${selectedUser?.name}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="destructive"
      />
    </div>
  );
}